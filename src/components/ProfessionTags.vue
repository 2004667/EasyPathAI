<template>
  <div class="relative flex justify-center items-center flex-wrap md:w-8/12 border space-x-3 rounded max-[767px]:min-h-[150px] md:min-h-[100px] bg-[#FCFCFC]">
    <div class="w-full flex items-center justify-center space-x-1">
      <h1 class="text-[#B1ABAB] text-[19px] font-bold text-center">Фильтры</h1>
      <img class="w-[15px] mt-[6px]" src="/images/filter.svg" alt="">
    </div>
    <div class="flex overflow-hidden w-[90%] relative justify-center items-center space-x-6" style="height: 100px;">
      <button
        class="rounded-full bg-[#F0EFEF] w-[30px] h-[30px] justify-center"
        @click="prevPage"
      >
        <span class="mb-[5px]">&#8592;</span>
      </button>

      <div
        class="flex justify-center md:space-x-[10px] max-[767px]:space-x-4 max-[767px]:flex-wrap md:w-8/12 tag-container"
        :class="{ 'animate-tags': isAnimationActive }"
        @animationend="handleAnimationEnd"
      >
        <OneTag
          v-for="(proftag, index) in visibleTags"
          :key="index"
          :name="proftag.name"
          :isClicked="clickedTags[index + currentIndex * itemsPerPage]"
          @update:IsClicked="updateClickedTag(index + currentIndex * itemsPerPage, $event)"
          class="bg-[#F0EFEF] rounded-lg md:min-w-[100px] h-[30px] max-[767px]:h-[25px] max-[767px]:min-w-[90px]"
        />
      </div>

      <button
        class="rounded-full bg-[#F0EFEF] w-[30px] h-[30px] justify-center"
        @click="nextPage"
      >
        <span class="mb-[5px]">&#8594;</span>
      </button>
    </div>
  </div>
</template>

<script>
import OneTag from "./OneTag.vue";

export default {
  components: {
    OneTag,
  },
  props: {
    proftags: Array,
  },
  data() {
    return {
      currentIndex: 0,
      itemsPerPage: this.getItemsPerPage(),
      isAnimationActive: false,
      clickedTags: Array(this.proftags.length).fill(false),
    };
  },
  computed: {
    visibleTags() {
      const start = this.currentIndex * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.proftags.slice(start, end);
    },
    isAtStart() {
      return this.currentIndex === 0;
    },
    isAtEnd() {
      return this.currentIndex >= Math.ceil(this.proftags.length / this.itemsPerPage) - 1;
    },
  },
  methods: {
    prevPage() {
      if (!this.isAtStart) {
        this.currentIndex -= 1;
        this.triggerAnimation();
      }
    },
    nextPage() {
      if (!this.isAtEnd) {
        this.currentIndex += 1;
        this.triggerAnimation();
      }
    },
    triggerAnimation() {
      this.isAnimationActive = true;
    },
    handleAnimationEnd() {
      this.isAnimationActive = false;
    },
    updateClickedTag(index, value) {
      this.clickedTags[index] = value;
      const selectedTags = this.proftags
        .filter((_, idx) => this.clickedTags[idx])
        .map(tag => tag.name);
      this.$emit('filter-tags', selectedTags);
    },
    getItemsPerPage() {
      return window.innerWidth <= 767 ? 2 : 3;
    },
    handleResize() {
      const newItemsPerPage = this.getItemsPerPage();
      if (newItemsPerPage !== this.itemsPerPage) {
        this.itemsPerPage = newItemsPerPage;
        this.currentIndex = Math.min(this.currentIndex, Math.ceil(this.proftags.length / this.itemsPerPage) - 1);
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>

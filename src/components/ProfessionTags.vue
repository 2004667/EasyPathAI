<template>
  <div class="relative flex justify-center items-center flex-wrap md:w-8/12 border space-x-3 rounded max-[767px]:min-h-[150px] md:min-h-[100px] bg-[#FCFCFC]">
    <div class="w-full flex items-center justify-center space-x-1">
      <h1 class="text-[#B1ABAB] text-[19px] font-bold text-center">Фильтры</h1>
      <img class="w-[15px] mt-[6px]" src="/images/filter.svg" alt="">
    </div>
    <div class="flex overflow-hidden w-[90%] relative justify-center items-center space-x-6" style="height: 100px;">
      <!-- Left Arrow Button -->
      <button
        class="rounded-full bg-[#F0EFEF] w-[30px] h-[30px] flex items-center justify-center"
        @click="prevPage"
      >
        <span>&#8592;</span>
      </button>

      <!-- Tags Container with dynamic class for animation -->
      <div
        class="flex justify-center md:space-x-[10px] max-[767px]:space-x-4  max-[767px]:flex-wrap md:w-8/12 tag-container"
        :class="{ 'animate-tags': isAnimationActive }"
        @animationend="handleAnimationEnd"
      >
        <OneTag
          v-for="(proftag, index) in visibleTags"
          :key="index"
          :name="proftag.name"
          class="bg-[#F0EFEF] rounded-lg md:min-w-[100px] h-[30px] max-[767px]:h-[25px] max-[767px]:min-w-[90px]"
        />
      </div>

      <!-- Right Arrow Button -->
      <button
        class="rounded-full bg-[#F0EFEF] w-[30px] h-[30px] flex items-center justify-center"
        @click="nextPage"
      >
        <span>&#8594;</span>
      </button>
    </div>
  </div>
</template>


<style scoped>
/* Define the animation styles */
@keyframes pulse {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

/* Class for triggering animation */
.animate-tags {
  animation: pulse 2s ease-out;
}

/* Ensure the animation only applies when the class is added */
.tag-container {
  transition: opacity 0.5s;
}
</style>


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
      itemsPerPage: 3,
      isAnimationActive: false,
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
  },
};
</script>

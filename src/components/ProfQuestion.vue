<script>
import ProfQuestionTags from './ProfQuestionTags.vue';
export default {
    components: {
        ProfQuestionTags,
    },
    props: {
        quest: String,
        likeQuantity: Number,
        tags: Array,
        isLiked: Boolean,
        isPined: Boolean,
    },
    data() {
        return {
            localIsLiked: this.isLiked,
            localIsPined: this.isPined,
            localLikeQuantity: this.likeQuantity,
        };
    },
    computed: {
        likeBackground() {
            return this.localIsLiked ? '#FE5555' : '#F6F4F4';
        },
        pinBackground() {
            return this.localIsPined ? '#FFDA54' : '#F6F4F4';
        }
    },
    methods: {
        toggleLike() {
            this.localIsLiked = !this.localIsLiked;
            this.localLikeQuantity += this.localIsLiked ? 1 : -1;
            this.$emit('update:isLiked', this.localIsLiked);
            this.$emit('update:likeQuantity', this.localLikeQuantity);
        },
        togglePin() {
            this.localIsPined = !this.localIsPined;
            this.$emit('update:isPined', this.localIsPined);
        }
    },
    watch: {
        isLiked(newValue) {
            this.localIsLiked = newValue;
        },
        isPined(newValue) {
            this.localIsPined = newValue;
        },
        likeQuantity(newValue) {
            this.localLikeQuantity = newValue;
        }
    }
}
</script>

<template>
  <div class="flex md:w-8/12 bg-[#FCFCFC] border border-[#E2E1E1] md:mb-[5px] rounded-md md:h-[50px] max-[767px]:min-h-[55px] mt-[20px] items-center max-[767px]:w-11/12 drop-shadow-lg">
    <div class="flex w-1/5 justify-start ml-[5px]">
        <img class="md:h-[30px] max-[767px]:w-[25px]" src="/images/fire.svg" alt="">
    </div>
    <div class="flex justify-center flex-wrap w-full">
        <h1 class="h-[30px] font-['Noto_Sans'] font-light md:text-ellipsis md:overflow-hidden max-[767px]:text-[10px]">{{ quest }}</h1>
        <div class="flex space-x-2 w-full justify-center max-[767px]:text-[7px]">
            <ProfQuestionTags v-for="(tag, index) in tags" :key="index" :name="tag.name" />
        </div>
    </div>
    <div class="flex items-center space-x-2 w-1/4 justify-end mr-[10px]">
        <div :style="{ backgroundColor: likeBackground }" @click="toggleLike" class="flex justify-center items-center rounded-md md:w-[60px] max-[767px]:w-[60px] drop-shadow-lg">
            <h1 class="font-['Noto_Sans'] text-[21px] max-[767px]:text-[16px] mr-[2px]">{{ localLikeQuantity }}</h1>
            <img class="md:h-[20px] max-[767px]:h-[15px]" src="/images/like.svg" alt="">
        </div>
        <div :style="{ backgroundColor: pinBackground }" @click="togglePin" class="flex justify-center items-center rounded-md drop-shadow-lg">
            <img class="h-[32px] max-[767px]:h-[24px]" src="/images/zakrep.svg" alt="">
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>

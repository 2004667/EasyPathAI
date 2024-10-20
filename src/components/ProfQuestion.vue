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
        text: String
    },
    data() {
        return {
            localIsLiked: this.isLiked,
            localIsPined: this.isPined,
            localLikeQuantity: this.likeQuantity,
            isOpen: false
        };
    },
    computed: {
        likeBackground() {
            return this.localIsLiked ? '#FE5555' : '#F6F4F4';
        },
        pinBackground() {
            return this.localIsPined ? '#18B0F6' : '#F6F4F4';
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
        },
        toggleOpen() { 
            this.isOpen = !this.isOpen;
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
  <div :class="['flex flex-col md:w-12/12 max-[767px]:w-full bg-[#FCFCFC] border border-[#000000] rounded-md mt-[10px] drop-shadow-lg transition-all duration-300', 
                isOpen ? 'md:h-auto max-[767px]:h-auto' : 'md:h-[50px] max-[767px]:h-[45px]'] ">
    
    <div class="flex items-center w-full">
        <div class="flex w-1/5 justify-start ml-[10px] items-center" @click="toggleOpen">
            <img v-if="!isOpen" class="md:h-[30px] max-[767px]:w-[25px]" src="/images/plus.svg" alt="Plus Icon">
            <img v-else class="md:h-[30px] max-[767px]:w-[25px]" src="/images/plusopen.svg" alt="Open Icon">
        </div>

        <div class="flex justify-center flex-wrap w-full">
            <h1 class="h-[30px] font-['Noto_Sans'] font-light md:text-ellipsis md:overflow-hidden max-[767px]:text-[10px]">
                {{ quest }}
            </h1>
        <div class="flex space-x-2 w-full justify-center md:max-[767px]:space-x-0 max-[767px]:w-full max-[767px]:justify-center max-[767px]:flex-wrap text-[8px]">
              <ProfQuestionTags v-for="(tag, index) in tags" :key="index" :name="tag.name" />
        </div>

        </div>

        <div class="flex items-center space-x-2 w-1/4 justify-end mr-[10px]">
            <div :style="{ backgroundColor: likeBackground }" @click="toggleLike" class="flex justify-center items-center rounded-md md:w-[50px] h-[26px] max-[767px]:w-[60px] drop-shadow-lg">
                <h1 class="font-['Noto_Sans'] text-[21px] max-[767px]:text-[16px] mr-[2px]">{{ localLikeQuantity }}</h1>
                <img class="md:h-[16px] max-[767px]:h-[15px]" src="/images/likea.svg" alt="Like Icon">
            </div>
            <div :style="{ backgroundColor: pinBackground }" @click="togglePin" class="flex justify-center items-center rounded-md drop-shadow-lg w-[26px] h-[26px]">
                <img class="h-[16px] max-[767px]:h-[16px]" src="/images/savea.svg" alt="Pin Icon" >
            </div>
        </div>
    </div>

    <div v-if="isOpen" class="w-full">
        <hr class="border-[#000000] ">
        <div class="flex flex-wrap justify-center space-x-2 mt-[15px] w-[80%] ml-[10%]">
            <p class="text-[15px] text-[#514E4E] max-[767px]:text-[11px] max-[767px]:mt-[5px] ">{{text}}</p>
        </div>
    </div>
  </div>
</template>


<style scoped>
</style>

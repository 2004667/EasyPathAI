<template>
    <div class=" flex justify-center items-center flex-wrap md:w-8/12 border space-x-3 rounded max-[767px]:min-h-[180px] md:min-h-[100px] bg-[#FCFCFC]">
        <div class="w-full flex items-center justify-center space-x-1">
            <h1 class="text-[#B1ABAB] text-[19px] font-bold text-center">Фильтры</h1>
            <img class="w-[15px] mt-[6px]" src="/images/filter.svg" alt="">
        </div>
        <OneTag class="bg-[#F0EFEF] rounded-lg min-w-[100px] h-[30px] mb-[6px]" v-for="(proftag,index) in proftags" :key="index" :name="proftag.name" />
    </div>
</template>

<style scoped>
</style>

<script>
import OneTag from "./OneTag.vue"
export default {
    components: {
        OneTag,
    },
    props: {
        proftags: Array,
    },
    data() {
        return {
            IsClicked: false,
        };
    },
    computed: {
        buttonBackground() {
            return this.localIsLiked ? '#FE5555' : '#F6F4F4';
        },
    },
    methods: {
        toggleLike() {
            this.localIsLiked = !this.localIsLiked;
            this.localLikeQuantity += this.localIsLiked ? 1 : -1;
            this.$emit('update:isLiked', this.localIsLiked);
            this.$emit('update:likeQuantity', this.localLikeQuantity);
        },
    }
};
</script>

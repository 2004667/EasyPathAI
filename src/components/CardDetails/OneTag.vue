<template>
    <button :style="{ backgroundColor: buttonBackground, color: buttonTextColor}" @click="toggleClick" class="bg-[#F0EFEF] rounded-lg min-w-[100px] h-[30px]">
            <h1 class="font-['Noto_Sans'] font-[320] text-[12px]">{{name}}</h1>
    </button>
</template>

<script>
export default {
    props: {
        name: String,
        isClicked: Boolean,
    },
    computed: {
        buttonBackground() {
            return this.isClicked ? '#E96852' : '#F0EFEF';
        },
        buttonTextColor() {
            return this.isClicked ? '#FFFFFF' : '#000000';
        },
    },
    methods: {
        toggleClick() {
            this.$emit('update:IsClicked', !this.isClicked);
        },
    }
};
</script>
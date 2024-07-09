<template>
    <button :style="{ backgroundColor: buttonBackground, color: buttonTextColor}" @click="toggleClick" class="bg-[#F0EFEF] rounded-lg min-w-[100px] h-[30px]">
            <h1 class="font-['Noto_Sans'] font-[320] text-[12px]">{{name}}</h1>
    </button>
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        name: String,
    },
    data() {
        return {
            IsClicked: false,
        };
    },
    computed: {
        buttonBackground() {
            return this.IsClicked ? '#E96852' : '#F0EFEF';
        },
        buttonTextColor() {
            return this.IsClicked ? '#FFFFFF' : '#000000';
        },
    },
    methods: {
        toggleClick() {
            this.IsClicked = !this.IsClicked;
            this.$emit('update:IsClicked', this.IsClicked);
        },
    }
};
</script>
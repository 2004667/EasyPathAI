<template>
    <div class="bg-[#FBFBFB] md:w-1/6 md:h-4/12 drop-shadow-lg rounded-[5px] ml-5 max-[767px]:w-3/6 max-[767px]:ml-[25%]">
        <div class="flex pt-5 flex-wrap justify-center">
            <button
                v-for="(tag, index) in proftags"
                :key="index"
                class="border-[1px] ml-[5px] mr-[5px] mb-[5px] border-[#9A9494] w-5/12 h-8/12 bg-[#FBFBFB] rounded-[5px] drop-shadow-lg flex justify-center items-center"
            >
                <h1>{{ tag.name }}</h1>
            </button>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 767px) {
    h1 {
        font-size: 10px;
    }
    button {
        height: 34px;
    }
}
@media (min-width: 768px) {
    button {
        height: 40px;
    }
    h1 {
        font-size: 13px;
        font-weight: 600;
    }
}
button:hover {
    background-color: #e96852;
    color: white;
}
button:active {
    background-color: #e96852;
    color: white;
}
</style>

<script>
export default {
    props: {
        proftags: Array,
    },
    data() {
        return {};
    },
};
</script>

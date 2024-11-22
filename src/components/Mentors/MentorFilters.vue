<template>
    <div class="filter-container p-4 bg-white shadow-md rounded-md w-full max-w-[269px] h-[300px]">
        <h2 class="text-lg font-semibold mb-4">Направление:</h2>
        <select class="w-full mb-4 p-2 border border-gray-300 rounded-md" v-model="selectedDirection">
            <option value="">----------</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
        </select>

        <h2 class="text-lg font-semibold mb-4">Цель:</h2>
        <select class="w-full mb-10 p-2 border border-gray-300 rounded-md" v-model="selectedGoal">
            <option value="">----------</option>
            <option value="career">Карьерный рост</option>
            <option value="skills">Улучшение навыков</option>
        </select>

        <button
            @click="filterMentors"
            class=" filter-btn text-white py-2 rounded-md hover:bg-orange-600"
        >
            Выбрать
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedDirection: "",
            selectedGoal: "",
        };
    },
    methods: {
        filterMentors() {
            console.log(this.selectedDirection, this.selectedGoal);
        },
    },
};
</script>

<style scoped>
/* Если нужно, можно добавить дополнительные стили */
.filter-container{
    border: #9A9494 solid 1px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.filter-btn{
    background-color: #E96852;
    padding: 6px 20px;
    display: block;
    margin: 0 auto;
}
</style>

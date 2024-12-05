<template>
    <div class="filter-container p-4 bg-white shadow-md rounded-md w-full max-w-[269px] h-[300px]">
        <div class="category_wrapper">
            <h2 class="text-lg font-semibold mb-4">Направление:</h2>
            <select class="w-full mb-4 p-2 border border-gray-300 rounded-md" v-model="selectedDirection">
                <option value="">----------</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="data science">Data Science</option>
            </select>
        </div>

        <div class="category_wrapper">
            <h2 class="text-lg font-semibold mb-4">Цель:</h2>
            <select class="w-full mb-10 p-2 border border-gray-300 rounded-md" v-model="selectedGoal">
                <option value="">----------</option>
                <option value="career">Карьерный рост</option>
                <option value="skills">Улучшение навыков</option>
            </select>
        </div>

        <button
            @click="applyFilters"
            class="filter-btn text-white py-2 rounded-md hover:bg-orange-600"
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
        applyFilters() {
            this.$emit("filter", {
                direction: this.selectedDirection,
                goal: this.selectedGoal,
            });
        },
    },
};
</script>

<style scoped>
.filter-container {
    border: #9a9494 solid 1px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.filter-btn {
    background-color: #e96852;
    padding: 6px 20px;
    display: block;
    margin: 0 auto;
}

@media (max-width: 900px) {
    .filter-container {
        max-width: 400px;
        height: 192px;
    }

    .category_wrapper {
        display: inline-block;
        width: 43%;
    }
    .category_wrapper:first-child {
        margin-right: 11%;
    }
}
</style>

<template>
  <div class="mt-10 md:ml-10 max-[767px]:flex max-[767px]:justify-center">
    <div class="md:w-[270px] max-[767px]:w-4/5 h-[350px] border-[1px] border-[#9A9494] rounded-md bg-white drop-shadow-md flex flex-col items-center">
      <div class="space-y-1 mt-[30px]">
        <h1>Должность</h1>
        <select
          class="w-[200px] h-[40px] border-[1px] border-[#9A9494] rounded-[4px] drop-shadow-md text-[#9A9494]"
          v-model="selectedProfession"
          @change="applyFilters"
        >
          <option value="">Все</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Frontend">Data Analyst</option>
          <option value="Backend">Devops Engineer</option>
          <option value="Product Manager">QA Engineer</option>
          <option value="Frontend">Mobile</option>
          <option value="Backend">Machine-Learning</option>
        </select>

        <div class="pt-[20px] space-y-1">
          <h1>Грейд:</h1>
          <div class="flex flex-col ml-[12px] space-y-1">
            <div
              v-for="(grade, index) in grades"
              :key="index"
              class="flex items-center space-x-2"
            >
              <div
                class="w-4 h-4 rounded-full border-[2px] flex items-center justify-center cursor-pointer"
                :class="{
                  'border-green-500': grade.id === 'Junior',
                  'border-yellow-500': grade.id === 'Middle',
                  'border-red-500': grade.id === 'Senior',
                }"
                @click="selectGrade(grade.id)"
              >
                <div
                  v-if="selectedGrade === grade.id"
                  class="w-2 h-2 rounded-full"
                  :class="{
                    'bg-green-500': grade.id === 'Junior',
                    'bg-yellow-500': grade.id === 'Middle',
                    'bg-red-500': grade.id === 'Senior',
                  }"
                ></div>
              </div>
              <label class="cursor-pointer" @click="selectGrade(grade.id)">
                {{ grade.label }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <button
        class="
          font-['Noto_Sans'] font-bold bg-[#E96852] rounded drop-shadow-lg text-[#FFFFFF] text-center
          md:w-[100px] md:h-[30px] md:text-[15px] md:mt-[30px] md:mr-[15px]
          max-[767px]:hidden hover:bg-[#D73900]
        "
      >
        Выбрать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProfession: "",
      selectedGrade: null,
      grades: [
        { id: "Junior", label: "Junior" },
        { id: "Middle", label: "Middle" },
        { id: "Senior", label: "Senior" },
      ],
    };
  },
  methods: {
    selectGrade(gradeId) {
      this.selectedGrade = gradeId;
      this.applyFilters();
    },
    applyFilters() {
      this.$emit("filter-videos", {
        selectedProfession: this.selectedProfession,
        selectedGrade: this.selectedGrade,
      });
    },
  },
};
</script>

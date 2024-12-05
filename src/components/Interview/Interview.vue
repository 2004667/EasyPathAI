<template >
 <div class="flex flex-col items-start w-full bg-cover object-fit pb-[30px]">

  <InfoHead />
  <div class="md:flex  md:space-x-[15%]">
    <InterviewFillter
      @filter-videos="updateFilters"
    />
    <InterviewQuestDetails
      :selectedProfession="selectedProfession"
      :selectedGrade="selectedGrade"
    />
  </div>
 </div>
</template>

<script>
import InfoHead from "../Landing/InfoHead.vue";
import InterviewFillter from "../Interview/InterviewFillter.vue";
import InterviewQuestDetails from "../Interview/InterviewQuestDetails.vue";

export default {
  components: {
    InfoHead,
    InterviewFillter,
    InterviewQuestDetails,
  },
  data() {
    return {
      selectedProfession: "",
      selectedGrade: null,
    };
  },
  methods: {
    updateFilters(filters) {
      this.selectedProfession = filters.selectedProfession;
      this.selectedGrade = filters.selectedGrade;
    },
  },
};
</script>
<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
</style>

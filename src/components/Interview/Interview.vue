<template>
  <InfoHead />
  <div class="md:flex md:justify-start md:space-x-[5%]">
    <InterviewFillter
      @filter-videos="updateFilters"
    />
    <InterviewQuestDetails
      :selectedProfession="selectedProfession"
      :selectedGrade="selectedGrade"
    />
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

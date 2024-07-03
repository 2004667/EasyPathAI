<script>
import ProfessionCard from './ProfessionCard.vue';

export default {
  components: {
    ProfessionCard,
  },
  data() {
    return {
      professions: [
        { name: 'Frontend разработчик', image: '/images/frontend_devloper.svg' },
        { name: 'Backend разработчик', image: '/images/backend_devloper.svg' },
        { name: 'Data-Science инженер', image: '/images/data_analyst.svg' },
        { name: 'DevOps инженер', image: '/images/dev-ops.svg' },
        { name: 'Machine learning', image: '/images/machine_learning.svg' },
        { name: 'IOS разработчик', image: '/images/ios_dev.svg' },
      ],
    };
  },
};
</script>

<template>
  <div class="flex flex-wrap justify-center w-full max-[767px]:mt-[80px]">
    <ProfessionCard
      v-for="(profession, index) in professions"
      :key="index"
      :professionName="profession.name"
      :imagePath="profession.image"
    />
  </div>
</template>

<style scoped>
</style>
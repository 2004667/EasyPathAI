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
        { name: 'Data-Аналитик', image: '/images/data_analyst.svg' },
        { name: 'DevOps инженер', image: '/images/dev-ops.svg' },
        { name: 'Machine learning', image: '/images/machine_learning.svg' },
        { name: 'IOS разработчик', image: '/images/ios_dev.svg' },
        { name: 'Flutter разработчик', image: '/images/flutter.svg' },
        { name: 'QA инженер', image: '/images/testing.svg' },
        { name: 'Golang разработчик', image: '/images/go.svg' },
        { name: 'PHP разработчик', image: '/images/php.svg' },
        { name: 'Java разработчик', image: '/images/java.svg' },
        { name: 'Node.js разработчик', image: '/images/node-js.svg' },
      ],
    };
  },
};
</script>

<template>
  <div class="flex flex-wrap justify-center w-full max-[767px]:mt-[80px]  md:mt-[30px] p-[3%]">
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

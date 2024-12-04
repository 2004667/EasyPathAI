<template>
  <div class="h-full pb-[30px]">
    <InfoHead />
    <div class="flex flex-wrap mt-[50px] md:space-x-7 mb-[100px]">
      <div class="rounded-lg drop-shadow-lg flex justify-center flex-wrap space-y-6 md:w-full">
        <h1 class="font-['Noto_Sans'] font-medium md:text-[28px] text-center max-[767px]:text-[18px] md:w-full">
          Вопросы с собеседования на {{ professionName }}
        </h1>
        <div class="md:w-full flex justify-center">
          <ProfessionTags :proftags="proftags" @filter-tags="filterQuestions" />
        </div>

        <div v-if="filteredQuestions.length === 0" class="flex justify-center items-center">
          <p class="text-center text-gray-600">Нет вопросов для выбранных тегов.</p>
        </div>
        <div v-else class="md:w-8/12">
          <ProfQuestion
            v-for="(question, index) in filteredQuestions"
            :key="index"
            :quest="question.quest"
            :likeQuantity="question.likeQuantity"
            :tags="question.tags"
            :isLiked="question.isLiked"
            :isPined="question.isPined"
            :text="question_content[index]?.text || ''"
            class="w-[100%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfQuestion from './ProfQuestion.vue';
import InfoHead from '../Landing/InfoHead.vue';
import ProfessionTags from './ProfessionTags.vue';
import { professionData } from '../../data/data.js';

export default {
  components: {
    InfoHead,
    ProfQuestion,
    ProfessionTags,
  },
  data() {
    return {
      filteredQuestions: [],
      professionName: '',
      proftags: [],
      question_content: [],
    };
  },
  methods: {
    filterQuestions(selectedTags) {
      if (selectedTags.length === 0) {
        this.filteredQuestions = professionData[this.professionName].questions;
      } else {
        this.filteredQuestions = professionData[this.professionName].questions.filter(question =>
          selectedTags.every(tag => question.tags.some(qTag => qTag.name === tag))
        );
      }
    },
  },
  mounted() {
    this.professionName = this.$route.params.profession;
    const profession = professionData[this.professionName];
    if (profession) {
      this.proftags = profession.proftags;
      this.question_content = profession.question_content;
      this.filteredQuestions = profession.questions;
    }
  },
};
</script>

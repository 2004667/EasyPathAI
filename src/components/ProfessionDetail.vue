<template>
  <InfoHead/>
  <div class="flex flex-wrap mt-[50px] md:space-x-7 mb-[100px] ">
    <div class="rounded-lg drop-shadow-lg flex justify-center flex-wrap space-y-6">
      <h1 class="font-['Noto_Sans'] font-medium md:text-[28px] text-center max-[767px]:text-[18px] md:w-full">
        Вопросы с собеседовании на Frontend разработчика
      </h1>
      <div class="md:w-full flex justify-center">
        <ProfessionTags :proftags="proftags" @filter-tags="filterQuestions" />
      </div>
      <ProfQuestion
        v-for="(question, index) in filteredQuestions"
        :key="index"
        :quest="question.quest"
        :likeQuantity="question.likeQuantity"
        :tags="question.tags"
        :isLiked="question.isLiked"
        :isPined="question.isPined"
        :text="question_content[index]?.text || ''"
      />
    </div>
  </div>
</template>

<script>
import ProfQuestion from './ProfQuestion.vue';
import InfoHead from './InfoHead.vue';
import ProfessionTags from './ProfessionTags.vue';

export default {
  components: {
    InfoHead,
    ProfQuestion,
    ProfessionTags,
  },
  data() {
    return {
      questions: [
        { quest: 'Почему выбрано направление frontend и javascript', likeQuantity: 16, tags: [{ name: 'HTML' }, { name: 'JAVASCRIPT' }, { name: 'REACT' }], isLiked: true, isPined: true },
        { quest: 'Какие типы данных существуют в javascript', likeQuantity: 8, tags: [{ name: 'HTML' }, { name: 'JAVASCRIPT' }], isLiked: false, isPined: false },
        { quest: 'Что такое promise и какие состояния у него есть', likeQuantity: 1, tags: [{ name: 'ILKAGAY' }, { name: 'JAVASCRIPT' }], isLiked: true, isPined: false },
        { quest: 'Чем let отличается от var', likeQuantity: 10, tags: [{ name: 'JAVASCRIPT' }], isLiked: false, isPined: false },
        // Добавьте остальные вопросы
      ],
      proftags: [
        { name: 'HTML' },
        { name: 'JAVASCRIPT' },
        { name: 'REACT' },
        { name: 'VUE' },
        { name: 'NUXT' },
        { name: 'ANGULAR' },
        { name: 'NEXT' },
        { name: 'TAILWIND' },
        { name: 'BOOTSTRAP' },
        { name: 'GIT' },
        { name: 'TYPESCRIPT' },
        { name: 'DOCKER' },
      ],
      question_content: [
        { text: 'Мне понравилось что сразу можно увидеть результат твоих действий' },
        { text: '' },
        { text: 'Promise (обещание) — это объект, представляющий завершение (или неудачу) асинхронной операции и её результат. Он позволяет ассоциировать обработчики с асинхронным действием, тем самым избавляя от необходимости использовать обратные вызовы (callback-функции). Они упрощают работу с асинхронными операциями, такими как AJAX-запросы или чтение файлов, позволяя написать код, который проще понять и поддерживать.' },
        { text: '' },
        // Добавьте остальные описания
      ],
      filteredQuestions: [],
    };
  },
  methods: {
    filterQuestions(selectedTags) {
      if (selectedTags.length === 0) {
        this.filteredQuestions = this.questions;
      } else {
        this.filteredQuestions = this.questions.filter(question =>
          selectedTags.every(tag => question.tags.some(qTag => qTag.name === tag))
        );
      }
    },
  },
  mounted() {
    this.filteredQuestions = this.questions;
  },
};
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>

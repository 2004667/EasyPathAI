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
        { quest: 'Почему выбрано направление frontend и javascript', likeQuantity: 16,tags: [{name: 'HTML'},{name: 'JAVASCRIPT'},{name: 'REACT'},],isLiked: true, isPined: true,},
        { quest: 'Какие типы данных существуют в javascript', likeQuantity: 8,tags: [{name: 'HTML'},{name: 'JAVASCRIPT'},],isLiked: false, isPined: false,},
        { quest: 'Что такое promise и какие состояния у него есть', likeQuantity: 1,tags: [{name: 'ILKAGAY'},{name: 'JAVASCRIPT'},],isLiked: true, isPined: false,},
        { quest: 'Чем let отличается от var', likeQuantity: 10,tags: [{name: 'JAVASCRIPT'},],isLiked: false, isPined: false,},
        { quest: 'Чем let отличается от var', likeQuantity: 10,tags: [{name: 'JAVASCRIPT'},],isLiked: false, isPined: false,},
        { quest: 'Чем let отличается от var', likeQuantity: 10,tags: [{name: 'JAVASCRIPT'},],isLiked: false, isPined: false,},
        { quest: 'Чем let отличается от var', likeQuantity: 10,tags: [{name: 'JAVASCRIPT'},],isLiked: false, isPined: false,},
        { quest: 'Чем let отличается от var', likeQuantity: 10,tags: [{name: 'JAVASCRIPT'},],isLiked: false, isPined: false,},
      ],
      proftags: [
        { name: 'HTML' },
        { name: 'JAVASCRIPT' },
        { name: 'REACT' },
        { name: 'ILKAGAY' },
        { name: 'ILKAGAY' },
        { name: 'ILKAGAY' },
        { name: 'ILKAGAY' },
        { name: 'ILKAGAY' },
      ],
    };
  },
}
</script>

<template>
  <InfoHead/>
  <div class="flex flex-wrap mt-[50px] md:space-x-7 mb-[100px]">
    <div class=" rounded-lg drop-shadow-lg flex justify-center flex-wrap space-y-6">
        <h1 class="font-['Noto_Sans'] font-medium md:text-[28px] text-center max-[767px]:text-[18px] md:w-full">Вопросы с собеседовании на Frontend разработчика</h1>
        <div class="md:w-full flex justify-center">
          <ProfessionTags class="" :proftags="proftags"/>
        </div>
        <ProfQuestion class="" v-for="(question, index) in questions"
        :key="index"
        :quest="question.quest"
        :likeQuantity="question.likeQuantity"
        :tags="question.tags"
        :isLiked="question.isLiked"
        :isPined="question.isPined"
        />
        
    </div>
  </div>
</template>

<style scoped>
</style>
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
      ],
    };
  },
}
</script>

<template>
  <InfoHead/>
  <div class="flex flex-wrap md:ml-[70px] mt-[50px] md:space-x-7 mb-[100px]">
    <h1 class="font-['Noto_Sans'] font-medium md:text-[20px] text-center max-[767px]:text-[18px] md:hidden max-[767px]:mb-[20px]">Вопросы с собеседовании на Frontend разработчика</h1>
    <ProfessionTags class="h-[120px]" :proftags="proftags"/>
    <div class="md:w-7/12 md:bg-[#FBFBFB] rounded-lg drop-shadow-lg flex justify-center flex-wrap">
        <h1 class="font-['Noto_Sans'] font-medium md:text-[20px] text-center max-[767px]:text-[18px]  max-[767px]:hidden">Вопросы с собеседовании на Frontend разработчика</h1>
        <ProfQuestion v-for="(question, index) in questions"
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
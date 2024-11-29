<template>
  <div class="flex flex-col space-y-[10px] items-center mt-[5%]">
    <InterviewQuest
      v-for="(video, index) in filteredVideos"
      :key="index"
      :name="truncateText(video.video_name)"
      :profession="video.profession"
      :category="video.category"
      :selectedGrade="selectedGrade"
      :video_link="video.video_link"
    />
  </div>
</template>

<script>
import InterviewQuest from "./InterviewQuest.vue";

export default {
  components: {
    InterviewQuest,
  },
  props: {
    selectedProfession: {
      type: String,
      default: null,
    },
    selectedGrade: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      videos: [
        {
          video_name: "Собеседование Product Manager: что спрашивают?",
          profession: "Product Manager",
          category: "Junior",
          video_link: "https://www.youtube.com/watch?v=OLEpMxR6puQ",
        },
        {
          video_name:
            "РЕАЛЬНОЕ СОБЕСЕДОВАНИЕ НА MIDDLE FRONTEND РАЗРАБОТЧИКА | JAVASCRIPT REACT #frontend #собеседование",
          profession: "Frontend",
          category: "Middle",
          video_link: "https://www.youtube.com/watch?v=vUm4I1jOjak",
        },
        {
          video_name: "Mock-собеседование ex-СБЕР backend разработчика | BACKEND собеседование",
          profession: "Backend",
          category: "Senior",
          video_link: "https://www.youtube.com/watch?v=QgIWHeNy8fA",
        },
        {
          video_name: "Реальное Собеседование на Junior Backend разработчика — Это нужно знать!",
          profession: "Backend",
          category: "Junior",
          video_link: "https://www.youtube.com/watch?v=6-xrwyDXGE4",
        },
        {
          video_name: "Собеседование на junior аналитика данных #1",
          profession: "Data Analyst",
          category: "Junior",
          video_link: "https://www.youtube.com/watch?v=xZlMuOhIRpA",
        },
        {
          video_name: "СОБЕСЕДОВАНИЕ DevOps вопросы и ответы по Linux",
          profession: "Devops Engineer",
          category: "Junior",
          video_link: "https://www.youtube.com/watch?v=8carjFjJMkc",
        },
      ],
    };
  },
  computed: {
    filteredVideos() {
      return this.videos.filter(
        (video) =>
          (!this.selectedProfession ||
            video.profession === this.selectedProfession) &&
          (!this.selectedGrade || video.category === this.selectedGrade)
      );
    },
  },
  methods: {
    truncateText(text) {
      const maxLength = 50; 
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "..."; 
      }
      return text;
    },
  },
};
</script>

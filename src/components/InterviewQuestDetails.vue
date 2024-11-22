<template>
  <div class="flex flex-col space-y-[10px] items-center mt-[5%]">
    <InterviewQuest
      v-for="(video, index) in videos"
      :key="index"
      :name="video.video_name"
    />
  </div>
</template>

<script>
import InterviewQuest from "./InterviewQuest.vue";  

export default {
  components: {
    InterviewQuest, 
  },
  data() {
    return {
      videos: [
        { video_name: 'Интервью 2024' },
        { video_name: 'Ера хорош' },
        { video_name: 'Илька жесткий красавчик' },
        { video_name: 'Нурик тоже хорош' }
      ]
    };
  }
};
</script>

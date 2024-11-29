<template>
  <div class="flex flex-col space-y-[10px] items-center mt-[5%]">
    <div
      class="flex flex-col bg-[#fff] md:w-[100%] border-[1px] border-[#000] rounded-[5px] md:px-[15px] max-[767px]:px-[10px] max-[767px]:w-[98%] drop-shadow-lg"
    >
      <div class="flex items-center justify-between h-[55px]">
        <div class="flex items-center space-x-[30px]">
          <img src="/images/video-chat 1.svg" alt="" class="w-[38px] h-[36px]" />
          <p class="max-[767px]:text-[13px] md:w-[500px] max-[767px]:w-[200px]">
            {{ name }}
          </p>
        </div>
        <div class="flex items-center md:space-x-[80px]">
          <div
            class="md:w-[116px] md:h-[33px] max-[767px]:w-[80px] max-[767px]:h-[25px] flex justify-center items-center rounded-[4px] drop-shadow-lg"
            :class="{
              'bg-green-500 text-[#fff]': selectedGrade === 'Junior' && category === 'Junior',
              'bg-yellow-500 text-[#fff]': selectedGrade === 'Middle' && category === 'Middle',
              'bg-red-500 text-[#fff]': selectedGrade === 'Senior' && category === 'Senior',
              'bg-gray-200 text-[#fff]': selectedGrade !== category,
            }"
          >
            <p class="text-[12px] max-[767px]:text-[10px] align-center">
              {{ profession }}
            </p>
          </div>
          <div
            class="flex w-1/5 justify-start ml-[10px] items-center cursor-pointer"
            @click="toggleDetails"
          >
            <img
              v-if="!detailsVisible"
              class="md:h-[30px] max-[767px]:w-[25px]"
              src="/images/plus.svg"
              alt="Plus Icon"
            />
            <img
              v-else
              class="md:h-[30px] max-[767px]:w-[25px]"
              src="/images/plusopen.svg"
              alt="Open Icon"
            />
          </div>
        </div>
      </div>
      <hr v-if="detailsVisible" class="border-gray-300 mt-2 w-full" />
      <div v-if="detailsVisible" class="rounded-lg p-4 w-full mb-2">
        <p class="font-semibold text-lg mb-2">Видео: {{ name }}</p>
        <iframe
          class="w-full aspect-video rounded-lg border border-gray-300"
          :src="formattedVideoLink"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    selectedGrade: {
      type: String,
      default: null,
    },
    video_link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      detailsVisible: false, 
    };
  },
  computed: {
    formattedVideoLink() {
      return this.video_link.replace("watch?v=", "embed/");
    },
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible; 
    },
  },
};
</script>

<script>
export default {
  props: {
    professionName: String,
    imagePath: String,
  },
};
</script>

<template>
  <div class="
        md:w-prof-card md:h-[300px] flex justify-center items-center
        max-[767px]:w-10/12 max-[767px]:bg-white max-[767px]:h-[200px] max-[767px]:drop-shadow-lg max-[767px]:rounded-lg max-[767px]:mb-[60px]
        ">
    <div>
      <h1 class="
            font-['Noto_Sans'] font-bold
            md:text-[26px]
            max-[767px]:text-[24px]
            ">
        {{ professionName }}
      </h1>
      <div class="flex items-center">
        <div>
          <h1 class="
            font-['Noto_Sans'] font-normal
            md:text-[19px] mt-[5px]
            max-[767px]:text-[16px] 
            ">
            Junior уровень<br/>
            Middle уровень<br/>
            Senior уровень
          </h1>
          <button class="
                font-['Noto_Sans'] font-light bg-[#FBFBFB] border-[#E96852] border rounded drop-shadow-lg text-[#000000] text-center
                md:w-[156px] md:h-[42px] md:text-[18px] mt-[15px]
                max-[767px]:w-[126px] max-[767px]:h-[32px] max-[767px]:text-[15px] max-[767px]:bg-white">
            Выбрать
          </button>
        </div>
        <div class="w-full flex justify-end">
          <img class="
                md:w-[120px] md:h-[110px]
                max-[767px]:w-[110px] max-[767px]:h-[100px]
                " :src="imagePath" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
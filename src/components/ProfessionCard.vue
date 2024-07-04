<template>
  <div class="
        md:w-prof-card flex justify-center items-center
        max-[767px]:w-10/12 max-[767px]:bg-white max-[767px]:h-[200px] max-[767px]:drop-shadow-lg max-[767px]:rounded-lg max-[767px]:mb-[60px]
        ">
    <div class="md:w-10/12 animated-div md:h-[230px] max-[767px]:w-11/12 rounded-lg">
      <h1 class="
            font-['Noto_Sans'] font-bold
            md:text-[26px]
            max-[767px]:text-[24px]
            md:ml-[30px] md:mt-[20px]">
        {{ professionName }}
      </h1>
      <div class="flex items-center ">
        <div>
          <h1 class="
            font-['Noto_Sans'] font-normal
            md:text-[19px] mt-[5px]
            max-[767px]:text-[16px] 
            md:ml-[30px]">
            Junior уровень<br/>
            Middle уровень<br/>
            Senior уровень
          </h1>
          <button @click="buttonClicked" :class="{'clicked': isClicked}"
                  class="
                font-['Noto_Sans'] font-light bg-[#FBFBFB] border-[#E96852] border rounded drop-shadow-lg text-[#000000] text-center
                md:w-[156px] md:h-[42px] md:text-[18px] mt-[15px] md:ml-[27px]
                max-[767px]:w-[126px] max-[767px]:h-[32px] max-[767px]:text-[15px] max-[767px]:bg-white animated-button">
            Выбрать
          </button>
        </div>
        <div class="w-full flex justify-end">
          <img class="
                md:w-[120px] md:h-[110px]
                max-[767px]:w-[110px] max-[767px]:h-[100px] md:mr-[30px] max-[767px]:mr-[25px]
                " :src="imagePath" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    professionName: String,
    imagePath: String,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    buttonClicked() {
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, 1000); // Сбросить состояние после 1 секунды (опционально)
    },
  },
};
</script>

<style scoped>
@media (min-width: 767px) {
  .animated-div {
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .animated-div:hover {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

.animated-button {
  background-color: transparent;
  border: 2px solid #E96852;
  color: black;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s;
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #E96852;
  transition: top 0.3s;
  z-index: -1;
}

.animated-button.clicked::before {
  top: 0;
}

.animated-button.clicked {
  color: #FBFBFB;
}
</style>

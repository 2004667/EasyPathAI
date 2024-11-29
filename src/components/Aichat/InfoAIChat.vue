<script>
import AIChat from "./AIChat.vue";
export default {
    components:{
      AIChat
    }
}
</script>
<template>
      <div class="
            flex justify-center flex-wrap 
            w-full bg-[#2F2B2B] 
            md:h-[450px] md:mt-[220px] md:mb-[200px]
            max-[767px]:mt-[190px] max-[767px]:mb-[200px] max-[767px]:h-[400px] max-[767px]:items-center">
        <div class="flex justify-center md:items-center flex-wrap">
            <div class="
                    flex flex-wrap">
                <div class="w-full max-[767px]:flex max-[767px]:justify-center max-[767px]:items-center">
                    <img class="
                        md:w-[96px] md:h-[72px] md:mb-[15px]
                        max-[767px]:w-[42px] max-[767px]:h-[43px] max-[767px]:mb-[10px] animate-pulse"  
                        src="/images/yellow_light_main.svg" alt="">
                </div>
                <h1 class="
                    font-['Noto_Sans'] font-bold text-[#FFFFFF]
                    md:text-[33px] md:mr-[50px]
                    max-[767px]:w-full max-[767px]:text-[24px] max-[767px]:text-center max-[767px]:mb-[15px]">
                    Ваш Личный AI Ассистент <br> для Собеседований
                </h1>
            </div>
            <h1 class="
                font-['Noto_Sans'] font-medium text-[#FFFFFF]
                md:text-[18px] md:mt-[110px]
                max-[767px]:text-[13px] max-[767px]:w-8/12 ">
                Получите мгновенные ответы на вопросы в режиме реального <br class="max-[767px]:hidden"> времени, персонализированные советы и рекомендации по <br class="max-[767px]:hidden"> подготовке, помощь в составлении ответов на сложные вопросы и <br class="max-[767px]:hidden"> постоянную поддержку в любое время.
            </h1>
        </div>
        <div class="flex w-full max-[767px]:justify-center max-[767px]:">
          <router-link to="/aichat">
            <button class="
                flex justify-center items-center font-['Noto_Sans'] font-medium bg-[#2F2B2B] border-[#FFFFFF] rounded-sm border drop-shadow-lg text-[#FFFFFF] text-center
                md:w-[176px] md:h-[42px] md:ml-[165px] active:animate-ping-fixed 
                max-[767px]:w-[85px] max-[767px]:h-[23px] max-[767px]:text-[9px]
                ">
                Start AI Chat
                <img class="md:w-[14px] md:h-[10px] md:ml-[10px] max-[767px]:w-[5px] max-[767px]:ml-[5px]" src="/images/arrow.svg" alt="">
            </button>
          </router-link>
        </div>
      </div>
</template>
<style scoped>
 .wave {
        position: absolute;
        width: 100%;
        height: 50%;
        background: "/public/images/wave.svg" ;
        background-size: 200% 100%;
        top: 100%;
        left: 0;
        animation: wave 2s linear infinite;
        transition: 0.5s;
      }
      @keyframes wave {
        from {
          background-position-x: 0;
        }
        to {
          background-position-x: 200%;
        }
      }
      button:hover .wave {
        top: 50%;
      }
      button:hover {
        box-shadow: 6px 6px 0 black;
      }
  @media (max-width: 767px) {
    button {
        width: 120px;
        height: 40px;
        border: 0.5mm solid black;
        border-radius: 5mm;
        box-shadow: 3px 3px 0 black;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: 0.3s;
      }

  }
    @media (min-width: 768px) {
     button {
        width: 200px;
        height: 60px;
        border: 0.5mm solid black;
        border-radius: 5mm;
        box-shadow: 3px 3px 0 black;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: 0.3s;
      }

    }
</style>
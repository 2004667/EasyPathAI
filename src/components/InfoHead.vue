<script>
import { mapGetters } from 'vuex'
import LogOut from './LogOut.vue';
import { googleLogout } from 'vue3-google-login'
export default {
  components: {
    LogOut,
  },
  data() {
    return {
      settingsImage: '/images/settings.svg', 
      mobilediv : false,
      showLogOut: false,
    };
  },
  computed: {
    ...mapGetters(['user', 'loggedIn']),
  },
  methods: {
    logOut(){
      console.log('hai')
      googleLogout()
      this.$router.push('/')
    },
    changeImage() {
      
      if (this.settingsImage === '/images/settings.svg') {
        this.settingsImage = '/images/Close.svg'; 
        this.mobilediv = true;
      } else {
        this.settingsImage = '/images/settings.svg'; 
         this.mobilediv = false;
      }

    },
    toggleLogOut() {
      this.showLogOut = !this.showLogOut;
    },
    handleClickOutside(event) {
      if (!this.$refs.userInformation.contains(event.target)) {
        this.showLogOut = false;
      }
    },
  }, mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
<template>
   <div class="
     flex justify-center flex-wrap font-['Noto_Sans'] ">
    <div class="
        md:w-[1446px] md:h-[96px] md:mt-[3px]
        max-[767px]:w-full max-[767px]:
        flex drop-shadow-lg bg-[#2F2B2B] text-[#FFFFFF]" id="header">
       <div class="
            md:h-[96px] md:w-[390px] md:ml-[55px] 
            max-[767px]:w-[390px] max-[767px]:h-[62px]
            flex  items-center"> 
            <img src="
              /images/Land_logo.svg" alt="" class="
              flex items-center 
              md:h-[52px] md:w-[32px] md:mt-[10px]
              max-[767px]:h-[29px] max-[767px]:w-[20px] max-[767px]:mt-[4px] max-[767px]:ml-[10px]"/>
            <h1 class="
                text-[46px] flex  items-center
                max-[767px]:text-[24px]">EasyPathAI</h1>
       </div>
       <div class="
            flex max-[767px]:w-full max-[767px]:justify-end max-[767px]:mr-[10px]
            md:hidden">
            <img id="settings" :src="settingsImage" alt="settings" width="28px" height="25px" @click="changeImage" />
        </div>
       <div class="
           text-[22px] flex space-x-9 items-center  

           max-[767px]:hidden"> 
           <h1>
             Информация 
           </h1>
           <h1>
             AI ассистент
           </h1>
           <h1>
             Заявки
           </h1>
           <h1>
             Контакты 
           </h1>
       </div>
      <div ref="userInformation" class="
           md:ml-[114px]  md:text-[17px] flex items-center
           max-[767px]:hidden"  @click.stop="toggleLogOut"> 
           <LogOut v-if="showLogOut" class="md:ml-[30px]"/>
           <h1>{{ user.email }}</h1>
           <img :src="user.picture" alt="" class="
                 max-[767px]:hidden rounded-full
                 md:h-[55px] md:w-[55px] md:ml-[15px] flex items-center">
       </div>
    </div> 
    <div class="
        flex bg-[#FFFFFF]  drop-shadow-lg text-[#9A9494] text-[22px]  
        md:w-[1446px] md:h-[51px] 
        max-[767px]:hidden">
      <div class="
        flex space-x-[60px] items-center
        md:ml-[106px]">
         <h1>Программы вопросов </h1>
         <h1>Собеседования</h1>
         <h1>Найти ментора</h1>
      </div>
        <div class="relative w-[172px] h-[28px] ml-[380px] mt-[12px]">
          <input class="
                 border-2 border-[#9A9494] w-full h-full rounded-[15px] pl-[10px] pr-[30px] placeholder-margin" placeholder="Поиск...">
          
          <img src="/images/search.svg" alt="" class="
                h-[19px] w-[19px] absolute right-2 top-4 transform -translate-y-1/2 " id="search">
        </div>
    </div>
   </div>
  <div v-if="mobilediv" class="w-full h-[800px] bg-[#2F2B2B] flex justify-center flex-wrap md:hidden " id="mob">
   <div class="w-full flex flex-col items-center mt-[20px]">
    <div class="relative w-[348px]">
      <input class="bg-[#FFFFFF] w-full h-[50px] rounded-[5px] pl-[10px] pr-[40px] placeholder-gray-500" placeholder="Поиск..." />
      <img src="/images/search.svg" alt="" class="absolute right-1 top-1/2 transform -translate-y-1/2 w-[34px] h-[30px]" />
    </div>
    <div class="w-full flex flex-col items-center mt-[50px] space-y-4 mr-[60px]" >
      <div class="flex items-center space-x-3">
        <img src="/images/comp.svg" alt="" width="44px" height="25px" />
        <h1 class="text-[22px] text-[#ffffff]">Программы вопросов</h1>
      </div>
      <div class="flex items-center space-x-3 justify-start mr-[70px]">
        <img src="/images/talk.svg" alt="" width="44px" height="29px"/>
        <h1 class="text-[22px] text-[#ffffff] flex ">Собеседования</h1>
      </div>
      <div class="flex items-center space-x-1  justify-start mr-[80px]">
        <img src="/images/anketa.svg" alt="" width="59px" height="32px"/>
        <h1 class="text-[22px] text-[#ffffff] flex ">Найти ментора</h1>
      </div>
    </div>
    <div class="bg-[#FFFFFF] w-[348px] h-[49px] mt-[200px] flex items-center rounded-[5px]">
          <img :src="user.picture" alt="" width="40px" height="40px" class="ml-[23px] rounded-full">
          <h1 class="ml-[47px] text-[11px] font-medium flex justify-center">{{ user.email }}</h1>
          <button @click="logOut" ><img src="/images/exitac.svg" alt="" class="pl-[30px]" width="72px" height="25px"></button>
    </div>
  </div>
</div>

</template>
<style scoped>
h1{
  white-space: nowrap;  
  overflow: hidden;
}
#header.expanded {
  height: 400px; 
}
.placeholder-margin::placeholder {
  padding-left: 20px; /* Adjust this value to set the desired left padding */
}

</style> 

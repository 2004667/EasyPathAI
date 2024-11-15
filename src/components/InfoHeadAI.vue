<script>
import { mapGetters } from 'vuex'
import LogOut from './LogOut.vue';
import { googleLogout } from 'vue3-google-login'
import { mapActions } from 'vuex'

export default {
  components: {
    LogOut,
  },
  data() {
    return {
      settingsImage: '/images/settings.svg',
      mobilediv: false,
      showLogOut: false,
    };
  },
  computed: {
    ...mapGetters(['user', 'loggedIn']),
  },
  methods: {
    ...mapActions(['logout']),
    logOut() {
      googleLogout();
      this.logout();
      this.$router.push('/');
    },
    toQuestion() {
      this.$router.push('/prof');
    },
    toLand() {
      if (this.$route.path === '/land') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.$router.push('/land');
      }
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
    infotrig() {
      this.navigateAndScrollTo('info', 100);
    },
    aitrig() {
      this.navigateAndScrollTo('ai', 700);
    },
    reqtrig() {
      this.navigateAndScrollTo('requests', 2000);
    },
    contrig() {
      this.navigateAndScrollTo('contacts', 2400);
    },
    navigateAndScrollTo(section, scrollPosition) {
      if (this.$route.path === '/land') {
        // Если уже на лендинге — просто скроллим
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      } else {
        // Если не на лендинге — переходим на лендинг с нужной секцией
        this.$router.push({ path: '/land', query: { section } });
        // После навигации добавляем скролл с задержкой
        this.$nextTick(() => {
          setTimeout(() => {
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          }, 300);  // Задержка для завершения навигации
        });
      }
    }
  },
  mounted() {
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
       <div @click="toLand" class="
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
           <h1 @click="infotrig">
             Информация 
           </h1>
           <h1 @click="aitrig">
             AI ассистент
           </h1>
           <h1 @click="reqtrig">
             Заявки
           </h1>
           <h1 @click="contrig">
             Контакты 
           </h1>
       </div>
      <div ref="userInformation" class="
           md:ml-[114px]  md:text-[15px] flex items-center
           max-[767px]:hidden"  @click.stop="toggleLogOut"> 
           <LogOut v-if="showLogOut" class="md:ml-[30px]"/>
           <template v-if="user">
              <h1>{{ user.email }}</h1>
              <img :src="user.picture" alt="" class="
                  max-[767px]:hidden rounded-full
                  md:h-[55px] md:w-[55px] md:ml-[15px] flex items-center">
            </template>
        </div>
    </div> 
    <div class="
        flex bg-[#FFFFFF]  drop-shadow-lg text-[#9A9494] text-[22px]  
        md:w-[1446px] md:h-[51px] 
        max-[767px]:hidden">
      <div class="
        flex space-x-[60px] items-center
        md:ml-[106px]">
         <h1 @click="toQuestion">Программы вопросов </h1>
         <h1>Собеседования</h1>
         <h1>Найти ментора</h1>
      </div>
        <div class="relative w-[172px] h-[28px] ml-[380px] mt-[12px]">
          <input class="
                 border-2 border-[#9A9494] w-full h-full rounded-[15px] pl-[15px] pr-[30px]  text-[18px]" placeholder="Поиск...">
          
          <img src="/images/search.svg" alt="" class="
                h-[19px] w-[19px] absolute right-2 top-4 transform -translate-y-1/2 " id="search">
        </div>
    </div>
   </div>
  <div v-if="mobilediv" class="w-full h-[800px] bg-[#2F2B2B] flex justify-center flex-wrap md:hidden " id="mob">
   <div class="w-full flex flex-col items-center mt-[20px]">
   <div @click="newChat" class="w-[90%] border-[#808080] border-[1px] h-[45px] flex items-center rounded-md mt-[5%] space-x-[3%] cursor-pointer">
          <p class="text-[#808080] ml-[5%]">+</p>
          <p class="text-[#808080]">New chat</p>
   </div>
   <div class="flex flex-col justify-center items-center">
        <div v-for="(message, index) in messageHistory" :key="index" class="w-[90%] border-[#808080] border-[1px] h-[45px] flex rounded-md justify-evenly items-center mb-[10px]"> <!-- Added mb-[10px] for spacing -->
          <img src="/images/message.svg" alt="">
          <div class="flex items-center">
            <p class="text-[#808080]">{{ truncateMessage(message.text) }}</p>
          </div>
          <div class="flex space-x-[15%]">
            <img @click="removeMessage(index)" src="/images/delete.svg" alt="" width="15px">
          </div>
        </div>
    </div> 
    <div class="bg-[#FFFFFF] w-[348px] h-[49px] mt-[200px] flex items-center rounded-[5px]">
          <template v-if="user">
            <img :src="user.picture" alt="" width="40px" height="40px" class="ml-[23px] rounded-full">
            <h1 class="ml-[47px] text-[11px] font-medium flex justify-center">{{ user.email }}</h1>
          </template>
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
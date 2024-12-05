<template>
  <div class="flex justify-center flex-wrap font-['Noto_Sans']">
    <!-- Header Section (Unchanged) -->
    <div class="md:w-[94%] md:h-[96px] md:mt-[3px] max-[767px]:w-full flex drop-shadow-lg bg-[#2F2B2B] text-[#FFFFFF]" id="header">
      <div @click="toLand" class="md:h-[96px] md:w-[390px] md:ml-[55px] max-[767px]:w-[390px] max-[767px]:h-[62px] flex items-center">
        <img src="/images/Land_logo.svg" alt="" class="md:h-[52px] md:w-[32px] md:mt-[10px] max-[767px]:h-[29px] max-[767px]:w-[20px] max-[767px]:mt-[4px] max-[767px]:ml-[10px]" />
        <h1 class="text-[46px] flex items-center max-[767px]:text-[24px]">EasyPathAI</h1>
      </div>
      <div class="flex max-[767px]:w-full max-[767px]:justify-end max-[767px]:mr-[10px] md:hidden">
        <img id="settings" :src="settingsImage" alt="settings" width="28px" height="25px" @click="changeImage" />
      </div>
      <div class="text-[22px] flex space-x-9 items-center max-[767px]:hidden">
        <h1 @click="infotrig">Информация</h1>
        <h1 @click="aitrig">AI ассистент</h1>
        <h1 @click="reqtrig">Заявки</h1>
        <h1 @click="contrig">Контакты</h1>
      </div>
      <div ref="userInformation" class="md:ml-[114px] md:text-[15px] flex items-center max-[767px]:hidden" @click.stop="toggleLogOut">
        <LogOut v-if="showLogOut" class="md:ml-[30px]" />
        <template v-if="user">
          <h1>{{ user.email }}</h1>
          <img :src="user.picture" alt="" class="max-[767px]:hidden rounded-full md:h-[55px] md:w-[55px] md:ml-[15px] flex items-center" />
        </template>
      </div>
    </div>

    <!-- Mobile Adaptive Section (Updated for New Chat Functionality) -->
    <div v-if="mobilediv" class="w-full h-[800px] bg-[#2F2B2B] flex justify-center flex-wrap md:hidden" id="mob">
      <div class="w-full flex flex-col items-center mt-[20px]">
        <!-- New Chat Button -->
        <div @click="newChat" class="w-[90%] border-[#808080] border-[1px] h-[45px] flex items-center rounded-md mt-[5%] space-x-[3%] cursor-pointer">
          <p class="text-[#808080] ml-[5%]">+</p>
          <p class="text-[#808080]">New chat</p>
        </div>

        <!-- Chat Histories -->
        <div v-for="(chat, index) in chatHistories" :key="index" class="w-[90%] border-[#808080] border-[1px] h-[45px] flex rounded-md justify-between items-center mt-[10px] bg-[#404040] text-white">
          <p class="text-sm ml-2">{{ truncateMessage(chat[0]?.text || 'New Chat') }}</p>
          <div class="flex space-x-2">
            <button @click="viewChat(index)" class="text-xs px-2 py-1 rounded bg-blue-500 hover:bg-blue-600">View</button>
            <button @click="deleteChat(index)" class="text-xs px-2 py-1 rounded bg-red-500 hover:bg-red-600">Delete</button>
          </div>
        </div>

        <!-- Current Chat Messages -->
        <div v-for="(message, index) in messageHistory" :key="index" class="w-[90%] border-[#808080] border-[1px] h-[45px] flex rounded-md justify-between items-center mt-[10px] bg-[#404040] text-white">
          <p class="text-sm ml-2">{{ message.text }}</p>
          <img @click="removeMessage(index)" src="/images/delete.svg" alt="Delete" width="15px" class="mr-2 cursor-pointer" />
        </div>

        <!-- Displaying message history -->
        <div v-if="messageHistory.length === 0" class="text-[#808080] text-sm mt-2">
          <p>No messages yet. Start a new chat!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LogOut from '../Landing/LogOut.vue';
import { googleLogout } from 'vue3-google-login';
import { mapActions } from 'vuex';

export default {
  components: {
    LogOut,
  },
  data() {
    return {
      settingsImage: '/images/settings.svg',
      mobilediv: false,
      showLogOut: false,
      messageHistory: [], // Current chat messages
      chatHistories: [], // All saved chat histories
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
    toLand() {
      if (this.$route.path === '/land') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.$router.push('/land');
      }
    },
    changeImage() {
      this.mobilediv = !this.mobilediv; // Toggle mobilediv visibility
      this.settingsImage = this.mobilediv
        ? '/images/Close.svg'
        : '/images/settings.svg';
    },
    toggleLogOut() {
      this.showLogOut = !this.showLogOut;
    },
    // New chat method: saves current messages and starts fresh
    newChat() {
      // Check if there are messages in the current chat
      if (this.messageHistory.length > 0) {
        // Save the last message from the current chat
        const lastMessage = this.messageHistory[this.messageHistory.length - 1].text;
        
        // Save it into chatHistories as a new chat entry
        this.chatHistories.push([{ text: lastMessage }]);
      }
      
      // Reset the message history for new chat with default greeting
      this.messageHistory = [{ text: "Hello, how can I assist you?" }];
      
      // Log to indicate a new chat has started
      console.log('New chat started.');
    },
    removeMessage(index) {
      this.messageHistory.splice(index, 1); // Remove message from current chat
    },
    viewChat(index) {
      // Load saved chat into the current chat
      this.messageHistory = [...this.chatHistories[index]];
    },
    deleteChat(index) {
      this.chatHistories.splice(index, 1); // Remove chat from history
    },
    truncateMessage(message) {
      return message.length > 20 ? `${message.substring(0, 20)}...` : message; // Truncate long messages
    },
  },
};
</script>

<style scoped>
h1 {
  white-space: nowrap;
  overflow: hidden;
}

.chat-summary {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #808080;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #2F2B2B;
}

.chat-summary p {
  color: #808080;
  font-size: 14px;
  margin: 0;
}

.chat-summary button {
  color: #fff;
  background-color: #555;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.chat-summary button:hover {
  background-color: #444;
}
</style>

<template>
  <InfoHead />
  <div class="flex flex-col h-screen">
    <div class="flex w-[60%] justify-between flex-grow">
      <div class="ml-[2.3rem]">
        <AIChatHistory 
          :messageHistory="savedMessages"
          @new-chat="resetChat"
          @edit-message="editSavedMessage"
          @remove-message="removeSavedMessage"
        />
      </div>

      <div class="h-screen flex flex-col justify-between items-center">
        <div v-if="chatHistory.length === 0" class="flex flex-col items-center mt-[10%] ml-[55%]">
          <h1 class="text-[#9A9494] text-[50px] font-[600]">Chat with AI</h1>
          <img src="/images/robot-assistant 1.svg" alt="" width="80px" height="80px" class="mt-[3%]" />
          
          <div class="flex justify-center w-full mt-[20px] mb-[20px] ">
            <AIChatInput 
              :userMessage="userMessage" 
              @update:userMessage="userMessage = $event" 
              @send-message="sendMessage" 
            />
          </div>

          <h1>AI ChatBot will answer your questions</h1>
        </div>

        <div v-else class="chat-box p-[10px] mt-[20px] border-[1px] border-[#808080] rounded-md h-[75%] w-[600px] ml-[50%] bg-[#FFF] drop-shadow-lg flex flex-col">
          <div v-for="(message, index) in chatHistory" :key="index" class="m-[5px] flex">
            <div v-if="message.sender === 'Bot'" class="flex items-start">
              <div class="flex items-center">
                 <img src="/images/robot-assistant 1.svg" alt="AI" width="30px" height="30px" class="mr-[5px]" />
                 <div :class="['message-bubble', 'bot-message']">
                    {{ message.text }}
                 </div>
              </div>
            </div>
            <div v-else class="flex justify-end flex-grow">
              <div :class="['message-bubble', 'user-message']">
                {{ message.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 flex justify-center">
      <AIChatInput 
        v-if="chatHistory.length > 0" 
        :userMessage="userMessage" 
        @update:userMessage="userMessage = $event" 
        @send-message="sendMessage" 
      />
    </div>
  </div>
</template>

<script>
import AIChatHistory from './AIChatHistory.vue';
import InfoHead from './InfoHead.vue';
import AIChatInput from './AIChatInput.vue';

export default {
  components: {
    InfoHead,
    AIChatHistory,
    AIChatInput,
  },
  data() {
    return {
      userMessage: '',
      chatHistory: JSON.parse(localStorage.getItem('chatHistory')) || [], 
      savedMessages: JSON.parse(localStorage.getItem('savedMessages')) || [], 
    };
  },
  methods: {
    sendMessage(message) {
      if (message.trim() !== '') {
        this.chatHistory.push({ sender: 'User', text: message });
        localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory)); 

        setTimeout(() => {
          this.chatHistory.push({ sender: 'Bot', text: 'Hello!' });
          localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory)); 
        }, 1000);

        this.userMessage = '';
      }
    },
    resetChat() {
      this.savedMessages.push({ text: this.chatHistory.map(msg => msg.text).join(', ') });
      localStorage.setItem('savedMessages', JSON.stringify(this.savedMessages)); 
      this.chatHistory = [];
      localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory)); 
    },
    removeSavedMessage(index) {
      this.savedMessages.splice(index, 1);
      localStorage.setItem('savedMessages', JSON.stringify(this.savedMessages));
    }
  },
};
</script>

<style scoped>
.chat-box {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #808080;
  border-radius: 8px;
  height: 65%;
  width: 600px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.user-message {
  background-color: #D4D4D3;
  color: white;
  border: 1px solid;
  border-radius: 15px;
  padding: 5px 10px;
  max-width: 75%; 
  margin-left: auto; 
}

.bot-message {
  align-self: flex-start;
  max-width: 75%; 
}
</style>

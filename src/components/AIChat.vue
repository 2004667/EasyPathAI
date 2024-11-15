<template>
  <InfoHeadAI />
  <div class="flex flex-col h-screen">
    <div class="flex md:w-[70%] max-[767px]:w-[100%] max-[767px]:justify-center md:justify-between flex-grow">
      <div class="ml-[2.3rem] max-[767px]:hidden">
        <AIChatHistory
          :messageHistory="savedMessages"
          @new-chat="resetChat"
          @edit-message="editSavedMessage"
          @remove-message="removeSavedMessage"
        />
      </div>

      <div class="md:h-screen md:flex md:flex-col md:justify-between md:items-center max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:w-full">
        <div v-if="chatHistory.length === 0" class="flex flex-col items-center md:mt-[10%] md:ml-[55%] max-[767px]:ml-0 max-[767px]:mt-0 max-[767px]:w-[80%]">
          <h1 class="text-[#9A9494] text-[50px] font-[600] text-center">Chat with AI</h1>
          <img src="/images/robot-assistant 1.svg" alt="" width="80px" height="80px" class="mt-[3%]" />
          
          <div class="flex justify-center w-full mt-[20px] mb-[20px]">
            <AIChatInput
              :userMessage="userMessage"
              @update:userMessage="userMessage = $event"
              @send-message="sendMessage"
            />
          </div>

          <h1 class="text-center">AI ChatBot will answer your questions</h1>
        </div>

        <!-- Chat messages box for ongoing conversation -->
        <div v-else class="chat-box p-[10px] mt-[20px] border-[1px] border-[#808080] rounded-md h-[75%] md:w-[600px] sm:w-[90%] bg-[#FFF] drop-shadow-lg flex flex-col">
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

    <!-- Message input bar at the bottom for ongoing conversation -->
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
import InfoHeadAI from './InfoHeadAI.vue';
import AIChatInput from './AIChatInput.vue';

export default {
  components: {
    InfoHeadAI,
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
    },
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
  overflow-x: hidden;
}

/* Responsive styles for smaller screens (max-width: 767px) */
@media (max-width: 767px) {
  .chat-box {
    width: 100%;
    max-width: 600px; /* Limit max width on small devices */
    height: 50%;
    padding: 10px;
    margin-top: 20%;
  }

  .message-bubble {
    font-size: 14px;
    padding: 12px;
    max-width: 200px; /* Limit max width of the message bubble */
    width: auto; /* Allow the bubble to expand based on content length */
    word-wrap: break-word; /* Allow long words to break */
    white-space: normal; /* Ensure the text wraps inside the bubble */
    display: inline-block;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  /* Adjust text width inside the bubble */
  .message-bubble.bot-message,
  .message-bubble.user-message {
    padding: 10px;
    width: auto; /* Allow the bubble to expand based on content length */
    max-width: 200px; /* Set a max-width limit for the message bubble */
  }

  .message-bubble.bot-message span,
  .message-bubble.user-message span {
    display: block;
    width: auto; /* Allow text to adjust based on content length */
    max-width: 180px; /* Limit text width to 180px */
  }
}

@media (min-width: 768px) {
  .chat-box {
    width: 600px;
    height: 60%;
  }

  .message-bubble {
    font-size: 18px;
    padding: 14px;
    max-width: 400px;
    word-wrap: break-word;
    white-space: normal;
    display: inline-block;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .message-bubble.user-message,
  .message-bubble.bot-message {
    display: inline-block;
    max-width: 400px;
    padding: 5px;
    word-wrap: break-word;
    white-space: normal;
    line-height: 1.5;
  }

  .message-bubble.user-message {
    text-align: right;
  }

  .message-bubble.bot-message {
    text-align: left;
  }
}

.user-message {
  background-color: #D4D4D3;
  color: white;
  border: 1px solid;
  border-radius: 15px;
  padding: 8px 18px; /* Keep original padding */
  max-width: 75%;
  margin-left: auto;
  word-wrap: break-word;
  line-height: 1.5;
  margin-bottom: 8px;
}

.bot-message {
  background-color: #B9D3B8;
  color: white;
  border: 1px solid;
  border-radius: 15px;
  padding: 7px 18px; /* Keep original padding */
  max-width: 75%;
  margin-right: auto;
  word-wrap: break-word;
  line-height: 1.5;
  margin-bottom: 8px;
}


</style>

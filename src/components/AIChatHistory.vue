<template>
  <div class="w-[250px] h-[700px] border-[#D9D9D9] border-[1px] bg-[#FFF] flex flex-col justify-between pt-[1%] pb-[1%]">
    <div>
      <div class="flex justify-center">
        <div @click="newChat" class="w-[90%] border-[#808080] border-[1px] h-[45px] flex items-center rounded-md mt-[5%] space-x-[3%] cursor-pointer">
          <p class="text-[#808080] ml-[5%]">+</p>
          <p class="text-[#808080]">New chat</p>
        </div>
      </div>
      <div class="flex items-start ml-[5%] mt-[10%]">
        <h1 class="font-[600]">History</h1>
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
    </div>
    <div class="space-y-[3%] flex flex-col items-center space-y-[13%] mb-[5%]">
      <hr class="w-[90%] bg-[#000000]">
      <div class="w-[90%] border-[#808080] border-[1px] h-[45px] flex rounded-md items-center space-x-[5%]">
        <div class="ml-[10%]">
          <img src="/images/goback.svg" alt="">
        </div>
        <router-link to="/land">
          <div>
            <h1 class="text-[#808080]">Go Back</h1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageHistory: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    newChat() {
      this.$emit('new-chat'); 
    },
    editMessage(index) {
      this.$emit('edit-message', index);
    },
    removeMessage(index) {
      this.$emit('remove-message', index);
    },
    saveMessage(message) {
      const MAX_CHAR_LIMIT = 100; 
      if (message.length <= MAX_CHAR_LIMIT) {
        this.$emit('save-message', message); 
      } else {
        alert(`Message exceeds ${MAX_CHAR_LIMIT} characters!`); 
      }
    },
    truncateMessage(message) {
      const MAX_LENGTH = 20; 
      return message.length > MAX_LENGTH ? message.substring(0, MAX_LENGTH) + '...' : message;
    }
  }
}
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>

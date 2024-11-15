<template>
  <div class="flex justify-center fixed bottom-0 left-0 right-0 z-50  p-2 md:relative md:mb-2">
    <div class="flex justify-center items-center relative w-full md:w-[600px] max-w-[90%]">
      <input
        :value="userMessage"  
        @input="$emit('update:userMessage', $event.target.value)" 
        @keyup.enter="sendMessage"
        class="w-full h-[50px] bg-[#FFF] rounded-[25px] drop-shadow-lg border-[1px] border-[#808080] 
        p-[3%] pr-[50px]"
        placeholder="Сообщить EasyPathAI..."
      />
      <div
        @click="sendMessage"
        class="absolute right-[10px] top-1/2 transform -translate-y-1/2 rounded-full w-[36px] h-[36px] 
        bg-[#E96852] flex justify-center items-center cursor-pointer active:bg-[#FF4829]"
      >
        <img src="/images/strelkasear.svg" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    userMessage: {
      type: String,
      default: '',
    },
  },
  methods: {
    sendMessage() {
      this.$emit('send-message', this.userMessage); 
    },
  },
};
</script>

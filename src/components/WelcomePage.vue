<script>
import { decodeCredential } from 'vue3-google-login'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login']),
    callback(response) {
      const user = decodeCredential(response.credential)
      this.login(user)
      this.$router.push('/land')
    },
  },
}
</script>
<template>
  <div class="h-screen">
        <div class="
          flex justify-center flex-wrap" >
        <div class="
            font-['Noto_Sans'] font-medium flex flex-wrap justify-center
            max-[767px]:text-[34px] max-[767px]:mt-[220px]
            md:text-[80px] md:mt-[150px]">
          <div class="
              flex justify-center
              max-[767px]:w-full">
            <h1 class="
              
              ">
              Добро пожаловать
          </h1>
          </div>
          <h1 class="
              flex
              md:ml-2 md:mr-2">
              в
          </h1>
          <img src="/images/mega_logo.svg" alt="" class="
              md:w-[3.8125rem] md:h-[5.125rem] md:ml-2 md:mr-2 md:mt-7
              max-[767px]:w-[1.875rem] max-[767px]:h-[2.375rem] max-[767px]:mt-2.5 max-[767px]:ml-1 max-[767px]:mr-1">
          <h1 class="flex">
              EasyPathAI!
          </h1>
        </div>
        <div class="
            flex w-full justify-center">
          <p class="
            flex drop-shadow-lg font-['Noto_Sans'] font-medium
            max-[767px]:text-[10px] max-[767px]:mt-[25px]
            md:text-[36px] md:mt-[89px]">
            используй силу ИИ для подготовки к собеседованиям 
          </p>
        </div>
        <GoogleLogin class="md:mt-[89px] max-[767px]:mt-[25px]" :callback="callback" promt auto-login>
          </GoogleLogin>

      </div>

  </div>
</template>
<style scoped>
</style>
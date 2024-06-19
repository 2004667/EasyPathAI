
<script >
import WelcomePage from "./components/WelcomePage.vue";
export default{
  name: 'App',
  components:{
    WelcomePage
  }
}
</script>

<template>
  <div class="min-h-screen bg-cover bg-center bg-[#FBFBFB] md:bg-custom  max-[767px]:bg-mobile" >
    <WelcomePage/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Oswald&display=swap');
</style>

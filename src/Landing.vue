<script>
import InfoHead from './components/InfoHead.vue';
import InfoMain from './components/InfoMain.vue';
import InfoAIChat from './components/InfoAIChat.vue';

export default {
     name: 'Landing',
  components:{
    InfoHead,
    InfoMain,
    InfoAIChat
  }
}
</script>
<template>
    <InfoHead/>
    <InfoMain/>
    <InfoAIChat/>
</template>
<style scoped>

</style> 
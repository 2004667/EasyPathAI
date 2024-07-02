<script>
import InfoHead from './components/InfoHead.vue';
import InfoMain from './components/InfoMain.vue';
import InfoAIChat from './components/InfoAIChat.vue';
import Instructions from './components/Instructions.vue'
import MentorRequest from './components/MentorRequest.vue';
import EasyFooter from './components/EasyFooter.vue'
export default {
     name: 'Landing',
  components:{
    InfoHead,
    InfoMain,
    InfoAIChat,
    Instructions,
    MentorRequest,
    EasyFooter
  }
  
}
</script>
<template>
    <InfoHead/>
    <InfoMain/>
    <InfoAIChat/>
    <Instructions/>
    <MentorRequest/>
    <EasyFooter/>
</template>
<style scoped>

</style> 
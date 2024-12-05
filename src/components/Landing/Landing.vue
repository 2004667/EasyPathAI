<script>
import InfoHead from './InfoHead.vue';
import InfoMain from './InfoMain.vue';
import InfoAIChat from './InfoAIChat.vue';
import Instructions from './Instructions.vue'
import MentorRequest from './MentorRequest.vue';
import EasyFooter from './EasyFooter.vue'
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
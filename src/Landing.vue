<script>
import InfoHead from './components/InfoHead.vue';
import InfoMain from './components/InfoMain.vue';
import InfoAIChat from './components/InfoAIChat.vue';
import Instructions from './components/Instructions.vue'
import MentorRequest from './components/MentorRequest.vue';

export default {
     name: 'Landing',
  components:{
    InfoHead,
    InfoMain,
    InfoAIChat,
    Instructions,
    MentorRequest
  }
}
</script>
<template>
    <InfoHead/>
    <InfoMain/>
    <InfoAIChat/>
    <Instructions/>
    <MentorRequest/>
</template>
<style scoped>

</style> 
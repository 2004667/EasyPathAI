<template>
    <InfoHead/>
    <div class="md:flex md:justify-start md:space-x-[5%]">
      <InterviewFillter/>
      <InterviewQuestDetails/>
    </div>
    
</template>
<script>
import InfoHead from "./InfoHead.vue";
import InterviewQuest from "./InterviewQuest.vue";
import InterviewFillter from "./InterviewFillter.vue"
import InterviewQuestDetails from "./InterviewQuestDetails.vue";

export default {

    components: {
        InfoHead,
        InterviewQuest,
        InterviewFillter,
        InterviewQuestDetails
    }
}
</script>

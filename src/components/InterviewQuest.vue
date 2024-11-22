<template>
   <div class="flex flex-col space-y-[10px] items-center mt-[5%] ">
    <div class="flex bg-[#fff] md:w-[100%] h-[55px] border-[1px] border-[#000] rounded-[5px] md:px-[15px] max-[767px]:px-[10px] max-[767px]:w-[98%] items-center justify-between drop-shadow-lg">
        <div class="flex items-center space-x-[30px]">
           <img src="/images/video-chat 1.svg" alt="" class="w-[38px] h-[36px]">
           <p class="max-[767px]:text-[13px] md:w-[500px] max-[767px]:w-[200px]">{{ name }}</p>
        </div>
        <div class="flex items-center md:space-x-[80px]">
           <div class="bg-[#F6F4F4] w-[116px] h-[33px] flex justify-center items-center rounded-[4px] drop-shadow-lg">
                <p class="text-[12px]">Product Manager</p>
           </div>
           <img src="/images/plus.svg" alt="" class="w-[40px] h-[40px]">
        </div>
    </div>
   </div>
</template>
<script>
export default {
    props: {
        name:{
          type:String,
          required:true,
        }
    }
}
</script>
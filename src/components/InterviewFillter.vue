<script>

</script>
<template>
    <div class="mt-10 md:ml-10 max-[767px]:flex max-[767px]:justify-center">

        <div class="md:w-[270px] max-[767px]:w-4/5 h-[350px] border-[1px] border-[#9A9494] rounded-md bg-white drop-shadow-md flex flex-col items-center">
            <div class="space-y-1 mt-[30px]">
                <h1 class="">Должность</h1>
                <select class="w-[200px] h-[40px] border-[1px] border-[#9A9494] rounded-[4px] drop-shadow-md text-[#9A9494]">
                    <option value="male">Product Manager</option>
                    <option value="female">Frontend</option>
                    <option value="other">Backend</option>
                </select>
                <div class="pt-[20px] space-y-1">
                    <h1>Грейд:</h1>
                    <div class="flex flex-col ml-[12px] space-y-1">
                        <div class="flex space-x-1">
                            <input type="radio"/>
                            <h1>Junior</h1>
                        </div>
                        <div class="flex space-x-1">
                            <input type="radio"/>
                            <h1>Middle</h1>
                        </div>
                        <div class="flex space-x-1">
                            <input type="radio"/>
                            <h1>Senior</h1>
                        </div>
                    </div>
                </div>
            </div>
            <button class="
                    font-['Noto_Sans'] font-bold bg-[#E96852] rounded drop-shadow-lg text-[#FFFFFF] text-center
                    md:w-[100px] md:h-[30px] md:text-[15px] md:mt-[30px] md:mr-[15px]
                    max-[767px]:hidden hover:bg-[#D73900]
                ">
                Выбрать
            </button> 
        </div>
    </div>

</template>
<style scoped>
</style>
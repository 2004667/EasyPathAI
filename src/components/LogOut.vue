<script>
import { googleLogout } from 'vue3-google-login'
import { mapGetters,mapActions } from 'vuex'
export default{
    computed: {
        ...mapGetters(['user', 'loggedIn']),
    },
    methods:{
        ...mapActions(['logout']),
        logOut(){
            console.log('hai')
            googleLogout()
            this.logout()
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <div class="z-4 absolute w-[200px] h-[50px] rounded-lg bg-[#FFFFFF] flex justify-center items-center">
        <button @click="logOut" class="
            flex justify-center items-center
            font-['Noto_Sans'] font-bold bg-[#E96852] rounded drop-shadow-lg text-[#FFFFFF] text-center
            md:w-[100px] md:h-[30px] md:text-[15px]
            max-[767px]:hidden
          ">
          Выйти
        </button> 
    </div>
</template>
<style scoped>
</style>
<template>
    <InfoHead />
    <div class="mentor-detail max-w-[1470px] mx-auto p-4">
        <div class="flex justify-between mentor-detail-top">
            <div class="flex flex-row items-center img-info-block">
                <div>
                    <img
                        :src="mentor.image"
                        alt="Фото ментора"
                        class="mentor-photo w-[200px] h-[200px] object-cover mb-4 mr-9"
                    />
                </div>
                <div class="max-w-[265px]">
                    <h1 class="text-2xl font-bold mb-1">{{ mentor.name }}</h1>
                    <p class="role-text text-lg mb-4">
                        {{ mentor.role }} at <a class="company-link">{{ mentor.company }}</a>
                    </p>
                    <a
                        :href="mentor.contactLink"
                        class="bg-[#E96852] text-white font-semibold px-4 py-2 rounded-md shadow"
                    >
                        Написать в Telegram
                    </a>
                </div>
            </div>

            <div class="flex justify-around consulting-blocks">
                <div class=" w-[275px] p-4 mr-12 price-block">
                    <p class="font-semibold">Консультация 30 минут</p>
                    <p>{{ mentor.price30 }} тнг</p>
                </div>
                <div class=" w-[275px] p-4 price-block">
                    <p class="font-semibold">Консультация 1 час</p>
                    <p>{{ mentor.price60 }} тнг</p>
                </div>
            </div>
        </div>



        <div class="max-w-[896px] mx-auto mentor-detail-body">
            <div class="mt-6">
                <h2 class="text-2xl font-semibold">О менторе:</h2>
                <p class="mt-2 text-gray-700 text-lg whitespace-pre-line" v-html="formattedDescription"></p>
            </div>
            <div class="mt-6">
                <h2 class="text-lg font-semibold">Направления:</h2>
                <div class="flex flex-wrap gap-2 mt-2">
                <span
                    v-for="direction in mentor.directions"
                    :key="direction"
                    class="badge skills px-2 py-1 text-sm"
                >
                    {{ direction }}
                </span>
                </div>
            </div>
            <div class="mt-6">
                <h2 class="text-lg font-semibold">Могу помочь:</h2>
                <div class="flex flex-wrap gap-2 mt-2">
                <span
                    v-for="help in mentor.help"
                    :key="help"
                    class="badge skills px-2 py-1 text-sm"
                >
                    {{ help }}
                </span>
                </div>
            </div>
            <div class="mt-6">
                <h2 class="text-lg font-semibold">Навыки:</h2>
                <div class="flex flex-wrap gap-2 mt-2">
                <span
                    v-for="skill in mentor.skills"
                    :key="skill"
                    class="badge skills px-2 py-1 text-sm"
                >
                    {{ skill }}
                </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import InfoHead from "@/components/Landing/InfoHead.vue";
import {mentors} from "../../data/mentors.js";

export default {
    components: {InfoHead},
    data() {
        return {
            mentor: {},
        };
    },
    computed: {
        formattedDescription() {
            // Заменяем переносы строк (\n) на HTML-теги <br> и добавляем пустую строку
            return this.mentor.description.replace(/\n/g, "<br>");
        },
    },
    created() {
        const id = Number(this.$route.params.id);
        this.mentor = mentors.find((m) => m.id === id);
    },
};
</script>

<style scoped>
.mentor-detail-top{
    align-items: center;
}

.price-block{
    border: #808080 1px solid;
    border-radius: 8px;
    background-color: #FBFBFB;
}

.mentor-photo {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.company-link {
    color: #181616;
    text-decoration: underline;
}

.skills {
    border-radius: 5px;
    border: #9a9494 1px solid;
    font-weight: bold;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #f3f3f3;
    color: #181616;
}

.role-text {
    color: #9a9494;
}

.orange-theme {
    color: #e96852;
    text-decoration: none;
}

.orange-theme:hover {
    color: #d55d4a;
}

@media (max-width: 1124px) {

    .mentor-detail-top {
        flex-wrap: wrap;
        justify-content: center;
    }
    .mentor-detail-body{
        padding-left: 40px;
        padding-right: 40px;
    }



}

@media (max-width: 635px) {

    .mentor-photo{
        margin-right: 10px;
        width: 150px;
        height: 150px;
    }

    .price-block{
        width: 220px;
        padding: 10px;
    }
    .price-block:first-child{
        margin-right: 20px;
    }
    .mentor-detail-body{
        padding: 0 15px;
    }
}

@media (max-width: 467px ){
    .consulting-blocks{
        flex-direction: column;
        gap: 20px;
    }


    .img-info-block{
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 20px;
    }


}
</style>

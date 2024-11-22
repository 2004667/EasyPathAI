
<template>
    <div class="mentor-container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-6">Список менторов</h1>
        <div class="flex gap-10">
            <Filters />
            <div class="flex flex-wrap justify-start w-full gap-8">
                <MentorCard
                    v-for="mentor in mentors"
                    :key="mentor.id"
                    :image="mentor.image"
                    :name="mentor.name"
                    :role="mentor.role"
                    :company="mentor.company"
                    :skills="mentor.skills"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Filters from "./MentorFilters.vue";
import MentorCard from "./MentorCard.vue";

export default {
    components: {
        Filters,
        MentorCard,
    },
    data() {
        return {
            mentors: [
                {
                    id: 1,
                    image: "https://via.placeholder.com/150",
                    name: "Нигма Нурия",
                    role: "Senior Frontend Developer",
                    company: "Halyk Bank",
                    skills: ["HTML", "VueJS", "React", "JavaScript", "TypeScript"],
                },
                {
                    id: 2,
                    image: "https://via.placeholder.com/150",
                    name: "Максим Слепаков",
                    role: "Middle Frontend Developer",
                    company: "Yandex",
                    skills: ["HTML", "NoSQL", "React", "Angular", "TypeScript"],
                },
                {
                    id: 1,
                    image: "https://via.placeholder.com/150",
                    name: "Нигма Нурия",
                    role: "Senior Frontend Developer",
                    company: "Halyk Bank",
                    skills: ["HTML", "VueJS", "React", "JavaScript", "TypeScript"],
                },
                {
                    id: 2,
                    image: "https://via.placeholder.com/150",
                    name: "Максим Слепаков",
                    role: "Middle Frontend Developer",
                    company: "Yandex",
                    skills: ["HTML", "NoSQL", "React", "Angular", "TypeScript"],
                },
                {
                    id: 1,
                    image: "https://via.placeholder.com/150",
                    name: "Нигма Нурия",
                    role: "Senior Frontend Developer",
                    company: "Halyk Bank",
                    skills: ["HTML", "VueJS", "React", "JavaScript", "TypeScript"],
                },
                {
                    id: 2,
                    image: "https://via.placeholder.com/150",
                    name: "Максим Слепаков",
                    role: "Middle Frontend Developer",
                    company: "Yandex",
                    skills: ["HTML", "NoSQL", "React", "Angular", "TypeScript"],
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Стили для фона или отступов */

.mentor-container{
    max-width: 1568px
}

</style>

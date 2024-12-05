<template>
    <div class="mentor-container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-6">Список менторов</h1>
        <div class="flex gap-10 filter_list_container">
            <Filters @filter="updateFilters" />
            <div class="flex flex-wrap justify-start w-full gap-8 card-container">
                <MentorCard
                    v-for="mentor in filteredMentors"
                    :key="mentor.id"
                    :image="mentor.image"
                    :name="mentor.name"
                    :role="mentor.role"
                    :company="mentor.company"
                    :skills="mentor.skills"
                    :mentorId="mentor.id"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Filters from "./MentorFilters.vue";
import MentorCard from "./MentorCard.vue";
import { mentors } from "../../data/mentors.js";

export default {
    components: {
        Filters,
        MentorCard,
    },
    data() {
        return {
            mentors,
            filters: {
                direction: "",
                goal: "",
            },
        };
    },
    computed: {
        filteredMentors() {
            return this.mentors.filter((mentor) => {
                const matchesDirection =
                    !this.filters.direction || mentor.direction === this.filters.direction;
                const matchesGoal =
                    !this.filters.goal || mentor.goal === this.filters.goal;
                return matchesDirection && matchesGoal;
            });
        },
    },
    methods: {
        updateFilters(newFilters) {
            this.filters = newFilters;
        },
    },
};
</script>

<style scoped>
.mentor-container {
    max-width: 1568px;
}

@media (max-width: 900px) {
    .filter_list_container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .card-container {
        justify-content: space-evenly;
    }
}
</style>

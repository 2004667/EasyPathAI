<template>
    <div class="card max-w-[242px] bg-white shadow-md rounded-md  flex flex-col items-center">
        <img
            :src="image"
            alt="Фото ментора"
            class="mentor-photo rounded-md w-full h-[180px] object-cover"
        />
        <div class="p-4">
            <h3 class="text-lg font-semibold">{{ name }}</h3>
            <p class="role-text mb-4">{{ role }} at <a class="company-link ">{{ company }}</a></p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span
                    v-for="skill in skills"
                    :key="skill"
                    class=" skills px-2 py-1  text-sm"
                >
                    {{ skill }}
                </span>
            </div>
            <a href="#" class="orange-theme font-semibold">Посмотреть полностью &gt;</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        name: String,
        role: String,
        company: String,
        skills: Array,
    },
};
</script>

<style scoped>
/* Дополнительные стили, если нужны */
.card {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.company-link {
    color: #181616;
    text-decoration: underline;
}
.skills{
    border-radius: 5px;
    border: #9A9494 1px solid;
    font-weight: bold;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.role-text{
    color: #9A9494
}
.orange-theme{
    color: #E96852;
}
</style>

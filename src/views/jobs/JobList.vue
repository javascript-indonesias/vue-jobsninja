<template>
    <h1>Jobs List</h1>
    <div v-for="job in jobList" :key="job.id" class="job">
        <router-link
            :to="{
                name: 'JobDetail',
                params: {
                    id: job.id,
                },
                query: { plan: 'sampel query plan' },
            }"
        >
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'JobListComponent',
    data() {
        return {
            jobList: [
                { title: 'UX Designer', id: 1, details: 'lorem ux designer' },
                { title: 'Web Developer', id: 2, details: 'lorem app developer' },
                { title: 'Vue Developer', id: 3, details: 'lorem js developer' },
            ],
        };
    },
    setup() {
        return {};
    },
    methods: {
        getDataJobs() {},
    },
    mounted() {},
};
</script>

<style lang="scss">
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>

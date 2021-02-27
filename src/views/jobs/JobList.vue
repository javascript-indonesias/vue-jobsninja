<template>
    <h1>Jobs List</h1>
    <div v-for="job in jobList" :key="job.id">
        <h2>{{ job.title }}</h2>
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
};
</script>

<style lang="scss" scoped></style>

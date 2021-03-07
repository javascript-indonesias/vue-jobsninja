<template>
    <h1>Jobs List</h1>
    <div v-if="jobList.length > 0">
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
    </div>
    <div v-else>
        <p>Memuat daftar jobs...</p>
    </div>
</template>

<script>
export default {
    name: 'JobListComponent',
    data() {
        return {
            jobList: [],
            jobDataTemp: [
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
        getDataJobs() {
            // Simulasi mengambil data dari server
            fetch('http://localhost:3000/jobs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            })
                .then((result) => {
                    if (result.status === 200) {
                        return result.json();
                    }
                    return Promise.reject(
                        new Error(`Gagal mengambil data ${result.status} ${result.statusText}`),
                    );
                })
                .then((value) => {
                    this.jobList = value;
                })
                .catch((error) => {
                    console.warn(error);
                    this.jobList = [];
                });
        },
    },
    mounted() {
        // Ambil data jobs dari server
        this.getDataJobs();
    },
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
    color: #555353;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>

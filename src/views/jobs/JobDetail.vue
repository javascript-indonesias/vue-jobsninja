<template>
    <div v-if="jobObject">
        <h1>{{ jobObject.title }}</h1>
        <p>Job detail id adalah {{ jobid }}</p>
        <p>{{ jobObject.details }}</p>
    </div>
    <div v-else>
        Memuat job detail...
    </div>
</template>

<script>
export default {
    name: 'JobDetail',
    // Kirim route paramter sebagai props
    // https://next.router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
    props: {
        id: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            jobid: '',
            jobObject: null,
            watchStopHandlerParam: null,
            watchStopHandlerQuery: null,
        };
    },
    setup() {
        return {};
    },
    mounted() {
        this.jobid = this.$route.params.id;

        // karena menggunakan props parameter
        this.jobid = this.id;

        // Mengamati route parameter yang berubah
        this.watchStopHandlerParam = this.$watch(
            () => this.$route.params,
            (toparams, prevparams) => {
                console.log(`New params ${toparams.id} last params ${prevparams.id}`);
                this.jobid = toparams.id;
            },
        );

        this.watchStopHandlerQuery = this.$watch(
            () => this.$route.query,
            (toquery, prevquery) => {
                console.log(
                    `Route query params ${JSON.stringify(
                        toquery,
                    )}, old query params ${JSON.stringify(prevquery)}`,
                );
            },
        );

        this.getDetailJobs();
    },
    beforeUnmount() {
        // Watchers API
        // https://v3.vuejs.org/api/instance-methods.html#watch
        console.log('Before unmount running');
        if (this.watchStopHandlerParam && this.watchStopHandlerQuery) {
            this.watchStopHandlerParam();
            this.watchStopHandlerQuery();
        }
    },
    methods: {
        getDetailJobs() {
            // Simulasi mengambil data dari server
            fetch(`http://localhost:3000/jobs/${this.jobid}`, {
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
                    this.jobObject = value;
                })
                .catch((error) => {
                    console.warn(error);
                    this.jobObject = null;
                });
        },
    },
};
</script>

<style lang="scss"></style>

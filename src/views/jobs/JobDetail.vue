<template>
    <h1>Job Details Page</h1>
    <p>Job detail id adalah {{ jobid }}</p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium quia saepe
        deleniti quo natus suscipit quisquam ex dignissimos neque enim maiores excepturi sit nemo
        iusto, dicta exercitationem velit officia.
    </p>
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
};
</script>

<style lang="scss"></style>

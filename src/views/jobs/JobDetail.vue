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
    data() {
        return {
            jobid: '',
        };
    },
    setup() {
        return {};
    },
    mounted() {
        this.jobid = this.$route.params.id;

        // Mengamati route parameter yang berubah
        this.$watch(
            () => this.$route.params,
            (toparams, prevparams) => {
                console.log(`New params ${toparams.id} last params ${prevparams.id}`);
                this.jobid = toparams.id;
            },
        );
    },
};
</script>

<style lang="scss"></style>

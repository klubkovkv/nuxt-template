<script>
    export default {
        data: () => ({
            categories: {
               seo: {
               }
            },
        }),
        async mounted() {
            this.categories = await this.$axios.$get('')
        },
        render() {
            return (
                <div>
                    <h1>Accounts</h1>
                    <ul>{console.log(this)}</ul>
                </div>
            )
        },
    }
</script>



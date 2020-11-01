<script>
    import settingsPanel from '@/components/settingsPanel'

    export default {
        name: 'defaultLayout',

        components: {
            settingsPanel,
        },

        render() {
            return (
                <div class="wrapper">
                    <main class="main">
                        <settingsPanel />
                        <nuxt />
                    </main>
                </div>
            )
        },
    }
</script>

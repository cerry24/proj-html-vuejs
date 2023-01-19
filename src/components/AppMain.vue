<script>
import AppJumbotron from './AppMain components/AppJumbotron.vue';
import SectionWorkculture from './AppMain components/SectionWorkculture.vue';
import SectionHowwework from './AppMain components/SectionHowwework.vue';

export default {
    name: 'AppMain',

    components: {
        AppJumbotron,
        SectionWorkculture,
        SectionHowwework
    }
}
</script>

<template>
    <AppJumbotron />

    <SectionWorkculture />

    <SectionHowwework />
</template>

<style lang="scss" scoped>

</style>
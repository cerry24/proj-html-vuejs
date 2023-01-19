<script>
import AppJumbotron from './AppMain components/AppJumbotron.vue';
import SectionWorkculture from './AppMain components/SectionWorkculture.vue';
import SectionHowwework from './AppMain components/SectionHowwework.vue';
import SectionCourses from './AppMain components/SectionCourses.vue';

export default {
    name: 'AppMain',

    components: {
        AppJumbotron,
        SectionWorkculture,
        SectionHowwework,
        SectionCourses
    }
}
</script>

<template>
    <AppJumbotron />

    <SectionWorkculture />

    <SectionHowwework />

    <SectionCourses />
</template>

<style lang="scss" scoped>

</style>
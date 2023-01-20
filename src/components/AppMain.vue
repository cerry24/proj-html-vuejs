<script>
import AppJumbotron from './AppMain components/AppJumbotron.vue';
import SectionWorkculture from './AppMain components/SectionWorkculture.vue';
import SectionHowwework from './AppMain components/SectionHowwework.vue';
import SectionCourses from './AppMain components/SectionCourses.vue';
import SectionTestimonials from './AppMain components/SectionTestimonials.vue';

export default {
    name: 'AppMain',

    components: {
        AppJumbotron,
        SectionWorkculture,
        SectionHowwework,
        SectionCourses,
        SectionTestimonials
    }
}
</script>

<template>
    <AppJumbotron />

    <SectionWorkculture />

    <SectionHowwework />

    <SectionCourses />

    <SectionTestimonials />
</template>

<style lang="scss" scoped>

</style>
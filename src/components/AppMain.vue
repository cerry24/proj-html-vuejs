<script>
import AppJumbotron from './AppMain components/AppJumbotron.vue';
import SectionWorkculture from './AppMain components/SectionWorkculture.vue';
import SectionHowwework from './AppMain components/SectionHowwework.vue';
import SectionCourses from './AppMain components/SectionCourses.vue';
import SectionTestimonials from './AppMain components/SectionTestimonials.vue';
import SectionTrnsform from './AppMain components/SectionTransform.vue';
import SectionBlog from './AppMain components/SectionBlog.vue';
import SectionNewsletter from './AppMain components/SectionNewsletter.vue';

export default {
    name: 'AppMain',

    components: {
        AppJumbotron,
        SectionWorkculture,
        SectionHowwework,
        SectionCourses,
        SectionTestimonials,
        SectionTrnsform,
        SectionBlog,
        SectionNewsletter
    }
}
</script>

<template>
    <AppJumbotron />

    <SectionWorkculture />

    <SectionHowwework />

    <SectionCourses />

    <SectionTestimonials />

    <SectionTrnsform />

    <SectionBlog />

    <SectionNewsletter />
</template>

<style lang="scss" scoped>

</style>
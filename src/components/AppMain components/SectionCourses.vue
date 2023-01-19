<script>
export default {
    name: 'SectionCourses'
}
</script>

<template>
    <section id="courses">
        <div class="main-container">
            <div class="title">
                <p>join maxcoach at best</p>
                <h2>latest online <span>courses</span></h2>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#courses {
    color: $secondary-font-color;
    background-color: $main-multi-color;
}

.title {
    width: 100%;
    text-align: center;
    margin-bottom: 75px;

    p {
        text-transform: uppercase;
        margin-bottom: 18px;
    }

    h2 {
        font-size: 30px;
        color: $main-font-color;
        text-transform: capitalize;

        span {
            font-size: 30px;
            color: $secondary-multi-color;
            font-weight: normal;
        }
    }
}
</style>
<script>
export default {
    name: 'SectionWorkculture'
}
</script>

<template>
    <section id="work-culture">
        <div class="container">
            <div class="text"> <!--left part of the section with title and paragraph-->
                <p class="section-intro">everything in <span>maxcoah</span></p>
                <h2>Learn about our <span>work culture</span> at MaxCoach</h2>
                <p>
                    Spend some time to visit our website or head office and discover our current courses, enrollment
                    procedure, and registration deadline. We're opening neew classes every beginning of each month.
                </p>
                <p class="more-info">
                    Have questions?
                    <a href="#">
                        get free guide
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="arrow-icon" />
                    </a>
                </p>
            </div>

            <div class="pink-circle"></div> <!--pink circle decoration-->

            <div class="images">

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.container {
    width: 70%;
    display: flex;
    margin: 100px auto;
}

#work-culture {
    background-color: $main-multi-color;
    color: $secondary-font-color;
}

.text {
    width: 30%;

    h2 {
        font-size: 26px;
        color: $main-font-color;

        span {
            color: $secondary-multi-color;
            font-size: 26px;
            font-weight: normal;
        }
    }
}

.section-intro,
h2,
p {
    margin-bottom: 18px;
}

.section-intro {
    text-transform: uppercase;


    span {
        font-weight: bold;
        color: $highlight-font-color;
    }
}

.more-info a {
    color: $secondary-multi-color;
    text-transform: capitalize;
    font-weight: bold;
}

.pink-circle {
    margin-left: 50px;
}
</style>
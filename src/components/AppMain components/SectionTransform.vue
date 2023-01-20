<script>
export default {
    name: 'SectionTransform'
}
</script>

<template>
    <section id="transform">
        <div class="main-container">
            <img src="../../assets/img/maxcoach-shape-07-150x150.png" alt="Ornamental square pattern"
                class="square-pattern"><!--ornamental image-->
            <img src="../../assets/img/maxcoach-shape-05-150x150.png" alt="square pattern image" class="round-squares">
            <!--ornamental image-->
            <img src="../../assets/img/maxcoach-shape-01.png" alt="triple lines pattern image" class="triple-lines">
            <!--ornamental image-->

            <div class="image"><!--image of four people on the left side-->
                <img src="../../assets/img/home-3-team-image.png" alt="rapresentative image of a team">
            </div>

            <div class="pink-circle"></div> <!--pink circle decoration-->

            <div class="text"> <!--title of the section & quick paragraph for introduction-->
                <p class="section-intro">teverything in <span>maxcoach</span></p>
                <h2>we're here to <span>transform</span>you!</h2>
                <p>
                    As learners, people can enjoy great companionship from MaxCoach mentors and educaotors. We can help
                    you develop and grow at your best.
                </p>
                <a href="#" class="btn btn-free-guide">get free guide</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#transform {
    background-color: $main-multi-color;
    color: $secondary-font-color;
    position: relative;
}

.square-pattern {
    position: absolute;
    bottom: -17%;
    left: 34.5%;
}

.round-squares {
    position: absolute;
    top: 30%;
    left: 18%;
}

.triple-lines {
    position: absolute;
    bottom: 9%;
    left: 6%;
}

.image {
    width: 60%;
    text-align: center;
    z-index: 1;
}

.text {
    align-self: center;
    width: 30%;
    margin-bottom: 50px;

    h2 {
        font-size: 30px;
        text-transform: capitalize;
        color: $main-font-color;

        span {
            color: $secondary-multi-color;
            font-size: 30px;
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
        color: $highlight-font-color;
    }
}

.btn-free-guide {
    color: $main-multi-color;
    font-weight: bold;
    text-transform: capitalize;
    background-color: $secondary-multi-color;
}

.btn-free-guide:hover {
    background-color: $btn-hover-color;
}
</style>
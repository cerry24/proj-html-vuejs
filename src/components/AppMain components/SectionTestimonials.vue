<script>
export default {
    name: 'SectionTestimonials'
}
</script>

<template>
    <section id="testimonials">
        <div class="main-container">
            <div class="text"> <!--title of the section & quick paragraph for introduction-->
                <p class="section-intro">testimonials</p>
                <h2>why do people <span>*hearths*</span> us?</h2>
                <p>
                    Seeking for verbals ofour service quality? Find them here. Everything is transparent and
                    straightfoward for your sense of justification.
                </p>
                <p class="more-info">
                    <a href="#">
                        View all
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="arrow-icon" />
                    </a>
                </p>
            </div>

            <div class="reviews-cards">

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#testimonials {
    background-color: $main-multi-color;
    color: $secondary-font-color;
}

.text {
    width: 35%;
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
}

.more-info a {
    color: $main-font-color;
    font-weight: bold;
}
</style>
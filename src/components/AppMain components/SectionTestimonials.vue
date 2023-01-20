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

            <div class="reviews-cards"> <!--testimonials cards container-->
                <div class="front-card"> <!--close up card of testimonial-->
                    <h3>Professional team of specialists and passionate mentors at reach</h3>
                    <p>
                        I need to get a certification fo English proficiency and MaxCoach is my best choice. Their
                        tutors are smart and professional when dealing with students.
                    </p>
                    <div class="reviewer-info">
                        <figure>
                            <img src="../../assets/img/testimonial-avata-01.jpg" alt="testimonial profile picture">
                        </figure>

                        <div>
                            <h4>madley pondor</h4>
                            <p>/IT Specialist</p>
                        </div>
                    </div>
                </div>
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

.main-container {
    justify-content: space-between;
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

.reviews-cards {
    width: 50%;
}

.front-card {
    padding: 35px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;

    h3 {
        color: $main-font-color;
        font-size: 24px;
        margin-bottom: 12px;
    }

    p {
        margin-bottom: 35px;
    }
}

.reviewer-info {
    display: flex;

    figure {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    div {
        margin-left: 15px;

        h4 {
            color: $main-font-color;
            text-transform: uppercase;
            margin-bottom: 8px;
        }

        p {
            margin: 0;
        }
    }
}
</style>
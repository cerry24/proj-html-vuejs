<script>
export default {
    name: 'Sectionhowwework'
}
</script>

<template>
    <section id="how-we-work">
        <div class="main-container">
            <div class="video-thumbnail"> <!--thumb with link for youtube video-->
                <img src="../../assets/img/stock-full-hd-11-670x450.jpg" alt="Youtube video thumbnail">
            </div>

            <div class="text"> <!--right part of the section with title and paragraph-->
                <p class="section-intro">how we work</p>
                <h2>upgrade your skills <span>upgrade your life</span></h2>
                <p>
                    Opening up amore opportunities in front of you to get the ticket to more enjoyable door in life.
                    Getting equipped with new skills for new sets of insights into your career. MaxCoach accompany
                    learnerss in every stage of learning.
                </p>
                <p class="more-info">
                    <a href="#">
                        Download free guideboox
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="arrow-icon" />
                    </a>
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#how-we-work {
    color: $secondary-font-color;
    background-color: $main-multi-color;
}

.main-container {
    justify-content: space-between;
}

.video-thumbnail {
    width: 50%;

    img {
        width: 100%;
        border-radius: 5px;
    }
}

.text {
    width: 35%;

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
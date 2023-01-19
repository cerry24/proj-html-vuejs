<script>
export default {
    name: 'Sectionhowwework'
}
</script>

<template>
    <section id="how-we-work">
        <div class="main-container">
            <div class="video-thumbnail"> <!--thumb with link for youtube video & decoration pattern images-->
                <img src="../../assets/img/stock-full-hd-11-670x450.jpg" alt="Youtube video thumbnail"
                    class="thumbnail">

                <a href="#" class="youtube-logo">
                    <img src="../../assets/img/icon-youtube-play.png" alt="youtube logo">
                </a>

                <img src="../../assets/img/maxcoach-shape-07-150x150.png" alt="square pattern image" class="squares">
                <img src="../../assets/img/maxcoach-shape-05-150x150.png" alt="square pattern image"
                    class="round-squares">
            </div>

            <div class="text"> <!--right part of the section with title and paragraph-->
                <div class="pink-circle"></div>
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
}

.main-container {
    justify-content: space-between;
    align-items: flex-end;
}

.video-thumbnail {
    width: 50%;
    position: relative;
}

.thumbnail {
    width: 100%;
    border-radius: 5px;
}

.youtube-logo {
    display: block;
    width: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 100%;
    }
}

.pink-circle {
    margin-bottom: 50px;
}

.squares {
    z-index: -1;
    position: absolute;
    bottom: -85px;
    right: -15px;
}

.round-squares {
    z-index: -1;
    position: absolute;
    top: 35px;
    left: -92px;
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
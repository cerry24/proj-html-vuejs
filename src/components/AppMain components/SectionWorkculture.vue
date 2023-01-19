<script>
export default {
    name: 'SectionWorkculture'
}
</script>

<template>
    <section id="work-culture">
        <div class="main-container">
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

            <div class="images"> <!--decoration images-->
                <img src="../../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
                    alt="People studying image" class="img-big">
                <img src="../../assets/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg"
                    alt="Person studying image" class="img-small">
                <img src="../../assets/img/maxcoach-shape-07-150x150.png" alt="Ornamental square pattern"
                    class="square-pattern">
                <img src="../../assets/img/maxcoach-shape-02.png" alt="ornamental circle pattern"
                    class="circle-pattern">
            </div>

            <div class="statistics"> <!--statistics of the courses-->
                <div>
                    <span>129+</span>
                    <p>enrolled learners</p>
                </div>
                <div>
                    <span>80</span>
                    <p>finished sessions</p>
                </div>
                <div>
                    <span>4%</span>
                    <p>satisfaction rate</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#work-culture {
    background-color: $main-multi-color;
    color: $secondary-font-color;
}

.text {
    width: 30%;

    h2 {
        font-size: 30px;
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

.images {
    position: relative;
    margin-left: 100px;
}

.img-big,
.img-small {
    border-radius: 5px;
}

.img-big {
    height: 80%;
    z-index: 1;
}

.img-small {
    z-index: 2;
    position: absolute;
    bottom: 250px;
    right: 0;
}

.square-pattern {
    z-index: -1;
    position: absolute;
    bottom: 282px;
    right: 112px;
}

.circle-pattern {
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 150px;
}

.statistics {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding: 0 100px;

    div {
        text-align: center;

        span {
            display: block;
            font-size: 35px;
            font-weight: bold;
            color: $secondary-multi-color;
            margin-bottom: 10px;
        }

        p {
            color: $highlight-font-color;
            text-transform: uppercase;
        }
    }
}
</style>
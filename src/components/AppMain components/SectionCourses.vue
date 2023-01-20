<script>
import CoursesCards from '../dynamic components/CoursesCards.vue';

export default {
    name: 'SectionCourses',

    components: {
        CoursesCards
    },

    data() {
        return {
            coursesList: {
                professionalAuthor: {
                    imageName: 'course-02-480x298',
                    description: 'Learning to Write as a Professional Author',
                    price: 40.00,
                    lessonNumber: 20,
                    students: 50
                },
                infotechStrategies: {
                    imageName: 'stock-full-hd-03-480x298',
                    description: 'Customer-centric Info-Tech Strategies',
                    price: 0.00,
                    lessonNumber: 24,
                    students: 749
                },
                python: {
                    imageName: 'stock-full-hd-04-480x298',
                    description: 'Open Programming Courses for Everyone: Python',
                    price: 19,
                    students: 62
                }
            }
        }
    },

    methods: {
        getImagePath: function (imgName) {
            return new URL(`../../assets/img/${imgName}.jpg`, import.meta.url).href;
        }
    },
}
</script>

<template>
    <section id="courses">
        <div class="main-container">
            <div class="title">
                <p>join maxcoach at best</p>
                <h2>latest online <span>courses</span></h2>
            </div>

            <div class="cards-wrapper">
                <CoursesCards v-for="course in coursesList" :imagePath="getImagePath(course.imageName)"
                    :description="course.description" :price="course.price" :lessons="course.lessonNumber"
                    :students="course.students" />
            </div>

            <div class="slider-btns">
                <span class="btn btn-active"></span>
                <span class="btn"></span>
                <span class="btn"></span>
                <span class="btn"></span>
                <span class="btn"></span>
            </div>

            <div class="more-info">
                <p>
                    Control your personal preference settings to get notified about all courses.
                    <a>
                        View all courses
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="arrow-icon" />
                    </a>
                </p>
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

.cards-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.slider-btns {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
}

.btn {
    width: 8px;
    height: 8px;
    display: inline-block;
    border: 4px solid $secondary-font-color;
    border-radius: 50%;
    margin-right: 10px;
    padding: 0;
}

.btn-active {
    width: 12px;
    height: 12px;
    border: 6px solid $main-font-color;
}

.more-info {
    width: 100%;
    text-align: center;
    color: $highlight-font-color;

    a {
        color: $main-font-color;
    }
}
</style>
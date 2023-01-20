<script>
export default {
    name: 'CoursesCards',

    props: [
        "imagePath",
        "description",
        "price",
        "lessons",
        "students"
    ]
}
</script>

<template>
    <article class="course-card">
        <div class="img">
            <img :src="imagePath" alt="Illustrtive image of the course">
            <div v-show="price == 0.00" class="free-tag">free</div>
        </div>

        <div class="text">
            <span class="price">&dollar;{{ price.toFixed(2) }}</span>
            <h3>{{ description }}</h3>
            <span>
                <font-awesome-icon icon="fa-regular fa-file-lines" />
                {{ lessons }}
                Lessons
            </span>
            <span>
                <font-awesome-icon icon="fa-regular fa-user" />
                {{ students }}
                Students
            </span>
        </div>
    </article>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;

.course-card {
    width: calc(100% / 3 - 40px);
    background-color: $main-multi-color;
    margin-bottom: 40px;
}

.img {
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
}

.free-tag {
    color: $main-multi-color;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #ee7455;
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
}


.text {
    padding: 20px;

    h3 {
        color: $main-font-color;
        font-size: 22px;
        margin-bottom: 25px;
    }

    span {
        margin-right: 10px;
    }
}

.price {
    display: block;
    color: $secondary-multi-color;
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 15px;
}
</style>
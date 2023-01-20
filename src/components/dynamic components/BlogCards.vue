<script>
export default {
    name: 'BlogCards',

    props: [
        "imagePath",
        "category",
        "title",
        "date",
        "views"
    ]
}
</script>

<template>
    <article class="course-card">
        <div class="img">
            <img :src="imagePath" alt="article cover image">
        </div>

        <div class="text">
            <span class="category">{{ category }}</span>
            <h3>{{ title }}</h3>
            <span>
                <font-awesome-icon icon="fa-regular fa-calendar" />
                {{ date }}
            </span>
            <span>
                <font-awesome-icon icon="fa-regular fa-eye" />
                {{ views }}
                views
            </span>
        </div>
    </article>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.course-card {
    width: calc(100% / 3 - 40px);
    background-color: $main-multi-color;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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

.text {
    padding: 20px;

    h3 {
        color: $main-font-color;
        font-size: 22px;
        text-transform: capitalize;
        margin-bottom: 25px;
    }

    h3:hover {
        color: $secondary-multi-color;
    }

    span {
        color: $secondary-font-color;
        margin-right: 18px;
    }
}

.category {
    display: block;
    color: $secondary-font-color;
    text-transform: uppercase;
    margin-bottom: 15px;
}
</style>
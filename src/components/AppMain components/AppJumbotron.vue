<script>
export default {
    name: 'AppJumbotron'
}
</script>

<template>
    <section class="flex-centered">
        <div class="jumbo-content">
            <h1>commence business</h1>
            <div class="subtitle">distant mentoring program</div>
            <a href="#" class="btn btn-download">
                download free guidebook
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="arrow-icon" />
            </a>
        </div>

        <div class="jumbo-menu">
            <font-awesome-icon icon="fa-solid fa-ruler-combined" class="jumbo-icon" />
            <font-awesome-icon icon="fa-solid fa-globe" class="jumbo-icon" />
            <font-awesome-icon icon="fa-solid fa-book" class="jumbo-icon" />
            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="jumbo-icon" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section {
    height: 700px;
    position: relative;
    background-image: url('../../assets/img/home-3-hero-bg.jpg');
}

.jumbo-content {
    text-align: center;
    color: $main-multi-color;
}

h1,
.subtitle {
    text-transform: capitalize;
}

h1 {
    font-size: 30px;
}

.subtitle {
    font-size: 58px;
    margin-bottom: 35px;
}

.btn-download {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 17px;
    font-weight: bold;

    color: $secondary-multi-color;
    background-color: $main-multi-color;
}

.btn-download:hover {
    color: $main-multi-color;
    background-color: $secondary-multi-color;
}

.jumbo-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: $main-multi-color;
    right: 0;
    top: 150px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 12.5px 12.5px 0;

    .jumbo-icon {
        margin-bottom: 16px;
    }
}
</style>
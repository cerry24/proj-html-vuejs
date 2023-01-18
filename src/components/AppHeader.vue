<script>
export default {

}
</script>

<template>
    <div class="header-container">
        <nav class="main-nav">
            <div class="menu">
                <ul>
                    <li>
                        <a href="#">home</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pulldown-icon" />
                    </li>
                    <li>
                        <a href="#">pages</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pulldown-icon" />
                    </li>
                    <li>
                        <a href="#">courses</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pulldown-icon" />
                    </li>
                    <li>
                        <a href="#">features</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pulldown-icon" />
                    </li>
                    <li>
                        <a href="#">blog</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pulldown-icon" />
                    </li>
                    <li>
                        <a href="#">shop</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pulldown-icon" />
                    </li>
                </ul>
            </div> <!--menu to navigate thru the website-->

            <div class="logo">
                <img src="../assets/img/dark-logo.png" alt="">
            </div> <!--logo of the company-->

            <div class="user-area">
                cart user searchbar
            </div> <!--user searchbar, access to shooping cart & private user area-->
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-nav {
    display: flex;
    justify-content: space-between;
    color: $main-font-color;
    font-size: 18px;
}

.menu,
.logo,
.user-area {
    width: 488px;
}

.menu li {
    display: inline;
    text-transform: capitalize;
    margin-right: 20px;

    a {
        text-decoration: none;
        color: $main-font-color;
    }
}

.pulldown-icon {
    font-size: 12px;
    padding-left: 5px;
}

.logo {
    text-align: center;

    img {
        width: 200px;
    }
}
</style>
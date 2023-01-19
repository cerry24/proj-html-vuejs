<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <div class="header-container">
        <nav class="main-nav">
            <div class="menu"> <!--menu to navigate thru the website-->
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
            </div>

            <div class="logo"> <!--logo of the company-->
                <img src="../assets/img/dark-logo.png" alt="MaxCoach logo">
            </div>

            <div class="user-area"> <!--user searchbar, access to shooping cart & private user area-->
                <span class="cart-item-counter flex-centered">0</span>
                <a href="#" class="cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
                <a href="#" class="user-settings"><font-awesome-icon icon="fa-regular fa-circle-user" /></a>

                <input type="text" name="user-searchbar" id="user-searchbar" class="user-input" placeholder="Search...">
                <a href="#" class="btn-search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-nav {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
}

.menu,
.logo,
.user-area {
    width: 488px;
}

.menu {
    color: $nav-font-color;

    li {
        display: inline;
        text-transform: capitalize;
        margin-right: 20px;

        a {
            text-decoration: none;
            color: $nav-font-color;
        }
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

.user-area {
    text-align: end;
    position: relative;
}

.cart-item-counter {
    width: 16px;
    height: 16px;
    position: absolute;
    font-size: 15px;
    color: $main-multi-color;
    background-color: $secondary-multi-color;
    border-radius: 50%;
    left: 158px;
}

.cart,
.user-settings {
    color: $main-font-color;
    font-size: 20px;
    margin-right: 20px;
}

#user-searchbar {
    width: 225px;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn-search {
    height: 100%;
    display: inline-block;
    background-color: $secondary-bg-color;
    color: $secondary-multi-color;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
}
</style>
<script>
export default {

}
</script>

<template>
    <div class="header-container">
        <nav class="main-nav">
            <div class="menu">
                <ul>

                </ul>
            </div> <!--menu to navigate thru the website-->

            <div class="logo">

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
}

.menu,
.logo,
.user-area {
    width: 200px;
    height: 60px;
    background-color: $secondary-multi-color;
}
</style>
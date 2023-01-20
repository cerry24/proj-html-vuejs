<script>
export default {

}
</script>

<template>
    <footer>
        <div class="container">
            <div class="left-footer">
                <ul>
                    <li>
                        <h3>Address</h3>
                    </li>
                    <li><a href="#">382 NE 191st #87394 Miami, FL 33179-3899</a></li>
                    <li><a href="#">+1(305)574-9909(9am-5pm EST, Monday - Friday)</a></li>
                    <li><a href="#">support@maxcoach.com</a></li>
                    <li>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-square-facebook" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                    </li>
                </ul>
            </div>

            <div class="right-footer">
                <ul>
                    <li>
                        <h3>Explore</h3>
                    </li>
                    <li><a href="#">Start here</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About us</a></li>
                </ul>

                <ul class="no-header-list">
                    <li><a href="#">Success story</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>

                <ul>
                    <li>
                        <h3>Information</h3>
                    </li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Purchase guide</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms of service</a></li>
                </ul>

            </div>

            <div class="footer-bottom">
                <p>
                    <font-awesome-icon icon="fa-regular fa-copyright" />
                    2023 Maxcoach. All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    background-color: $footer-bg-color;
    color: $secondary-font-color;
    padding: 70px 0;
}

.container {
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
}

li {
    margin-bottom: 10px;
}

h3 {
    color: $main-multi-color;
}

a {
    text-decoration: none;
    color: $secondary-font-color;
    margin-right: 15px;
}

.left-footer {
    margin-right: 250px;
}

.right-footer {
    display: flex;

    ul {
        margin-right: 25px;
    }
}

.no-header-list li:first-child {
    margin-top: 32px;
}

.footer-bottom {
    width: 100%;
    text-align: center;
    margin-top: 60px;
}
</style>
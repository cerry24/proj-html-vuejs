<script>
export default {
    name: 'SectionNewsletter'
}
</script>

<template>
    <section id="newsletter">
        <div class="main-container">
            <div class="content">
                <h2>subscribe <span>newsletter</span></h2>
                <p>
                    Enter your email adress to register to our newsletter subscription delivered on a regular basis!
                </p>
                <input type="email" name="umail-input" id="mail-input" class="user-input"
                    placeholder="Enter your email">
                <a href="#" class="btn-subscribe user-input">subscribe</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#newsletter {
    background-color: $main-multi-color;
    text-align: center;
}

.content {
    width: 60%;

    h2 {
        font-size: 30px;
        text-transform: capitalize;
        color: $main-font-color;
        margin-bottom: 18px;

        span {
            color: $secondary-multi-color;
            font-size: 30px;
            font-weight: normal;
        }
    }

    p {
        width: 60%;
        margin: 0 auto;
    }
}

#mail-input {
    width: 40%;
    height: 50px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn-subscribe {
    height: 50px;
    display: inline-block;
    background-color: $secondary-multi-color;
    color: $main-multi-color;
    font-weight: bold;
    text-transform: capitalize;
    text-decoration: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    vertical-align: bottom;
    margin-top: 30px;
}

.btn-subscribe:hover {
    background-color: $btn-hover-color;
}
</style>
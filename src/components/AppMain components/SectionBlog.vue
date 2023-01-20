<script>
import BlogCards from '../dynamic components/BlogCards.vue';

export default {
    name: 'SectionBlog',

    components: {
        BlogCards
    },

    data() {
        return {
            blogArticles: {
                1: {
                    imageName: 'artist-blog-03-480x325',
                    category: 'artist',
                    title: 'brush strokes energize trees in paintings',
                    publicationDate: 'may 15, 2020',
                    viewsNumber: 688
                },
                2: {
                    imageName: 'artist-blog-01-480x325',
                    category: 'artist',
                    title: 'pocket-size notebooks hold miniature paintings',
                    publicationDate: 'may 15, 2020',
                    viewsNumber: 603
                },
                3: {
                    imageName: 'artist-blog-02-480x325',
                    category: 'artist',
                    title: 'connection between self-portraits and identity',
                    publicationDate: 'may 15, 2020',
                    viewsNumber: 397
                },
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
    <section id="blog">
        <div class="main-container">
            <div class="title">
                <p>join maxcoach at best</p>
                <h2>latest from <span>our blog</span></h2>
            </div>

            <div class="cards-wrapper">
                <BlogCards v-for="article in blogArticles" :imagePath="getImagePath(article.imageName)"
                    :category="article.category" :title="article.title" :date="article.publicationDate"
                    :views="article.viewsNumber" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

#blog {
    background-color: $secondary-bg-color;
}

.title {
    width: 100%;
    text-align: center;
    margin: 30px 0 75px;

    p {
        color: $secondary-font-color;
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
</style>
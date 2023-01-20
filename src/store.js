import { reactive } from 'vue';

export const store = reactive({
    getImagePath: function (imgName) {
        return new URL(`../../assets/img/${imgName}.jpg`, import.meta.url).href;
    }
});
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
    name: 'Carousel',
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            images: [
                'https://via.placeholder.com/800x400?text=Slide+1',
                'https://via.placeholder.com/800x400?text=Slide+2',
                'https://via.placeholder.com/800x400?text=Slide+3',
            ],
        }
    }
});

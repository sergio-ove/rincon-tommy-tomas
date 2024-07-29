import { defineComponent, onMounted, ref ,nextTick  } from 'vue';
import musicFile from '../../assets/sonidos/motor.wav'
import wcMotorista from '../wcMotorista/wcMotorista';

export default defineComponent({
    name: 'wcBienvenida',

    setup() {
      const track = ref(null);
      const slides = ref([]);
      const slideWidth = ref(0);
      const currentIndex = ref(0);
  
      const updateCarousel = () => {
        if (track.value) {
          track.value.style.transform = `translateX(-${slideWidth.value * currentIndex.value}px)`;
        }
      };
  
      const nextSlide = () => {
        if (currentIndex.value < slides.value.length - 1) {
          currentIndex.value++;
          updateCarousel();
        }
      };
  
      const prevSlide = () => {
        if (currentIndex.value > 0) {
          currentIndex.value--;
          updateCarousel();
        }
      };
  
      onMounted(async () => {
        await nextTick(); // Espera a que el DOM esté completamente renderizado
        if (track.value) {
          slides.value = Array.from(track.value.children);
          slideWidth.value = slides.value[0].getBoundingClientRect().width;
          updateCarousel();
          
          window.addEventListener('resize', () => {
            slideWidth.value = slides.value[0].getBoundingClientRect().width;
            updateCarousel();
          });
        }
      });
  
      return {
        track,
        nextSlide,
        prevSlide,
      };
    },
    data() {
      return {
        musicSrc: musicFile
      };
    },
    methods: {
        pagSeccion(evento) {
            this.$router.push({ name: evento, params: { evento } });
        }
    },
    onMounted() {

      this.startMusic();
    }
  });
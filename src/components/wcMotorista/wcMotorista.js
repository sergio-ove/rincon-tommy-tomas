import { defineComponent, onMounted  } from 'vue';
import gsap from 'gsap';



export default defineComponent({
    name: 'wcMotorista',
    components: {
       
    },
    setup() {
        onMounted(() => {
          const motorcycle = document.getElementById('motorcycle');
          const motorcycleWidth = motorcycle.offsetWidth;
          const startX = window.innerWidth;
          const endX = -motorcycleWidth;
    
          gsap.fromTo(motorcycle, 
            { x: startX }, // Comienza desde la derecha fuera de la pantalla
            { x: endX, duration: 3, repeat: -1, ease: "none" } // Se mueve hacia la izquierda
          );
        });
      }
});
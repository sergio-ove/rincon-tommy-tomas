import { defineComponent, onMounted } from 'vue';
import musicFile from '../../assets/sonidos/motor.wav'

export default defineComponent({
    name: 'wcBienvenida',
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
      // Inicia la música al montar el componente
      this.startMusic();
    }
  });
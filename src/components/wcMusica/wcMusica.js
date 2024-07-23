import { defineComponent } from 'vue';
import musicFile from '../../assets/sonidos/motor.wav'
// import musicFile from '@/assets/musica.mp3'

export default defineComponent({
    name: 'wcMusica',
    components: {

    },

    methods: {
      startMusic() {
        // Reproduce la música automáticamente cuando el componente se monte
        const audio = this.$refs.audio;
        if (audio) {
          audio.play();
        }
      }
    },
    onMounted() {
      // Inicia la música al montar el componente
      this.startMusic();
    }
});
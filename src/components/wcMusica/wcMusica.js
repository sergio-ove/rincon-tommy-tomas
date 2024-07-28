import { defineComponent } from 'vue';
import musicFile from '../../assets/sonidos/granja.wav'
// import musicFile from '@/assets/musica.mp3'

export default defineComponent({
    name: 'wcMusica',
    data() {
      return {
        musicSrc: musicFile,
      };
    },
    methods: {
      startMusic() {
        const audio = this.$refs.audio;
        if (audio) {
          audio.play();
        }
      }
    },
    mounted() {
      // Inicia la música al montar el componente
      this.startMusic();
    }
});
import { defineComponent } from 'vue';
import wcMotorista from '../wcMotorista/wcMotorista.vue';
import musicFile from '../../assets/sonidos/happy.mp3'

export default defineComponent({
    name: 'App',
    components: {
      'wcMotorista': wcMotorista,
    },
    data() {
      return {
        musicSrc: musicFile,
      };
    },
    methods: {
      pagBienvenida() {
        this.$router.push('/bienvenida');
      },
      playMedia() {
        const audio = this.$refs.audio;
        const video = document.getElementById('videoElement');
        if (audio) {
          audio.play();
        }
        if (video) {
          video.play();
        }
      },
      stopMedia() {
        const audio = this.$refs.audio;
        const video = document.getElementById('videoElement');
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      },
    },
  });
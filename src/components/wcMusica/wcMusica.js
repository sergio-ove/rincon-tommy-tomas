import { defineComponent } from 'vue';
// import musicFile from '@/assets/musica.mp3'

export default defineComponent({
    name: 'wcMusica',
    components: {

    },

    data() {
        return {
            // musicSrc: musicFile
        };
    },

    mounted() {

    },
    methods: {
        playMusic() {
            this.$refs.audio.play();
          },
          pauseMusic() {
            this.$refs.audio.pause();
          },
          onMusicEnd() {
            console.log('Music has ended');
          }

    }
});
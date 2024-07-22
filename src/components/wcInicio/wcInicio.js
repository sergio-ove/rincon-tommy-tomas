import { defineComponent } from 'vue';
import wcMotorista from '../wcMotorista/wcMotorista.vue';
import wcMusica from '../wcMusica/wcMusica.vue';

export default defineComponent({
    name: 'App',
    components: {
        'wcMotorista': wcMotorista,
        'wcMusica': wcMusica,

    },

    data() {
        return {

        };
    },

    mounted() {

    },
    methods: {
        pagBienvenida() {
            this.$router.push('/bienvenida');
        }

    }
});
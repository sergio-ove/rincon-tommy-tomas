import { defineComponent } from 'vue';
import wcMotorista from '../wcMotorista/wcMotorista.vue';

export default defineComponent({
    name: 'App',
    components: {
        'wcMotorista': wcMotorista,

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
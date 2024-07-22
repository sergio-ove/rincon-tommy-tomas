import { defineComponent } from 'vue';
import wcBienvenida from './components/wcBienvenida/wcBienvenida.vue';

import wcMotorista from './components/wcMotorista/wcMotorista.vue';
import wcInicio from './components/wcInicio/wcInicio.vue';



export default defineComponent({
    name: 'App',
    components: {
    'wcBienvenida': wcBienvenida,
    'wcMotorista': wcMotorista,
    'wcInicio':wcInicio
    },

    data() {
        return {
        
        };
    },
    
    mounted() {
     
    },
    methods: {

      
    }
});
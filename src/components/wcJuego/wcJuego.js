import { defineComponent } from 'vue';
import motoImage from '../../assets/motoDibujo.png';
import tractorImage from '../../assets/tractor.png';
import solImage from '../../assets/sol.png';
import vacaImage from '../../assets/vaca.png';


export default defineComponent({
    name: 'wcJuego',
    components: {
      
    },

    data() {
        return {
            gridItems: [
                { name: 'sol', image: solImage },
                { name: 'tractor', image: tractorImage },
                { name: 'vaca', image: vacaImage },
                { name: 'moto', image: motoImage },
              ],
          message: '',
        };
      },
      methods: {
        checkItem(item) {
          if (item.name === 'sol') {
            this.message = '¡Encontraste el sol!';
          } else {
            this.message = 'Sigue buscando...';
          }
        },
      }
});
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
          items: [
            { name: 'sol', image: solImage, isFlipped: false, isMatched: false },
            { name: 'arbol', image: motoImage, isFlipped: false, isMatched: false },
            { name: 'sol', image: solImage, isFlipped: false, isMatched: false },
            { name: 'arbol', image: motoImage, isFlipped: false, isMatched: false },
            { name: 'tractor', image: tractorImage, isFlipped: false, isMatched: false },
            { name: 'vaca', image: vacaImage, isFlipped: false, isMatched: false },
            { name: 'tractor', image: tractorImage, isFlipped: false, isMatched: false },
            { name: 'vaca', image: vacaImage, isFlipped: false, isMatched: false },
          ],
          firstCardIndex: null,
          secondCardIndex: null,
          message: '',
        };
      },
      computed: {
        shuffledItems() {
          return this.shuffle([...this.items]);
        },
      },
      methods: {
        shuffle(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        },
        flipCard(index) {
          if (this.firstCardIndex === null) {
            this.firstCardIndex = index;
            this.items[index].isFlipped = true;
          } else if (this.secondCardIndex === null && this.firstCardIndex !== index) {
            this.secondCardIndex = index;
            this.items[index].isFlipped = true;
            this.checkMatch();
          }
        },
        checkMatch() {
          const firstCard = this.items[this.firstCardIndex];
          const secondCard = this.items[this.secondCardIndex];
          
          if (firstCard.name === secondCard.name) {
            this.items[this.firstCardIndex].isMatched = true;
            this.items[this.secondCardIndex].isMatched = true;
            this.resetTurn();
            if (this.items.every(item => item.isMatched)) {
              this.message = '¡Has encontrado todas las parejas!';
            }
          } else {
            setTimeout(() => {
              this.items[this.firstCardIndex].isFlipped = false;
              this.items[this.secondCardIndex].isFlipped = false;
              this.resetTurn();
            }, 1000);
          }
        },
        resetTurn() {
          this.firstCardIndex = null;
          this.secondCardIndex = null;
        },
      },
});

    <div class="list-style">
      {{ category.title }}
       <card
         v-for="card in cardList" 
         :key="card.id" 
         :card="card"
         :isNew="false"
       ></card>
       <card :card="newCard" :isNew="ture"></card>
    </div>
  
  
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  import Card from "./Card.vue";
  
  export default {
    components: { Card },
    props: {
      category: Object
    },
    setup(props) {
      const store = useStore();
      onMounted(store.dispatch("fetchCardList"));
      const cardList = computed(() =>
        store.state.cardList.filter(card => card.categoryId === props.category.id)
      );
      const newCard = {
        id: -1,
        text: "",
        categoryId: props.category.id
      };
      return {
        cardList,
        newCard
      };
    }
  };
  
  

  .list-style {
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    background-color: silver;
    min-width: 200px;
    min-height: 400px;
  }

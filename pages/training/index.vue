<template>
    <div class="cards">
        <br> <br>
        <v-container class="lighten-5"
        >
    <v-row no-gutters
    >
      <v-col
        v-for="(n,i) in $store.state.training.content"
        :key="i"
        cols="12"
        sm="4"
        class="mt-4"
        align-self="center"
      >
      <h1>{{n}}</h1>

      </v-col>
    </v-row>
          <h4>{{$store.state.training.card.length}} Courses | {{duration}} Hours | {{lessons}} lessons</h4>
          <br>
    <h4>Our goal is to be the #1 learning resource for Training courses</h4>
      </v-container>
        <v-container class="lighten-5"
        >

    <v-row no-gutters
    >
      <v-col
        v-for="(n,i) in $store.state.training.card"
        :key="i"
        cols="12"
        sm="4"
        class="mt-8 pa-2"
        align-self="center"
      >
        <course
            :title="n.title"
            :body="n.body"
            :link="'/training/'+n.title"
            :image="n.image"/>
      </v-col>
    </v-row>
  </v-container>
  <br> <br> <br> <br> <br>
    </div>
</template>


<script>
import cardVue from '../../components/card.vue'
export default {
    components: {
        course: cardVue,
    },
    data(){
        return{
          duration: null,
          lessons: null
        };
    },
  created() {
      var total = 0
      var total_1 = 0
    for (let index = 0; index < this.$store.state.training.card.length; index++) {
      total += this.$store.state.training.card[index].duration
      total_1 += this.$store.state.training.card[index].lessons
    }
    this.duration=total
    this.lessons=total_1
  }
}
</script>


<style scoped>
.cards{
    margin: 20px;
}
h1{
    text-align: center;
}
h4{
    display: table; /* keep the background color wrapped tight */
    margin: 0px auto 0px auto; /* keep the table centered */
    padding:5px;
    background-color:#1e1e1e;
    color:#ffffff;
    border-radius: 5px;
    text-align: center;
}
</style>

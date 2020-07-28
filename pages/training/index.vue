<template>
    <div class="cards">
        <br> <br>
        <v-container class="lighten-5"
        >
    <v-row no-gutters
    >
      <v-col
        v-for="n in content"
        :key="n"
        cols="12"
        sm="4"
        class="mt-4"
        align-self="center"
      >
      <h1>{{n}}</h1>
        
      </v-col>
    </v-row>
    <h4>Our goal is to be the #1 learning resource for Training courses</h4>
      </v-container>
        <v-container class="lighten-5"
        >
        
    <v-row no-gutters
    >
      <v-col
        v-for="n in card"
        :key="n"
        cols="12"
        sm="4"
        class="mt-8 pa-2"
        align-self="center"
      >
        <course 
            :title="n.title"
            :body="n.body"
            :link="n.link"
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
            
            card: [
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                },
                {
                    title: 'Python',
                    body: 'Python',
                    link: '/training/python',
                    image: 'python.jpg'
                }
            ],
            content: [
                'Industrial Training',
                '',
                '8 Courses',
                // 'Our goal is to be the #1 learning resource for Training courses',
                // '',
                // 'New lessons being added regularly'
            ]
        };
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
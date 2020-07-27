<template>
    <div>
        <br> <br>
        <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in card"
        :key="n"
        cols="12"
        sm="4"
      >
        <course 
            :title="n.title"
            :body="n.body"
            :link="n.link"
            :image="n.image"/>
      </v-col>
    </v-row>
  </v-container>
    </div>
</template>


<script>
import cardVue from '../../components/card.vue'
export default {
    components: {
        course: cardVue
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
                }
            ]
        };
    }
}
</script>


<style scoped>

</style>
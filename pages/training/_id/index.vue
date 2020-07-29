<template>
    <div>

      <v-container >
        <v-row
          class="mb-6"
          no-gutters
        >
          <v-col
            xs="12"
            sm="12"
            md="3"
            lg="3"
            xl="3"
            offset-md="2"
          >
              <heading  class="ma-14"
                        :title="content.title"
                        :body="content.body"
                        :duration="content.duration"
                        :lessons="content.lessons"
                        :level="content.level"
                        :register="content.register"></heading>
          </v-col>
          <v-col
            xs="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
          >
              <v-img justify-center
                     :src="require('~/assets/' + content.image)"
                     lazy-src="https://picsum.photos/id/11/100/60"
                     class="grey lighten-2 ma-8 justify-center"
                     min-width="80%"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
          </v-col>
        </v-row>
      </v-container>

      <br><br>
      <br><br>

      <v-container>
        <v-row no-gutters
               class="mb-6">
          <v-col
            :lg="8"
            :md="8"
            :sm="12"
          >
            <div class="about" >
              <h1>About</h1>
              <p>
                {{content.description}}
              </p>
            </div>



          </v-col>
          <v-col
            :lg="4"
            :md="4"
            :sm="12"
          >
            <div class="teacher">
              <h1>People behind this course</h1>

              <v-list>
                <v-list-item
                  v-for="item in content.teacher"
                  :key="item.title"
                  @click=""
                >
                  <v-list-item-icon>
                    <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                </v-list-item>
              </v-list>

            </div>

          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
    import heading from "~/components/heading";

    export default {
        name: "index.vue",
      components: {
          heading: heading
      },
      data() {
          return {
            course: null,
            content: {}
          };
      },
      created() {
          this.course = this.$route.params.id
        for (let index = 0; index < this.$store.state.training.card.length; index++) {
          if(this.course === this.$store.state.training.card[index].title){
            this.content = this.$store.state.training.card[index]
            break;
          }
        }
      },
    }
</script>

<style scoped>
p{
  text-align: left;
  margin: 15px;
}
  .about,.teacher{
    margin: 15px;
    background-color: rgba(100, 105, 104,0.2);
    padding: 15px;
    border-radius: 15px;
  }
  h1 {
    text-align: center;
    margin: 15px;
  }
</style>

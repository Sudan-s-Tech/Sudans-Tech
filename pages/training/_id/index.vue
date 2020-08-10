<template>
    <div>
      <div id="bg">
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
              <heading 
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
                     :src="content.image"
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
      </div>
     

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

            <div class="about" >
              <h1>Syllabus</h1>
              <v-container>
              <v-row justify="center">
                <v-expansion-panels accordion>
                  <v-expansion-panel
                    v-for="(item,i) in content.items"
                    :key="i"
                  >
                    <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    <ul>
                      <li v-for="(line,j) in item.items" :key="j">
                          {{line.title}}
                      </li>
                    </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
              </v-container>
              
               
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
    import axios from 'axios'
    export default {
        name: "index.vue",
      components: {
          heading: heading
      },
      data() {
          return {
            course: null,
            content: {},
          };
      },
      created() {
        axios.get('https://sudans-tech.firebaseio.com/training.json')
       .then(res=>{
         var result = Object.keys(res.data).map((key) => [res.data[key]]);
         this.$store.state.training.card =[]
         for (let index =0; index < result.length; index++){
           this.$store.state.training.card.push(result[index][0])
         }
         this.course = this.$route.params.id
        for (let index = 0; index < this.$store.state.training.card.length; index++) {
          if(this.course === this.$store.state.training.card[index].title){
            this.content = this.$store.state.training.card[index]
            break;
          }
        }
       })
          
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
  #bg{
    background-color: #889abf;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23889abf' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%238a9cc0' href='%23s' y='2'/%3E%3Cuse fill='%238a9cc0' href='%23s' x='1' y='2'/%3E%3Cuse fill='%238d9ec2' href='%23s' x='2' y='2'/%3E%3Cuse fill='%238d9ec2' href='%23s'/%3E%3Cuse fill='%238fa0c3' href='%23s' x='2'/%3E%3Cuse fill='%238fa0c3' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%2392a2c4'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%2392a2c4'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%2394a4c5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23889abf'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%2396a6c7'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23dfab51'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23dfab51'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23dfab51'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  }
</style>

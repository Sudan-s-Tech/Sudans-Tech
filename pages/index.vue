<template>
<div>
    <div id='grad'>
      <div class="hero-content">
    <v-container>
      <v-row
    align="center">
    <v-spacer></v-spacer>
    <v-col
            md="4"
            lg="4"
            sm="12"
            cols="12"
            class="pa-2"
      >
        <img src="@/assets/logo.png" height="350px" width="350px" class="hero-logo" >
    </v-col>
    <v-col  
            md="6"
            lg="6"
            sm="12"
            cols="12"
            class="pa-2"
      >
        <h1>Build Your Future With Us.</h1>
        <h1>Join Our Community</h1>
        <v-btn rounded color="primary" dark @click="() => this.$vuetify.goTo('#vision')">Know More</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      </v-row>
    </v-container>
      </div>
    </div>
    <!-- Work from here -->
    <div class="text">
      <br><br>
      <h3>Don't waste your valuable time or money</h3>
      <p>Our training provides real results </p>
    </div>

    <div id="course">
      <v-container class="lighten-5">

          <v-row no-gutters
            class="mb-6"
            justify="center"
          >
            <v-col
              v-for="(n,i) in homecards"
              :key="i"
              cols="12"
              md="auto"
              lg="auto"
              xs="auto"
              sm="auto"
              xl="auto"
              
            >
              <homecard
              :title="n.title"
              :icon="n.icon"
              :body="n.body"
                  />
            </v-col>
          </v-row>
      </v-container>
    </div>
    <div class="box" id="vision">
      <br>
      <h1>Vision</h1>
      <br>
      <p>Our vision is to create a better life for many Students in the field of Technology. We aim to Fill the gap that prevents students to become industry ready. It is a community for those students who desire to learn and grow themselves with others. Technology is what aspires us and we continue to make this world a happy place .</p>
      <br>
    <v-btn large color="accent"
        rounded
        class="my-2" to="/training">
          Training
      </v-btn>
      <br><br><br>
    </div>
    <!-- work ends here -->
    <div>
    <v-row>
      <v-spacer></v-spacer>
    <v-col cols="12" lg="4" md="4" sm="12" v-for="(item,i) in this.teamembers" :key="i">
       <teamcard :details="item" />
    </v-col>
    <v-spacer></v-spacer>
    </v-row>
    </div>
    <br><br><br><br><br><br><br>
</div>    
</template>


<script>
import teamcard from "@/components/teamcard"
import homecardVue from '../components/homecard.vue'
export default {
    components:{
      teamcard:teamcard,
      homecard:homecardVue
    },
    data(){
      return{
        teamembers: this.$store.state.team.members,
        image: 'logo.png',
        homecards: [
          {
            title: 'Get real employable skills',
            body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
            icon: 'fas fa-briefcase'
          },
          {
            title: 'Get real employable skills',
            body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
            icon: 'fas fa-briefcase'
          },
          {
            title: 'Get real employable skills',
            body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
            icon: 'fas fa-briefcase'
          },
          {
            title: 'Get real employable skills',
            body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
            icon: 'fas fa-briefcase'
          },
        ]
      }
    }
}
</script>


<style scoped>
#grad {
  background-color: #151b26;
  color: white;
  transform: skewY(8deg);
  transform-origin: 100%;
  min-height: 500px;
  height: 80vh;
  max-height: 560px;
}

.hero-content{
  transform: skewY(-8deg);
  transform-origin: 100%;
}

/* .hero-logo{
  margin-top: 50px;
} */

.text{
  text-align: center;
  font-weight: 100;
  font-size: 2.2em;
}
.box{
  text-align: center;
  margin: 5%;
  background-color: #3a4d72;
  padding: 10px;
  color: white;
}
p{
  padding: 15px;
}

@media (max-width: 480px){
#grad {
    height: 750px;
    /* padding-top: 40px; */
    transform: none;
}

.hero-content{
  transform: none;
}
}

@media (max-width: 960px){
.hero-content {
    justify-content: center;
    text-align: center;
}

#grad{
  height: 750px;
}

}

@media (max-width: 1263px) and (min-width: 960px)
{
   #grad{
     padding-top: 40px;
   }

  .hero-logo{
      height: 250px;
      width: 250px;
  }
}
</style>
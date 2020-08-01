<template>
<div>
    <div id='grad'>
    <v-container>
      <v-row
    align="center">
    <v-spacer></v-spacer>
    <v-col
            md="3"
            lg="3"
            sm="12"
            cols="12"
            class="pa-2"
      >
        <v-img src="https://picsum.photos/510/300?random"  max-height="350" max-width="350" ></v-img>
    </v-col>
    <v-col  
            md="6"
            lg="6"
            sm="12"
            cols="12"
            class="pa-2"
      >
        <h1>Sudan's Tech</h1>
        <h3>Vision</h3>
        <p>Our vision is to create a better life for many Students in the field of Technology. We aim to Fill the gap that prevents students to become industry ready. It is a community for those students who desire to learn and grow themselves with others . 
Technology is what aspires us and we continue to make this world a 
happy place .</p>
      </v-col>
      <v-spacer></v-spacer>
      </v-row>
    </v-container>
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
    <div class="box">
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
    <v-col cols="12" lg="4" md="4" sm="12" v-for="(item,i) in this.teamembers" :key="i">
       <teamcard :details="item" />
    </v-col>
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
  background-color: #00b7ff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1847' height='1539.2' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}
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
</style>
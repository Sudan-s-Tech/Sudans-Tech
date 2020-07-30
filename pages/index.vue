<template>
<div>
    <div id='grad'>
    <v-container>
      <v-row
    align="center">
    <v-col
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2"
      >
        <v-img src="https://picsum.photos/510/300?random"  max-height="350" max-width="350" ></v-img>
    </v-col>
    <v-col  
            md="9"
            lg="9"
            sm="6"
            cols="12"
            class="pa-2"
      >
        <h1>Sudan's Tech</h1>
        <h3>Test</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </v-col>
      </v-row>
    </v-container>
    </div>
    <div>
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-col  
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2">
            <v-img src="https://picsum.photos/510/300?random"  max-height="350" max-width="350" ></v-img>
            </v-col>
            <v-col  
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </div>
    <br>
    <div>
      <v-container>
        <v-row>
          <v-col  
            md="3"
            lg="4"
            sm="6"
            cols="12"
            class="pa-2">
            <v-img src="https://picsum.photos/510/300?random"  max-height="350" max-width="350" ></v-img>
            </v-col>
            <v-col  
            md="6"
            lg="4"
            sm="6"
            cols="12"
            class="pa-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-col>
             <v-col  
            md="3"
            lg="4"
            sm="6"
            cols="12"
            class="pa-2">
            <v-img src="https://picsum.photos/510/300?random"  max-height="350" max-width="350" ></v-img>
            </v-col>
        </v-row>
      </v-container>
    </div>
    <br><br><br><br>
    <div>
    <v-row>
    <v-col cols="12" lg="4" md="4" sm="6" v-for="(item,i) in this.teamembers" :key="i">
       <teamcard :details="item" />
    </v-col>
    </v-row>
    </div>
    <br><br><br><br><br><br><br>
</div>    
</template>


<script>
import teamcard from "@/components/teamcard"
export default {
    components:{
      teamcard:teamcard,
    },
    data(){
      return{
        teamembers: this.$store.state.team.members,
      }
    }
}
</script>


<style scoped>
#grad {
  background-image: linear-gradient(-90deg, rgb(30, 180, 123), rgb(5, 67, 201));
}
</style>
<template>
  <div id="nav">
    <v-app-bar
      color="primary accent-4"
      dense
      dark
    >
    <v-app-bar-nav-icon @click="drawer = true" v-if="screensize"></v-app-bar-nav-icon>
    <nuxt-link to="/" class="home"><v-toolbar-title><img src="@/assets/logo2.png" width="30px" height="30px"> Sudans Tech</v-toolbar-title></nuxt-link>

      <v-spacer></v-spacer>
      <div class="navbtn" v-if="!screensize">
      <v-tabs
      background-color="primary accent-4"
      center-active
      dark
      >
      <v-tab v-for="(item,i) in items" :key="i" :to="item.to">
          {{item.title}}
      </v-tab>
      </v-tabs>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      color="primary accent-4"
      v-model="drawer"
      absolute
      temporary
      v-if="screensize"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        color="white"
        >
        <v-list-item>
          <img src="@/assets/logo.png" width="100%">
        </v-list-item>
          <v-list-item v-for="(item,i) in items" :key="i" :to="item.to" color="white">
            <v-list-item-title color="white"><v-tab color="white">{{item.title}}</v-tab></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
name: "navbar",
props:['items'],
data: function (){
  return{
    drawer: false,
  }
},
computed:{
  screensize: function(){
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return true
      case 'sm': return true
      case 'md': return false
      case 'lg': return false
      case 'xl': return false
  }
  }
}
}
</script>

<style scoped>

#nav{
  z-index: 10;
}

.home{
    text-decoration: none;
    color: white;
}

.navbtn a{
    margin-left: 10px;
}

</style>>


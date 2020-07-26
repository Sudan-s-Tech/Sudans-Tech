<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >

    <nuxt-link to="/" class="home"><v-toolbar-title>Sudan's Tech</v-toolbar-title></nuxt-link>

      <v-spacer></v-spacer>
      <div class="navbtn">
      <v-btn v-for="(item,i) in items" :key="i" :to="item.to">
          {{item.title}}
      </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
name: "navbar",
props:['items'],
}
</script>

<style scoped>

.home{
    text-decoration: none;
    color: white;
}

.navbtn a{
    margin-left: 10px;
}

</style>>


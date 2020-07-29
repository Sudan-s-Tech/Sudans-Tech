<template>
    <v-container>
      <h1>{{title}}</h1>
      <br>
      <h3>{{body}}</h3>
      <br><br>

      <div class="my-2">
        <v-btn large color="primary" :href="register" target="_blank">Register</v-btn>
      </div>
      <br>
      <h4>{{duration}}  Hours  |  {{lessons}}  lessons  |  {{level}}</h4>
    </v-container>
</template>

<script>
    export default {
        name: "heading",
      props: ['title','body','duration','level','lessons','register']
    }
</script>

<style scoped>
h2{
  text-align: left;
}
  h1{
    font-size: 3em;

  }
</style>

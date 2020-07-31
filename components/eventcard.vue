<template>
  <div>
      <v-card
    class="mx-auto"
    max-width="300"
    elevation="15"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{item.heading}}</v-list-item-title>
        <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text :href="item.link">See More</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
    name: 'eventcard',
    props:['item']
}
</script>

<style scoped>

</style>
<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('~/assets/' + image)"
    >
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ body }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        :to="link"
      >
        Enroll
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['title','body','image','link']
}
</script>
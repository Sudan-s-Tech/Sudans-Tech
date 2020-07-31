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
      <div><v-icon>fas fa-clock</v-icon> {{time}} Hours  | {{lessons}} Lessons</div>
      <br>
      <span v-if="!state"
                    >{{ body.slice(0, 60) }}
                </span>
                <a
                    class=""
                    v-if="!state"
                    @click="
                        state = !state
                    "
                    href="#/"
                >
                    Read more...
                </a>
                <span
                    v-if="state"
                    v-html="body"
                ></span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
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
    props: ['title','body','image','link','time','lessons','state']
}
</script>

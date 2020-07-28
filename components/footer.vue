<template>
  <v-footer
    color="primary lighten-1"
    padless
    absolute
  >
    <v-row
      justify="start"
      no-gutters
    >
 
    <!-- <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <strong style="font-size: 20px">Follow us</strong>
 
      </v-col> -->

      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Sudan's Tech</strong>
        <v-btn color="white"
        text
        rounded
        class="my-2" v-for="(item,i) in links" :key="i" :to="item.to">
          {{item.title}}
      </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {
          title: 'Code of Coduct',
          to: '/coc'
        },
        {
          title: 'Contact us',
          to: '/contact'
        },
      ],
    }),
  }
</script>
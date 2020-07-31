<template>
  <v-footer
    color="accent lighten-1"
    padless
    inset
    width="auto"
  >
    <v-row
      justify="start"
      no-gutters
    >



     <v-col
        class="primary  py-4 text-center white--text"
        cols="12"
      >
        <strong style="font-size: 20px">Follow us</strong>

          <span>
            <v-btn class="ma-2" large color="success" href="#">
                 <v-icon>fab fa-linkedin</v-icon>
                </v-btn>
           <v-btn class="ma-2" large color="success" href="#">
                <v-icon>fab fa-twitter-square</v-icon>
                </v-btn>
                <v-btn class="ma-2" large color="success" href="#">
                <v-icon>fab fa-instagram</v-icon>
                </v-btn>
                 <v-btn class="ma-2" large color="success" href="#">
                <v-icon>fab fa-facebook-square</v-icon>
                </v-btn>
          </span>
          

      </v-col>

      <v-col
        class="primary py-4 text-center white--text"
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
      app: true,
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

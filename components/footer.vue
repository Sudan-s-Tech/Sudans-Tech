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
            <v-btn class="ma-2" large color="success" href="https://www.linkedin.com/company/sudan-s-tech">
                 <v-icon>fab fa-linkedin</v-icon>
                </v-btn>
           <v-btn class="ma-2" large color="success" href="https://twitter.com/SudansTech1?s=09">
                <v-icon>fab fa-twitter-square</v-icon>
                </v-btn>
                <v-btn class="ma-2" large color="success" href="https://www.instagram.com/sudans_tech/">
                <v-icon>fab fa-instagram</v-icon>
                </v-btn>
                 <v-btn class="ma-2" large color="success" href="https://www.facebook.com/Sudans-Tech-102013144941387/">
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
        class="my-2"
        href="#">
          Code of conduct
      </v-btn>
      <v-btn color="white"
        text
        rounded
        class="my-2"
        href="mailto: Sudan's.tech@gmail.com">
          Contact Us
      </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      app: true,
    }),
  }
</script>

<style scoped>
a{
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>
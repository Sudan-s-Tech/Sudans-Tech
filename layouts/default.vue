<template>
  <v-app id="app">
    <appnavbar :items="items"></appnavbar>
    <nuxt/>
    <appfooter></appfooter>
  </v-app>
</template>

<script>
import navbar from "~/components/navbar"
import footer from "~/components/footer"

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Events',
          to: '/events'
        },
        {
          title: 'Training',
          to: '/training'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components:{
    appnavbar: navbar,
    appfooter: footer
  }

}
</script>


<style>
#app{
   background-color: #2f4572;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23151b26' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23fff4b6' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23293141' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e5cd95' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%233f4a5e' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23caa777' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2356637d' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ae835c' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%236f7e9d' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23906044' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23889abf' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%2372402f' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

</style>
<template>
  <v-app>
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

<template>
  <v-app>
    <appnavbar :items="items"></appnavbar>
    <nuxt/>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import navbar from "~/components/navbar"
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
  }

}
</script>

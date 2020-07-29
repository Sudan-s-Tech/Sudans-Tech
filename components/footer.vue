<template>
  <v-footer
    color="primary lighten-1"
    padless
    inset
    width="auto"
  >
    <v-row
      justify="start"
      no-gutters
    >



     <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <strong style="font-size: 20px">Follow us</strong>

      </v-col>

      <v-row
        class="grey lighten-2 py-4 text-center white--text mb-6"
        no-gutters
      >
        <v-col
          md="3"
          xs="12"
          sm="12"
          lg="3"
          xl="3"
          offset-md="1"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col-md-3 .offset-md-3
          </v-card>
        </v-col>
        <v-col
          md="3"
          xs="12"
          sm="12"
          lg="3"
          xl="3"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col-md-3 .offset-md-3
          </v-card>
        </v-col>
        <v-col
          md="3"
          xs="12"
          sm="12"
          lg="3"
          xl="3"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col-md-3 .offset-md-3
          </v-card>
        </v-col>
      </v-row>

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

<template>
  <div>
      <v-data-table
    :headers="headers"
    :items="$store.state.events.pastevents"
    :items-per-page="5"
    class="elevation-1"
  >
   <template v-slot:item.link="{ item }">
        <a :href="item.link" target="_blank">See More</a>
    </template>
  </v-data-table>
  </div>
</template>

<script>
export default {
    name: 'eventtable',
     data () {
      return {
        headers: [
          {
            text: 'Event Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Date', value: 'date' },
          { text: 'See More', value: 'link' },
        ],
      }
    },

}
</script>

<style scoped>

</style>
<template>
  <v-row
    align="center">
    <v-col
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2"
            v-for="(item,i) in items"
            :key="i"
      >
      <eventcard :item="item" />
    </v-col>
    </v-row>
</template>

<script>
import eventcard from "@/components/eventcard"
export default {
    name: 'eventcardgrid',
    components:{
        eventcard:eventcard,
    },
    props:['type'],
    data: function(){
      return {
      items: null,
        }    
      },
    mounted(){
      this.items=this.$store.state.events[this.type]
    }
}
</script>

<style scoped>

</style>
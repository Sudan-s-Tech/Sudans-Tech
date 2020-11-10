<template>
  <div>
      <v-data-table
    :headers="headers"
    :items="items"
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
import axios from 'axios'
export default {
    name: 'eventtable',
     data () {
      return {
        items: [],
        headers: [
          {
            text: 'Event Name',
            align: 'start',
            sortable: false,
            value: 'heading',
          },
          { text: 'Date', value: 'startdate' },
          { text: 'See More', value: 'link' },
        ],
      }
    },
 async created(){
     this.getNow()
     var eventitems=await axios.get('https://sudans-tech.firebaseio.com/events.json');
     eventitems=eventitems.data;
     eventitems=Object.values(eventitems);
     for(var i=0;i<eventitems.length;i++){
          if(parseInt(eventitems[i].enddate.split('-')[2])<parseInt(this.currentdate.split('-')[2])){
            this.items.push(eventitems[i])
          }
          else if(parseInt(eventitems[i].enddate.split('-')[2])==parseInt(this.currentdate.split('-')[2]))
          {
            if(parseInt(eventitems[i].enddate.split('-')[1])<parseInt(this.currentdate.split('-')[1])){
            this.items.push(eventitems[i])
          }
            else if(parseInt(eventitems[i].enddate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
              if(parseInt(eventitems[i].enddate.split('-')[0])<parseInt(this.currentdate.split('-')[0])){
            this.items.push(eventitems[i])
          }
            }
          }
        }
         if(this.items.length===0)
        this.items.push({heading: 'No Past Events',
                      description: null,
                      link: '#',
                      startdate: null,
                      enddate: null
              })
  },
    methods: {
            getNow: function() {
                const today = new Date();
                const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                this.currentdate = date;
            }
},
}
</script>

<style scoped>

</style>
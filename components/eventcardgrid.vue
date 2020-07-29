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
      items: [],
      currentdate: null
        }    
      },
    mounted(){
      var eventitems=this.$store.state.events.events
      this.getNow()
      if(this.type==='upcomingevents'){
        for(var i=0;i<eventitems.length;i++){
          if(parseInt(eventitems[i].startdate.split('-')[2])>parseInt(this.currentdate.split('-')[2])){
            this.items.push(eventitems[i])
          }
          else if(parseInt(eventitems[i].startdate.split('-')[2])==parseInt(this.currentdate.split('-')[2]))
          {
            if(parseInt(eventitems[i].startdate.split('-')[1])>parseInt(this.currentdate.split('-')[1])){
            this.items.push(eventitems[i])
          }
            else if(parseInt(eventitems[i].startdate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
              if(parseInt(eventitems[i].startdate.split('-')[0])>parseInt(this.currentdate.split('-')[0])){
            this.items.push(eventitems[i])
          }
            }
          }
        }
         if(this.items.length===0)
        this.items.push({       heading: 'No Upcoming Events',
                      description: null,
                      link: '#',
                      startdate: null,
                      enddate: null
              })
      }
      if(this.type==='ongoingevents'){
        for(var i=0;i<eventitems.length;i++){
          if(parseInt(eventitems[i].enddate.split('-')[2])>parseInt(this.currentdate.split('-')[2]) && parseInt(eventitems[i].startdate.split('-')[2])<parseInt(this.currentdate.split('-')[2])){
            this.items.push(eventitems[i])
          }
          else if(parseInt(eventitems[i].enddate.split('-')[2])==parseInt(this.currentdate.split('-')[2]) && parseInt(eventitems[i].startdate.split('-')[2])==parseInt(this.currentdate.split('-')[2]))
          {
            if(parseInt(eventitems[i].enddate.split('-')[1])>parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])<parseInt(this.currentdate.split('-')[1])){
            this.items.push(eventitems[i])
          }
            else if(parseInt(eventitems[i].enddate.split('-')[1])==parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
              if(parseInt(eventitems[i].enddate.split('-')[0])>=parseInt(this.currentdate.split('-')[0]) && parseInt(eventitems[i].startdate.split('-')[0])<=parseInt(this.currentdate.split('-')[0])){
            this.items.push(eventitems[i])
          }
            }
          }
        }
        if(this.items.length===0)
        this.items.push({       heading: 'No Ongoing Events',
                      description: null,
                      link: '#',
                      startdate: null,
                      enddate: null
              })
      }
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
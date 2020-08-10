<template>
  <v-row
    align="center">
    <v-col
            md="3"
            lg="3"
            sm="12"
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
import axios from 'axios'
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
      axios.get('https://sudans-tech.firebaseio.com/events.json')
       .then(res=>{
         this.$store.state.events.events=res.data
       })
      console.log(this.$store.state.events.events)
      var eventitems=this.$store.state.events.events
      this.getNow()
      if(this.type==='upcomingevents'){
        for( let i in eventitems){
          console.log(eventitems[i])
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
        for(let i in eventitems){
          if(parseInt(eventitems[i].enddate.split('-')[2])>parseInt(this.currentdate.split('-')[2]) && parseInt(eventitems[i].startdate.split('-')[2])<parseInt(this.currentdate.split('-')[2])){
            this.items.push(eventitems[i])
          }
          else if(parseInt(eventitems[i].enddate.split('-')[2])==parseInt(this.currentdate.split('-')[2]) && parseInt(eventitems[i].startdate.split('-')[2])==parseInt(this.currentdate.split('-')[2]) || parseInt(eventitems[i].enddate.split('-')[2])==parseInt(this.currentdate.split('-')[2]) && parseInt(eventitems[i].startdate.split('-')[2])<parseInt(this.currentdate.split('-')[2]) || parseInt(eventitems[i].enddate.split('-')[2])>parseInt(this.currentdate.split('-')[2]) && parseInt(eventitems[i].startdate.split('-')[2])==parseInt(this.currentdate.split('-')[2]))
          {
            if(parseInt(eventitems[i].enddate.split('-')[1])>parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])<parseInt(this.currentdate.split('-')[1])){
            this.items.push(eventitems[i])
          }
            else if(parseInt(eventitems[i].enddate.split('-')[1])==parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])==parseInt(this.currentdate.split('-')[1]) || parseInt(eventitems[i].enddate.split('-')[1])==parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])<parseInt(this.currentdate.split('-')[1]) || parseInt(eventitems[i].enddate.split('-')[1])>parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
          {  
                 if(parseInt(eventitems[i].enddate.split('-')[1])==parseInt(this.currentdate.split('-')[1]) && parseInt(eventitems[i].startdate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
                   if(parseInt(eventitems[i].enddate.split('-')[0])>=parseInt(this.currentdate.split('-')[0]) && (parseInt(eventitems[i].startdate.split('-')[0])<=parseInt(this.currentdate.split('-')[0])))
                    this.items.push(eventitems[i])
                 }

               else if(parseInt(eventitems[i].enddate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
                  if(parseInt(eventitems[i].enddate.split('-')[0])>=parseInt(this.currentdate.split('-')[0]))
                  this.items.push(eventitems[i])
            }
              else if (parseInt(eventitems[i].startdate.split('-')[1])==parseInt(this.currentdate.split('-')[1])){
                 if(parseInt(eventitems[i].startdate.split('-')[0])<=parseInt(this.currentdate.split('-')[0]))
                  this.items.push(eventitems[i])
              }
          }
            }
          }
        }
        if(this.items.length===0)
        this.items.push({heading: 'No Ongoing Events',
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
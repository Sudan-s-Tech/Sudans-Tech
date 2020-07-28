<template>
<div>
    <br>
    <v-container>
    <h1>Our Events</h1>
    <br><br>
    <div>
    <h3>Upcoming Events</h3>
    <eventcardgrid type="upcomingevents"/>
    </div>
    <br><br>
    <div>
    <h3>Ongoing Events</h3>
    <eventcardgrid type="ongoingevents" />
    </div>
    <br><br>
    <div>
        <h3>Past Events</h3>
        <eventtable/>
    </div>
    </v-container>
</div>    
</template>


<script>
import eventcardgrid from "@/components/eventcardgrid"
import eventtable from "@/components/eventtable"
export default {
    components:{
        eventcardgrid:eventcardgrid,
        eventtable: eventtable
    },
}
</script>


<style scoped>

</style>
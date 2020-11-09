<template>
    <div id="card">
        <br>
        <v-icon>{{icon}}</v-icon>
        <h1>{{title}}</h1>
        <p><b>{{body}}</b></p>
    </div>
</template>

<script>
export default {
    props: ['icon','title','body']
}
</script>

<style scoped>
#card{
    width: 18.75rem;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 10px;
    box-shadow: 0 0 4px 0 rgba(17,22,26,.16), 0 2px 4px 0 rgba(17,22,26,.08), 0 4px 8px 0 rgba(17,22,26,.08);
    border-top: 4px solid #889abf;
    margin: 5px auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */
    position: relative;
}
h1{
    font-size: 1.5em;
    padding: 5px;
}
p{
    font-size: 1em;
}
</style>
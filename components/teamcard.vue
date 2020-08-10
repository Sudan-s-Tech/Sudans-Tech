<template>
  <div class="team-box">
                    <div class="team-pic">
                         <img
        :src=" this.details.image"
        :alt="this.details.name"
      >
                    </div>
                    <div class="team-name">{{this.details.name}}</div>
      <div class="team-desc">
                  <p>{{this.details.description}}</p>
     </div>
          <span>
            <v-btn class="mx-2" fab dark large color="primary accent-4" :href="this.details.linkedin">
                 <v-icon>fab fa-linkedin</v-icon>
                </v-btn>
           <v-btn class="mx-2" fab dark large color="primary accent-4" :href="this.details.twitter">
                <v-icon>fab fa-twitter-square</v-icon>
                </v-btn>
          </span>
                </div>
</template>

<script>
export default {
name: 'teamcard',
props:['details'],
}
</script>

<style scoped>
.team-box {
    text-align: center;
    margin: auto;
    border: solid 1px #f3f3f3;
    margin-top: 30px;
    min-height: 325px;
    min-width: 300px;
    max-height: 460px;
    max-width: 400px;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
    transition: 0.2s ease;
}
.team-pic {
    display: flex;
    justify-content: center;
    margin: -4rem auto .5rem;
}
.team-name {
    font-weight: 400;
    font-size: 20px;
}
.team-desc {
    font-size: 17px;
    line-height: 1.6;
    color:darkgray;
}
img {
    border-radius: 50%;
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 10px;
}
</style>
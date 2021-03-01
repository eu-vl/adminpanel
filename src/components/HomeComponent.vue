<template>
  <div>
    <particles-bg type="cobweb" :config="config" :bg="true" />
    <vue-typed-js :strings="['WELCOME!']" :loop="false" :typeSpeed="100" class="greetings">
      <h1><span class="typing"></span></h1>
    </vue-typed-js>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "HomeComponent",
  components: {
    ParticlesBg,
  },
  data() {
    return {
      config: {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-30, 30],
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15,
      },
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
.greetings{
    justify-content: center;
    align-items: center;
    margin-top: 15%;
}
.greetings h1 span{
    display:inline-block;
    text-align: center;
    font-family: 'DotGothic16', sans-serif;
    letter-spacing: 15px;
}
</style>
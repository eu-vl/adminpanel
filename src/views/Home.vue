<template>
  <div class="home">
  <home-component/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import HomeComponent from '../components/HomeComponent.vue';
export default {
  components: { HomeComponent },
  name: 'Home',
  methods:{
    ...mapGetters({
      getRoles: 'getRoles'
    })
  },
}

</script>

<style>

</style>

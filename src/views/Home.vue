<template>
  <div class="home">
  {{getRoles()}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
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

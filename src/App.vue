<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Menu from './components/Menu.vue'
import Tasks from './components/Tasks.vue'
</script>

<template>
  <div class='mx-auto p-3'>
  <header>
    
  
      <Menu />
      
    
   
  </header>
  
  </div> <RouterView />
</template>

<style scoped>

</style>

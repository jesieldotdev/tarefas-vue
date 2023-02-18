<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import Tasks from '../components/Tasks.vue'
import {ref} from 'vue'


const titulo = ref('')
function login(){
  console.log(titulo.value)
}

</script>

<template>
  <div class='m-3 text-center'>
    <h1 id="logo">Tasks</h1>
    
</div>

<header class="mx-auto">
<div id='input-text' class='m-1'>
<form class="card mx-auto p-3" @submit.prevent="login">
<div id="inp" class="form-outline mx-auto">
  <input  type="text" v-model="titulo" class="form-control" />
  <label class="form-label " for="form12">Digite uma nova tarefa</label>
  
</div>
<div class='text-center mt-3'>
<button style="background-color: #0205d3;" type="submit" class="btn btn-primary">Salvar</button>
</div>
</form>
</div>
</header>



 <div class="card p-3 mt-2 m-1">
    <p>{{titulo}}</p>
  </div>
</template>

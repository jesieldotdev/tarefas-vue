

<template>
	<NavBar />
  <div class='m-3 text-center'>
    <h1 id="logo">Tarefas</h1>
    
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
<div class='card m-1'>
<div class="item">
    <div id="esq-elements">
    <p style="font-size: 18px" >titulo</p>
    
    <small>Há algum tempo</small>
    <small>{{tasks}}</small>
   
  
    <small>created_at</small>
    
    </div>
    <div class="div-bt">
       
           <a href='/'><button type="button" class="btn btn-success btn-floating">
  <i class="mdi mdi-check"></i>
</button></a>
        
   <a href='/'><button type="button" class="btn btn-warning btn-floating">
  <i class="mdi mdi-close"></i>
</button></a>

    <a href="/"><button type="button" class="btn btn-danger btn-floating ms-1 me-1">
  <i class="mdi mdi-delete"></i>
</button></a>
  
<div class="dropdown">
  <button
    class="btn btn-primary btn-floating"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    <i class="mdi mdi-tag-multiple"></i>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
 
    <li><a class="dropdown-item" >Editar</a></li>
    
  
  </ul>
</div>
</div>
</div>

   </div>


</template>

<script>
import NavBar from "@/components/NavBar.vue"

import { app } from "../firebase";import { getDatabase, ref, child, get } from "firebase/database";

const tasks = []

const dbRef = ref(getDatabase());
get(child(dbRef, `tarefas`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    tasks.push(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


export default{
	components: {
		NavBar,
	},
	data(){
		return{
			tasks: tasks,
		}
	}
}
</script>
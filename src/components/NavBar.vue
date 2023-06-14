<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="mdi mdi-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <!--<a class="navbar-brand mt-2 mt-lg-0" href="#">-->
      <!--  <img-->
      <!--    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"-->
      <!--    height="15"-->
      <!--    alt="MDB Logo"-->
      <!--    loading="lazy"-->
      <!--  />-->
      
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <a class="nav-link" href="/">Notas</a>
        </li>
        
        <li v-if="!logado" class="nav-item">
            <a class="dropdown-item" href="/login">Entrar</a>
        </li>
        

        

      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
      

      <!-- Notifications -->
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="mdi mdi-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
          v-for="item in notifications"
        >
        
          <li>
            <a class="dropdown-item" href="#">{{item}}</a>
          </li>
        
        <li>
            <a class="dropdown-item" href="#">item</a>
            <a class="dropdown-item" href="#">item</a>
          </li>
         
        </ul>
      </div>
      <!-- Avatar -->
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://avatars.githubusercontent.com/u/82860253?v=4"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >


          
          <li v-if="logado">
            <a class="dropdown-item" href="/perfil">Perfil</a>
          </li>
          <li>
            <a class="dropdown-item" href="/logout">Sair</a>
          </li>
          
          <li>
            <a class="dropdown-item" href="/login">Entrar</a>
          </li>
          <li>
            <a class="dropdown-item" href="/register">Criar conta</a>
          </li>
          
        </ul>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
</template>

<script>

export default{
	data(){
		return {
			logado: false,
			notifications: ["Verificar email", "Atualizar foto do perfil"]
		}
	}
}
</script>
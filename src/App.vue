<template>
  <div id="app">
    <div class="menu-list">
      <router-link to="/">
      <p class="menu-list_inicio">
        Inicio
      </p>
      </router-link>
      <router-link to="/game">
      <p class="menu-list_fuego">
        Fuego
      </p>
      </router-link>
      <router-link to="/search">
      <p class="menu-list_buscar">
        Buscar
      </p>
      </router-link>
    </div>
    <div class="main-content">  
      <router-view />
    </div>  
  </div>
</template>
<style lang="scss">
 .menu-list {
    display: flex;
    &_inicio{
      margin-left: 10px;
      margin-right: 20px;
    }
    &_fuego{
      margin-right: 20px;
    }
 }
</style>
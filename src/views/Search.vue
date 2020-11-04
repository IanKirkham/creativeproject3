<template>
  <div class="search">
    <h1 class="title">Search</h1>
    <form class="search-form">
      <i class="fas fa-search"></i><input v-model="searchText"/>
    </form>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  width: 50%;
  margin-top: 1em;
}

input {
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  padding-left: 0.5em;
  margin-left: 0.5em;
}
</style>

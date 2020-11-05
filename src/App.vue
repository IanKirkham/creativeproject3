<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item" to="/">
      <div class="menu-item">
        <i class="fas fa-home"></i>
        <p>Home</p>
      </div>
      </router-link>
      <router-link class="nav-item" to="/search">
        <div class="menu-item">
          <i class="fas fa-search"></i>
          <p>Search</p>
        </div>
      </router-link>
      <router-link class="nav-item" to="/watchlist">
        <div class="menu-item">
          <i class="fas fa-ticket-alt"></i>
          <span class='badge' id='watchlistCount'>{{watchlistSize}}</span>
          <p>My Watchlist</p>
        </div>
      </router-link>
    </div>
    <router-view/>
    <div class="footer-padding"></div>
    <div class="footer">
      <a href="https://github.com/IanKirkham/creativeproject3">View GitHub Repository</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    watchlistSize() {
      if (this.$root.$data.watchlist.length === undefined) {
        return 0;
      }
      else {
        return this.$root.$data.watchlist.length;
      }
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

body, html {
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 1em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #161830;
}
 
::-webkit-scrollbar-thumb {
  background-color: #595fab;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #22254b;
  min-height: 100vh;
}

#nav {
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  vertical-align: center;
  background-color: #373b69;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  margin-left: 1em;
}

i {
  font-size: 2em;
}

.badge {
  border-radius: 2em;
}

#watchlistCount {
    font-size: 0.8em;
    background: #e31502;
    color: #fff;
    padding: 0 5px;
    vertical-align: 1.2em;
    margin-left: -0.9em; 
}

.footer-padding {
  height: 7vh;
}

.footer {
    display: flex;
    width: 100%;
    height: 7vh;
    justify-content: center;
    align-items: center;
    background-color: #101224;
    box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.2);
    padding: 0.3em 0em;
    position: fixed;
    bottom: 0;
  }
  
  .footer a {
    margin: 0em 1em;
    color: #ffffff;
    font-size: 1em;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 0.25em;
    padding: 0.2em;
  }

  .footer a:hover {
    border: 1px solid #000000;
    color: #000000;
  }
</style>

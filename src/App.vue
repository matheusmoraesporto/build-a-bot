<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
            Build-a-bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Build' }" class="nav-link">
            Build
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Search' }" class="nav-link">
            Search
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link to="/cart" class="nav-link">
            Cart
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1400px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1460px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

/* This class is controlled by vue, it adds to the main router
  but it could be changed in the router with the property linkActiveClass
 */
.router-link-active {
  color: white;
}
</style>

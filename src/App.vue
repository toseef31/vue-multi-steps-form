<template>
  <Header />
  <main>
    <router-view />
  </main>

</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header,
  },
}
</script>

<style>

html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

* {
  padding: 0;
  margin: 0;
}

button,
input {
  background-color: transparent;
  border-style: none;
}



main {
  min-height: 90vh;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script setup lang="ts">
</script>

<template>
  <header>
    <nav>
      <router-link to="/world-clock">World Clock</router-link>
      <router-link to="/timer">Timer</router-link>
      <router-link to="/countdown">Countdown</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem;
  background-color: #f8f9fa;
  margin-bottom: 2rem;
}

nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b883;
}
</style>

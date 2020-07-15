<template>
  <li>
    <router-link v-bind:to="href">{{title}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    href: String,
    title: String
  }
}
</script>

<style scoped lang="scss">
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>

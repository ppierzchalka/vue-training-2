<template>
  <nav>
    <h3>Random articles</h3>
      <NavList
        v-bind:articles="10"
      />
  </nav>
</template>

<script>
import NavList from './NavList'
export default {
  name: 'Nav',
  components: {
    NavList
  }
}
</script>

<template>
  <v-breadcrumbs :items="pathItems" divider="=>"></v-breadcrumbs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HistoryList',
  computed: {
    ...mapGetters([
      'pathItems'
    ])
  }
}
</script>

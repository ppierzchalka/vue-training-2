<template>
    <v-footer app dark>
      <HistoryList />
    </v-footer>
</template>

<script>
import HistoryList from './HistoryList.vue'
export default {
  name: 'Footer',
  components: {
    HistoryList
  }
}
</script>

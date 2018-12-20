<template>
  <div>{{current}}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      current: 'book/byRoute'
    })
  },
  async fetch ({ store, params }) {
    await store.dispatch('book/GET_BOOK', params.uuid);
  }
}
</script>

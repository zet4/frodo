<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex md4 v-for="book in books" :key="book.id">
        <v-card>
          <v-card-title>{{book.name}}</v-card-title>
          <v-card-actions>
            <v-btn :to="'/book/' + book.id">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      books: state => state.book.list
    })
  },
  async fetch ({ store, params }) {
    await store.dispatch('book/GET_LIST');
  }
}
</script>

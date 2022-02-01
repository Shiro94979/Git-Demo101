<template>

  <div>
    <div>
      <v-text-field v-model="query" label="Search"> </v-text-field>
          <vs-button gradient type="filled"  color="rgb(100,22,200)" size="xl" style="width: 100%"  @click="HandleSearchManga">Search</vs-button>
    </div>
    <v-divider class="mt-2 mb-2"></v-divider>
    <div class="d-flex flex-wrap ma-10">
      <v-card
        v-for="manga in results"
        :key="manga.mal_id"
        class="ma-2"
        max-width="344"
        outlined
        @click="handleMangaClick(manga)"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Publishing: {{ manga.publishing }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ manga.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ manga.synopsis }}}</v-list-item-subtitle>
          </v-list-item-content>
          <img
            :src="manga.image_url"
            alt=""
            :style="{ width: `80px`, marginTop:'10px' }"
          />
            <template #img>
      <img :src="manga.image_url" alt="">
    </template>
        </v-list-item>


        <v-card-actions> </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchPage',
  data() {
    return {
      query: '',
      results: [],
    }
  },
  methods: {
    HandleSearchManga() {
      const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
      axios.get(url).then((res) => {
        this.results = res.data.results
      })
    },
    handleMangaClick(manga) {
      window.location.href =  manga.url
    }
  },
}
</script>

<style>
</style>

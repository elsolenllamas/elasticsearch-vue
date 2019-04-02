<template>
  <div id="app" class="container">
      <input type="text" 
        class="form-control col-md-6" 
        @keyup.prevent="search"
        v-model="query" />
    
    <div class="search-results-container">
      <div v-if="data && show" v-for="(value, index) in data" 
      :key="index"
      :ref="`card_${index}`"
         class="card">
      
      <div class="card-footer">
        <router-link :to="{ name: 'Albums', params: { id: value._source.id , content: value._source}}">
          <h3 v-on:click="remove">{{value._source.album_name}}</h3>
        </router-link>
        <h5>{{value._source.artist_name}}</h5>
        <span>{{value._source.label}}</span>
      </div>
    </div>
  </div>
  <router-view></router-view>
  </div>
</template>


<script>

export default {
  data() {
    return {
      query: "",
      data: [],
      show: true
    }
  },
  methods: {
    search() {
        this.show = true,
        this.axios.get('http://localhost:5000/search?q='+this.query)
              .then(response => {
                this.data = response.data;
                console.log(this.data);
          })
    },

    remove() {
        this.show = false;
    }
  }
}
</script>

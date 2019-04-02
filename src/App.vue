<template>
  <div id="app" class="container">
      <input type="text"
        @keyup.prevent="search"
        v-model="query" />
    
    <div  class="search-results">
        <div v-if="data" v-for="(value, index) in data" 
          :key="index"
          :ref="`card_${index}`"
          class="card">

            <h4>{{value._source.yourjsonfield_1}}</h4>
            <span>{{value._source.yourjsonfield_2}}</span>
        </div>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      query: "",
      data: []
    }
  },
  methods: {
    search() {
        this.axios.get('http://localhost:5000/search?q='+this.query)
              .then(response => {
                this.data = response.data;
          })
    }
  }
}
</script>

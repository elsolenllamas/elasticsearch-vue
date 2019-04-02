<template>

 <div>
    <p>Artist Name: {{ content.artist_name }}</p>
    <p>Album Name: {{ content.album_name }}</p>
    <p>Label: {{ content.label }}</p>
  </div>

</template>

<script>

  export default {
    name: 'Albums',
     	data () {
            return {
                content: {}
            }
        },

        watch: {
	      '$route': 'update'
	    },

        created() {
            this.update();
        },

        methods: {
          update() {
              this.content = this.$route.params.content;
          }
		    }
 }
</script>

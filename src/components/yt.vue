<template>
  <div id="player"></div>
</template>
<script>
export default {
  props: {
    videoId: String
  },
  data() {
    return {
      player: {}
    }
  },
  mounted() {
    this.videoLoad(this.videoId);
    this.$watch('videoId', videoId => {
      this.videoLoad(videoId)
    }, {immediate:true});
  },
  methods: {
    videoLoad: function(videoId) {
      //console.log(videoId)
      // youtube iFrame API
      const playerVars = {
        autoplay: 1,
        controls: 0,
        rel: 0,
      }

      const tag = document.createElement('script')
      const scriptTags = document.getElementsByTagName('script')
      const scriptTagLast = scriptTags[scriptTags.length - 1]

      tag.src = 'https://www.youtube.com/iframe_api'
      scriptTagLast.parentNode.insertBefore(tag, scriptTagLast.nextSibling)

      window.onYouTubeIframeAPIReady = () => {
        this.player = new YT.Player('player', { videoId: videoId, width: '100%', height: '100%', })
      }
    }
  }
}
</script>
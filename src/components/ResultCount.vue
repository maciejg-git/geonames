<template>
  <div>
    <div class="alert alert-secondary" role="alert">
      <div v-for="result in resultCount">
        <span class="font-weight-bold">{{ result.name }}</span>
        :
        found {{ result.nameCount }} features
        ( {{ result.nameFiltered }} filtered )
				<br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCount",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    resultCount() {
      return this.$store.state.resultCount;
    }
  },
  watch: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

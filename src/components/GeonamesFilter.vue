<template>
		<div>
			<h4>Filter</h4>
			  <div class="row">
			    <div class="col-md-3">
			      <div class="mb-2">
			      	States:
			      	<a @click.prevent="setAllFilterState('all')" href>All</a> |
			      	<a @click.prevent="setAllFilterState('none')" href>None</a>
			      </div>
			      <form>
			        <div v-for="(s, index) in states">
			          <div class="form-check">
			            <input
			              :checked="$store.state.states[index].value"
			              @change="setFilterState(index, $event)"
			              class="form-check-input"
			              type="checkbox"
			              :id="'state'+index"
			            />
			            <label class="form-check-label" :for="'state'+index">{{ s.state }}</label>
			          </div>
			        </div>
			      </form>
			    </div>
			    <div class="col-md-9 border-left">
			      <div class="mb-2 mt-md-0 mt-sm-2">
			      	Categories:
			      	<a @click.prevent="setAllFilterCategory('all')" href>All</a> |
			      	<a @click.prevent="setAllFilterCategory('none')" href>None</a> |
			      	<a @click.prevent="setAllFilterCategory('default')" href>Default</a>
			      </div>
			      <form>
			        <div class="d-flex flex-column flex-md-wrap maxheight">
			          <div v-for="(c, index) in categories" style="width: 250px" :key="index" class="flex-grow-1">
			            <div class="form-check">
			              <input
			                class="form-check-input"
			                @change="setFilterCategory(index, $event)"
			                type="checkbox"
			                value
			                :id="'filtercheckbox' + index"
			                :checked="c.value"
			              />
			              <label class="form-check-label" :for="'filtercheckbox' + index">
										{{ c.category }}
									</label>
			            </div>
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
		</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: [],
  data() {
    return {};
  },
  computed: {
    states() {
      return this.$store.state.states;
    },
    categories() {
      return this.$store.state.filtersCategory;
    }
  },
  mounted: function() {},
  methods: {
    setFilterState(index, e) {
      this.$store.commit("setFilterState", { index, value: e.target.checked });
    },
    setFilterCategory(index, e) {
      this.$store.commit("setFilterCategory", {
        index,
        value: e.target.checked
      });
    },
    setAllFilterState(filter) {
      this.$store.commit("setAllFilterState", filter);
    },
    setAllFilterCategory(filter) {
      this.$store.commit("setAllFilterCategory", filter);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1024px) {
    .maxheight {
        max-height: 250px;
    }
}
</style>

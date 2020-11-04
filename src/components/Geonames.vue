<template>
  <div class="container-fluid bg-light pb-4">
    <div class="row">
      <div class="col-md-4 mt-4">

        <!-- SEARCH COMPONENT -->

        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <GeonamesSearch @search="search" />
          </div>
        </div>
      </div>
      <div class="col-md-8 mt-4">

        <!-- FILTER AND SETTINGS COMPONENT -->

        <div class="card mb-4">
          <div class="card-body">
            <GeonamesFilter />
          </div>
        </div>
      </div>
    </div>

    <!-- END ROW -->

    <!-- COUNT COMPONENT -->

    <ResultCount v-show="$store.state.items2.length" />

    <!-- RESULTS COMPONENT -->

    <VPanel 
      v-show="$store.state.isLoadingItems.length" 
      v-model="resultActiveTab" 
      ref="panel" 
      class="mt-4"
    >
      <VTab
        v-for="(result, i) in $store.state.isLoadingItems"
        :name="tabs[i]"
        :add="result"
        :show="true"
      >
        <GeonamesItems 
          v-show="!$store.state.isLoadingItems[i]" 
          :items="i" 
          ref="'items'+i"
        >
        </GeonamesItems>
      </VTab>
    </VPanel>

  </div>
</template>

<script>
import { tools } from "../tools.js"
import { config } from "../config.js"

import VPanel from "./VComponents/VPanel.vue"
import VTab from "./VComponents/VTab.vue"
import VDropdown from "./VComponents/VDropdown.vue"
import VDropdownItem from "./VComponents/VDropdownItem.vue"
import GeonamesSearch from "./GeonamesSearch.vue"
import GeonamesItems from "./GeonamesItems.vue"
import GeonamesFilter from "./GeonamesFilter.vue"
import Settings from "./Settings.vue"
import ResultCount from "./ResultCount.vue"

export default {
  name: "Geonames",
  components: {
    VPanel,
    VTab,
    VDropdown,
    VDropdownItem,
    GeonamesSearch,
    GeonamesItems,
    GeonamesFilter,
    Settings,
    ResultCount,
  },
  data() {
    return {
      tabs: [],
      resultActiveTab: 0
    };
  },
  mounted: function() {
    this.loadHistory();
  },
  computed: {},
  watch: {
    // update filtered count
    "$store.getters.filteredItems2": function() {
      for (let i = 0; i < this.$store.state.resultCount.length; i++) {
        let count = this.$store.getters.resultCountByFeature(i);

        this.$store.commit("setFilteredCount", { index: i, count });
      }
    }
  },
  methods: {
    search(data) {
      if (!data.name || this.$store.state.isLoadingItems.includes(true)) {
        return
      }
      this.resetComponent();
      this.resultActiveTab = 0;

      let states = data.states
        .filter(s => s.value)
        .map(s => s.name)
        .join(",");

      let query = {
        term: "",
        search_states: states,
        top_n: 200
      };

      let name = data.name.split(";");
      
      this.$store.commit("setSearchFeatures", { name });
      this.$store.commit("setHistory", { searchString: data.name });
      this.saveHistory();

      let url = [];
      for (let i = 0; i < name.length; i++) {
        query.term = name[i];
        url.push(tools.createUrl(config.url, query));
        this.tabs[i] = name[i];
      }
      this.$store.dispatch("getItems", url);
      
    },

    // RESET

    resetComponent() {
      this.$store.commit("resetItems");
      this.$store.commit("resetIsLoadingItems");
      this.$store.commit("resetResult");
      this.$store.commit("setResultCounter", true);
    },

    // HISTORY

    saveHistory() {
      localStorage.setItem("searchHistory", JSON.stringify(this.$store.state.searchHistory));
    },
    loadHistory () {
      let searchHistory = JSON.parse(
        localStorage.getItem("searchHistory")
      );
      if (searchHistory) this.$store.commit("loadHistory", { searchHistory });
    }
  }
};
</script>

<style scoped>
</style>

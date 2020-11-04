<template>
  <div>
    <table class="table table-hover table-sm mt-3">
      <thead class="thead-dark">
        <tr>
          <th @click="sortItems('Name')" scope="col" class="pointer">
            Name
            <i class="fas fa-sort pl-2"></i>
          </th>
          <th @click="sortItems('State')" scope="col" class="pointer">
            State
            <i class="fas fa-sort pl-2"></i>
          </th>
          <th @click="sortItems('County')" scope="col" class="pointer">
            County
            <i class="fas fa-sort pl-2"></i>
          </th>
          <th @click="sortItems('Category')" scope="col" class="pointer">
            Category
            <i class="fas fa-sort pl-2"></i>
          </th>
          <th scope="col">Latitude</th>
          <th scope="col">Longtitude</th>
          <!-- <th scope="col">Map</th> -->
        </tr>
      </thead>
      <tbody>
        <template v-for="item in sortedItemsByFeature">
          <tr>
            <td>
              <i 
                class="fas fa-map-marker-alt pr-2"
              ></i>
                {{ item.Name }}
            </td>
            <td>{{ item.State }}</td>
            <td>{{ item.County }}</td>
            <td>{{ item.Category }}</td>
            <td>{{ item.Lat }}</td>
            <td>{{ item.Lon }}</td>
            <!-- <td> -->
            <!--   <a :href="item.mapGoogle">Google</a>, -->
            <!--   <a :href="item.mapNa">NA</a> -->
            <!-- </td> -->
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  props: {
    items: Number
  },
  data() {
    return {
      sort: "State",
      sortDir: "asc"
    };
  },
  mounted: function() {},
  computed: {
    filteredItemsByFeature() {
      return this.$store.getters.filteredItemsByFeature(this.items);
    },
    sortedItemsByFeature() {
      return this.$store.getters.sortedItems(this.items, this.sort);
    }
  },
  methods: {
    sortItems(dir) {
      this.sort = dir;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

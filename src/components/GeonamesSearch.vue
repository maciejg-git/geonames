<template>
	<div class="hello">
		<h4>Search</h4>
		<form>

			<div class="form-group">
				<input v-model="name" type="search" class="form-control" placeholder="Feature name">
			</div>

			<div class="d-flex justify-content-end">
				<a @click.prevent="showHistory = !showHistory" class="small" href="">
					recent
				</a>
			</div>

			<div v-show="showHistory" class="row">
				<div class="col maxheight">
					<ul class="nomargin">
						<li class="nodecoration small" v-for="string in $store.state.searchHistory">
							<a @click.prevent="setSearchString(string)" href="">{{ string }}</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="form-check">
				<input v-model="states[0].value" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
				<label class="form-check-label" for="defaultCheck1">
					Montana
				</label>
			</div>	
			<div class="form-check">
				<input v-model="states[1].value" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
				<label class="form-check-label" for="defaultCheck1">
					Wyoming
				</label>
			</div>	
			<div class="form-check">
				<input v-model="states[2].value" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
				<label class="form-check-label" for="defaultCheck1">
					Colorado
				</label>
			</div>	
			<div class="form-check form-group">
				<input v-model="states[3].value" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
				<label class="form-check-label" for="defaultCheck1">
					New Mexico
				</label>
			</div>	

			<div class="form-group">
				<button @click.prevent="search" type="submit" class="btn btn-primary">Search</button>
			</div>
		</form>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				name: "",
				states: [
					{
						name: "MT",
						value: true
					},
					{
						name: "WY",
						value: true
					},
					{
						name: "CO",
						value: true
					},
					{
						name: "NM",
						value: true
					},
				],
				showHistory: false,
			}
		},
		mounted: function() {
			this.name = "cascade creek;eureka"
		},
		methods: {
			search() {
				this.$emit("search", { name: this.name, states: this.states })
			},
			setSearchString(string) {
				this.name = string;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nodecoration {
	list-style-type: none;
}
.nomargin {
	margin-left: 0;
	padding-left: 0;
}
.maxheight {
	max-height: 200px;
	overflow-y: auto;
}
</style>

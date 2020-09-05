<template>
	<div>
		<form>
			<div class="row">
				<div class="col-6">
					<div class="form-group">
						<label for="exampleInputEmail1">Google Map default zoom</label>
						<select class="custom-select">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
				</div>
			</div>
			<div class="form-group row">
				<label for="inputEmail3" class="col-sm-2 col-form-label">Map markers</label>
				<div class="col-sm-10">
					<input type="email" class="form-control" id="inputEmail3">
				</div>
			</div>
			<fieldset class="form-group">
				<div class="row">
					<legend class="col-form-label col-sm-2 pt-0">Map markers</legend>
					<div class="col-sm-10">
						<div class="form-check">
							<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
							<label class="form-check-label" for="gridRadios1">
								Circles
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
							<label class="form-check-label" for="gridRadios2">
								Markers
							</label>
						</div>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
</template>

<script>
import { tools } from "../tools.js";

export default {
	name: "HelloWorld",
	components: {},
	data() {
		return {
		};
	},
	mounted: function() {},
	computed: {
	},
	methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

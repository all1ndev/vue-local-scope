<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import ExampleSfc from "./demo-sfc.vue";
import ExampleTsx from "./demo-tsx";

const lorem = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
const ipsum = reactive({
	text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});

onMounted(() => {
	setTimeout(() => {
		lorem.value = `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
	}, 3000);

	setTimeout(() => {
		ipsum.text = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
	}, 5000);
});
</script>

<template>
	<h1>Example SFC</h1>
	<ExampleSfc :lorem="lorem" :ipsum="ipsum" />

	<h1>Example TSX</h1>
	<ExampleTsx :lorem="lorem" :ipsum="ipsum" />
</template>

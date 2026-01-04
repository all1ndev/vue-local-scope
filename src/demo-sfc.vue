<script setup lang="ts" generic="T">
import { LocalScope } from "../lib/vue-local-scope";

defineProps<{ lorem: string }>();
</script>

<template>
	<LocalScope :lorem="lorem" #default="props">
		<ol>
			<li>{{ props.lorem }}</li>
			<li>{{ JSON.stringify(props) }}</li>
		</ol>
	</LocalScope>
</template>

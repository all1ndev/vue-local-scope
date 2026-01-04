<script setup lang="ts" generic="T">
import { LocalScope } from "../lib/vue-local-scope";

interface Props {
	lorem: string;
	ipsum: { text: string };
}

defineProps<Props>();
</script>

<template>
	<LocalScope #default="props" :lorem="lorem" :ipsum="ipsum" dolor-sit="amet">
		<ol>
			<li>{{ props.lorem }}</li>
			<li>{{ props.ipsum.text }}</li>
			<li>{{ props.dolorSit }}</li>
			<li>{{ JSON.stringify(props) }}</li>
		</ol>
	</LocalScope>
</template>

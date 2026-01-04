<script lang="ts">
import { camelize } from "vue";

function camelized(attrs: Record<string, unknown>): Record<string, unknown> {
	const result: Record<string, unknown> = {};

	for (const key in attrs) {
		result[camelize(key)] = attrs[key];
	}
	return result;
}
</script>

<script setup lang="ts" generic="T extends Record<string, unknown>">
defineOptions({ inheritAttrs: false });
defineProps</* @vue-ignore */ T>();
defineSlots<{ default?(props: T): unknown }>();
</script>

<template>
	<slot v-bind="camelized($attrs) as T" />
</template>

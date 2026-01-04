<script setup lang="ts" generic="T extends Record<string, unknown>">
defineOptions({ inheritAttrs: false });
defineProps</* @vue-ignore */ T>();
defineSlots<{ default?(props: T): unknown }>();
</script>

<template>
	<slot v-bind="$attrs as T" />
</template>

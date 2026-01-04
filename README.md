# @all1ndev/vue-local-scope

> An implementation of [posva/vue-local-scope](https://github.com/posva/vue-local-scope) for Vue 3 and TypeScript support

Allows to reuse an expression that is repeating multiple times in a Vue Template

```vue
<script setup lang="ts">
import { LocalScope } from "@all1ndev/vue-local-scope";
</script>

<template>
	<LocalScope
		lorem="Lorem Ipsum Dolor Sit Amet"
		lorem-ipsum="dolor"
		#default="props"
	>
		<ol>
			<li>{{ props.lorem }}</li>
			<li>{{ props.loremIpsum }}</li>
		</ol>
	</LocalScope>
</template>
```

With Full Type Completion

<img width="397" alt="image" src="https://github.com/user-attachments/assets/7e38ec79-815c-455f-bec7-5e777114e3b0">

> [!NOTE]  
> Can be used in JSX but types are not infered

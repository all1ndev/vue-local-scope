import type { SetupContext, SlotsType, VNode } from "vue";
import { camelize } from "vue";

export function LocalScope<T extends Record<string, unknown>>(
	props: T,
	context: SetupContext<
		undefined,
		SlotsType<{ default?(props: ValidProps<T>): VNode }>
	>,
) {
	const fakeProps = camelized(props) as ValidProps<T>;
	return context.slots.default?.(fakeProps) as VNode & {
		// This does the trick for SFC to work
		__ctx?: typeof context;
	};
}

LocalScope.inheritAttrs = false;

type Prettify<T> = {} & {
	[K in keyof T]: T[K];
};

type ValidProps<T extends Record<string, unknown>> = Prettify<
	Omit<T, "key" | "ref">
>;

function camelized(obj: Record<string, unknown>): Record<string, unknown> {
	const result: Record<string, unknown> = {};

	for (const key in obj) {
		result[camelize(key)] = obj[key];
	}

	return result;
}

import { defineComponent } from "vue";
import { LocalScope } from "../lib/vue-local-scope";

interface Props {
	lorem: string;
	ipsum: { text: string };
}

export default defineComponent((props: Props) => {
	return () => (
		<LocalScope lorem={props.lorem} ipsum={props.ipsum} dolor-sit="amet">
			{/* @ts-expect-error Don't know how to make JSX Types for props work here */}
			{(props) => (
				<ol>
					<li>{props.lorem}</li>
					<li>{props.ipsum.text}</li>
					<li>{props.dolorSit}</li>
					<li>{JSON.stringify(props)}</li>
				</ol>
			)}
		</LocalScope>
	);
});

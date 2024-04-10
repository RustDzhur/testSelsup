import ParamEditor from "./component/param";
import styles from "./page.module.css";

const params = [
	{ id: 1, name: "Назначение", type: "string" },
	{ id: 2, name: "Длина", type: "string" },
];

const model = {
	paramValues: [
		{ paramId: 1, value: "повседневное" },
		{ paramId: 2, value: "макси" },
	],
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Редактор параметров</h1>
				<ParamEditor params={params} model={model} />
			</div>
		</main>
	);
}

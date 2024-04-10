"use client";
import React, { useState } from "react";

interface Param {
	id: number;
	name: string;
	type: string;
}

interface ParamValue {
	paramId: number;
	value: string;
}

interface Model {
	paramValues: ParamValue[];
}

interface Props {
	params: Param[];
	model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
	const [editedValues, setEditedValues] = useState<{ [key: number]: string }>(
		() => {
			const initialEditedValues: { [key: number]: string } = {};
			model.paramValues.forEach((paramValue) => {
				initialEditedValues[paramValue.paramId] = paramValue.value;
			});
			return initialEditedValues;
		}
	);

	const handleParamChange = (paramId: number, value: string) => {
		setEditedValues((prevState) => ({
			...prevState,
			[paramId]: value,
		}));
	};

	const getModel = () => {
		const paramValues: ParamValue[] = Object.entries(editedValues).map(
			([paramId, value]) => ({
				paramId: parseInt(paramId),
				value,
			})
		);
		return { paramValues };
	};

	const handleEnterKeyDown = (
		paramId: number,
		value: string,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === "Enter") {
			console.log(getModel().paramValues);
		}
	};

	return (
		<div>
			{params.map((param) => (
				<div key={param.id}>
					<label>{param.name}</label>
					<input
						type="text"
						value={editedValues[param.id] || ""}
						onChange={(e) => handleParamChange(param.id, e.target.value)}
						onKeyDown={(e) =>
							handleEnterKeyDown(param.id, editedValues[param.id] || "", e)
						}
					/>
				</div>
			))}
		</div>
	);
};

export default ParamEditor;

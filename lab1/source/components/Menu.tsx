import React, { FC } from "react";
import SelectInput from "ink-select-input";

export const Menu: FC<{ handleSelectMenuItem: (a: string) => void }> = ({
	handleSelectMenuItem,
}) => {
	const handleSelect = (item: any) => {
		handleSelectMenuItem(item.value);
	};
	const menuItems = [
		{
			label: "Zigzag",
			value: "zigzag",
		},
		{
			label: "Zigzag1",
			value: "zigzag1",
		},
	];

	return <SelectInput items={menuItems} onSelect={handleSelect} />;
};

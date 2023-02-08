import React, { useState } from "react";
import { Menu } from "./Menu";
import { ZigZag } from "./ZigZag";

export const App = () => {
	const [selectedItem, setSelectedItem] = useState<string>();

	if (selectedItem === "zigzag") {
		return <ZigZag />;
	}

	return <Menu handleSelectMenuItem={setSelectedItem} />;
};

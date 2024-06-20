const a = [
	{
		id: 1,
		name: "Zahit",
		age: 37,
	},
	{
		id: 2,
		name: "Mical",
		age: 34,
	},
	{
		id: 3,
		name: "Cyn",
		age: 34,
	},
];

const b = [
	{
		id: 45,
		name: "ZAHIT",
		street: "Farlete 407",
	},
	{
		id: 45,
		name: "zAhIt",
		street: "Oriente 35",
	},
	{
		id: 90,
		name: "mical",
		street: "Farlete 407 puerta de hierro",
	},
	{
		id: 23,
		name: "Quetzaly",
		street: "Oriente 35",
	},
];

function innerJoin(leftArray, rightArray, key) {
	const leftMaped = [];
	leftArray.forEach(leftItem => (leftMaped[leftItem[key].toLowerCase()] = leftItem));

	const result = rightArray.reduce((acc, rightItem) => {
		const leftValues = leftMaped[rightItem[key].toLowerCase()];
		if (leftValues !== undefined)
			acc.push({
				...leftValues,
				...rightItem,
				name: leftValues.name.toLowerCase(),
			});
		return acc; //return the current array for the next iteration
	}, []);

	console.log(result);
}

innerJoin(a, b, "name");

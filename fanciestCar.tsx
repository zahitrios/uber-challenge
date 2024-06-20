const carTypes = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
const budget = 20;

type getCarRequest = {
	l: number;
	fares: number[];
};

function slowSolution({ l, fares }: getCarRequest): string | null {
	const allowedCarTypes = carTypes.reduce((acc: string[], carType: string, index: number) => {
		if (budget >= l * fares[index]) acc.push(carType);
		return acc;
	}, []);

	return allowedCarTypes.pop() ?? null;
}

function fastSolution({ l, fares }: getCarRequest): string | null {
	let allowedCarType: string | null = null;

	carTypes.forEach((carType: string, index: number) => {
		if (budget >= l * fares[index]) allowedCarType = carType;
		else return;
	}, []);
	return allowedCarType;
}

function fasterSolution({ l, fares }: getCarRequest): string | null {
	let allowedCarType: string | null = null;
	for (let index = 0; budget >= l * fares[index]; index++) allowedCarType = carTypes[index];
	return allowedCarType;
}

let a = performance.now();
let fanciestCar = slowSolution({
	l: 30,
	fares: [0.3, 0.5, 0.7, 1, 1.3],
});
let b = performance.now();
console.log(`${fanciestCar} -> Slow solution execution time: ${b - a} ms.`);

a = performance.now();
fanciestCar = fastSolution({
	l: 30,
	fares: [0.3, 0.5, 0.7, 1, 1.3],
});
b = performance.now();
console.log(`${fanciestCar} -> Faster solution execution time: ${b - a} ms.`);

a = performance.now();
fanciestCar = fasterSolution({
	l: 30,
	fares: [0.3, 0.5, 0.7, 1, 1.3],
});
b = performance.now();
console.log(`${fanciestCar} -> Fastest solution execution time: ${b - a} ms.`);

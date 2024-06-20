type getCarRequest = {
	l: number;
	fares: number[];
};

function getCar({ l, fares }: getCarRequest): string {}

const a = performance.now();
console.log(
	getCar({
		l: 30,
		fares: [0.3, 0.5, 0.7, 1, 1.3],
	})
);
const b = performance.now();
console.log(`Execution time: ${b - a} ms.`);

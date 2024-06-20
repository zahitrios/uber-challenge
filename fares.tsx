/**
 * You are one of the engineers buildng the Fare Estimator, so knowing cost per minute
 * and cost per mile for each car typa, as well as ride distance and ride time,
 * return the fare estaimates for all car types.
 *
 * Execution time limie: 4seconds
 */
type fareRequest = {
	ride_time: number;
	ride_distance: number;
	cost_per_minute: number[];
	cost_per_mile: number[];
};

//(cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)
function getFares({
	ride_time,
	ride_distance,
	cost_per_minute,
	cost_per_mile,
}: fareRequest): number[] {
	const fares = cost_per_minute.map(
		(costMinute: number, index: number) =>
			(costMinute * 100 * ride_time + cost_per_mile[index] * 100 * ride_distance) / 100 //100 is used to handle the JS binary floating point
	);
	return fares;
}

const aT = performance.now();
const fares = getFares({
	ride_time: 30,
	ride_distance: 7,
	cost_per_minute: [0.2, 0.35, 0.4, 0.45],
	cost_per_mile: [1.1, 1.8, 2.3, 3.5],
});
const bT = performance.now();
console.log(fares);
console.log(`Execution time: ${bT - aT} ms.`);

//(cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)
function getFares(_a) {
    var ride_time = _a.ride_time, ride_distance = _a.ride_distance, cost_per_minute = _a.cost_per_minute, cost_per_mile = _a.cost_per_mile;
    var fares = cost_per_minute.map(function (costMinute, index) {
        return (costMinute * 100 * ride_time + cost_per_mile[index] * 100 * ride_distance) / 100;
    });
    return { fares: fares };
}
var a = performance.now();
var fares = getFares({
    ride_time: 30,
    ride_distance: 7,
    cost_per_minute: [0.2, 0.35, 0.4, 0.45],
    cost_per_mile: [1.1, 1.8, 2.3, 3.5],
});
var b = performance.now();
console.log(fares);
console.log("Execution time: ".concat(b - a, " ms."));

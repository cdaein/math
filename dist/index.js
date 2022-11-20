"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapToArray = exports.snapBy = exports.roundF = exports.reflect = exports.polarToCartesian = exports.modIncl = exports.modF = exports.mod = exports.lerp = exports.mix = exports.map = exports.floorF = exports.distSq = exports.dist = exports.constrain = exports.clamp = exports.TWO_PI = exports.PI = void 0;
// frequently used constants
exports.PI = Math.PI;
exports.TWO_PI = Math.PI * 2;
/**
 * clamp values between min and max (=constrain)
 * @param val
 * @param min
 * @param max
 * @returns
 */
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
exports.clamp = clamp;
/**
 * alias for clamp()
 */
exports.constrain = exports.clamp;
/**
 *
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
const dist = (x1, y1, x2, y2) => {
    return Math.sqrt((0, exports.distSq)(x1, y1, x2, y2));
};
exports.dist = dist;
/**
 * returns squared distance
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
const distSq = (x1, y1, x2, y2) => {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
};
exports.distSq = distSq;
/**
 *
 * @param n number
 * @param amp how far it can be away from input
 * @returns
 */
// export const shakeNum = (n: number, amp: number): number =>
//   n + map(Math.random(), 0, 1, -1, 1) * amp;
/**
 * drop decimals after digit. good for array index (floor)
 * @param n float number
 * @param digit how many decimal digits to keep
 * @returns
 */
const floorF = (n, digit) => {
    n = parseFloat(n.toFixed(digit));
    const factor = Math.pow(10, digit);
    return Math.floor(n * factor) / factor;
};
exports.floorF = floorF;
/**
 *
 * @param val
 * @param s
 * @param e
 * @param ns
 * @param ne
 * @returns
 */
const map = (val, s, e, ns, ne) => ns + ((val - s) / (e - s)) * (ne - ns);
exports.map = map;
/**
 * linear interpolation (=lerp)
 * @param a start value
 * @param b stop value
 * @param t amount 0..1
 * @returns
 */
const mix = (a, b, t) => a * (1 - t) + b * t;
exports.mix = mix;
/**
 * alias for mix()
 */
exports.lerp = exports.mix;
/**
 * NOTE: it may not be accurate with non-integer numbers.
 * @param n
 * @param max
 * @returns
 */
const mod = (n, max) => {
    return ((n % max) + max) % max;
};
exports.mod = mod;
/**
 * modulo(%) for float numbers up to precision digit.
 * @param n original number
 * @param max modulo
 * @param precision float precision digits. defaults to 6
 * @returns
 */
const modF = (n, max, precision = 6) => {
    const mlt = Math.pow(10, precision); // multiplier to make it integer
    const ni = Math.floor(n * mlt);
    const maxi = Math.floor(max * mlt);
    return (((ni % maxi) + maxi) % maxi) / mlt;
};
exports.modF = modF;
// export const floorF = (n: number, digit: number): number => {
//   n = parseFloat(n.toFixed(digit));
//   const factor = Math.pow(10, digit);
//   return Math.floor(n * factor) / factor;
// };
/**
 * inclusive modulo. modIncl(1, 3) will include 3.
 * can handle negative number and returns positive value
 * @param n number to update
 * @param max number to divide with
 * @returns number from modulo op. within range 0..max (inclusive)
 */
const modIncl = (n, max) => {
    if (max < 0)
        throw new Error("modIncl(): 2nd arg must be >= 0");
    return n === max ? max : ((n % max) + max) % max;
};
exports.modIncl = modIncl;
/**
 * converts polar coordinate to cartesian. to update center, result.map((v,i)=> v + center[i])
 * @param radius
 * @param angle in radians
 * @returns
 */
const polarToCartesian = (radius, angle) => {
    return [Math.cos(angle) * radius, Math.sin(angle) * radius];
};
exports.polarToCartesian = polarToCartesian;
/**
 * reflect a scalar value along axis. good for creating reflected version.
 * @param num number to flip
 * @param axis value to reflect against
 * @returns
 */
const reflect = (num, axis) => {
    return axis - (num - axis);
};
exports.reflect = reflect;
/**
 * good for drawing shapes to include the maximum value (round up)
 * @param n float number
 * @param digit how many float digits to keep
 * @returns
 */
const roundF = (n, digit) => {
    const factor = Math.pow(10, digit);
    return Math.round(n * factor) / factor;
};
exports.roundF = roundF;
/**
 * snap value to increment
 * @param n original number
 * @param inc increment to snap to.
 * @returns
 *
 */
const snapBy = (n, inc) => {
    return Math.round(n / inc) * inc;
};
exports.snapBy = snapBy;
/**
 * snap to a value in array. whatever is closest to.
 * @param n original number
 * @param snapArr values to snap to
 * @returns {number | undefined}
 */
const snapToArray = (n, snapArr) => {
    snapArr.sort((a, b) => a - b); // sort numbers in order
    if (n <= snapArr[0])
        return snapArr[0]; // if less than the smallest one
    else if (n >= snapArr[snapArr.length - 1])
        return snapArr[snapArr.length - 1]; // if greater than the largest num
    else {
        for (let i = 0; i < snapArr.length - 1; i++) {
            const prev = snapArr[i];
            const next = snapArr[i + 1];
            if (n > prev && n < next) {
                return Math.abs(n - next) <= Math.abs(n - prev) ? next : prev;
            }
        }
    }
    throw new Error("snapToArray(): did not meet any condition");
};
exports.snapToArray = snapToArray;
//# sourceMappingURL=index.js.map
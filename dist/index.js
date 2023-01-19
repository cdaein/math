// frequently used constants
export const PI = Math.PI;
export const TWO_PI = Math.PI * 2;
/**
 * clamp values between min and max (=constrain)
 * @param val
 * @param min
 * @param max
 * @returns
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
/**
 * alias for clamp()
 */
export const constrain = clamp;
/**
 *
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export const dist = (x1, y1, x2, y2) => {
    return Math.sqrt(distSq(x1, y1, x2, y2));
};
/**
 * returns squared distance
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export const distSq = (x1, y1, x2, y2) => {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
};
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
export const floorF = (n, digit) => {
    n = parseFloat(n.toFixed(digit));
    const factor = Math.pow(10, digit);
    return Math.floor(n * factor) / factor;
};
/**
 *
 * @param val
 * @param s
 * @param e
 * @param ns
 * @param ne
 * @returns
 */
export const map = (val, s, e, ns, ne) => ns + ((val - s) / (e - s)) * (ne - ns);
/**
 * linear interpolation (=lerp)
 * @param a start value
 * @param b stop value
 * @param t amount 0..1
 * @returns
 */
export const mix = (a, b, t) => a * (1 - t) + b * t;
/**
 * alias for mix()
 */
export const lerp = mix;
/**
 * NOTE: it may not be accurate with non-integer numbers.
 * @param n
 * @param max
 * @returns
 */
export const mod = (n, max) => {
    return ((n % max) + max) % max;
};
/**
 * modulo(%) for float numbers up to precision digit.
 * @param n original number
 * @param max modulo
 * @param precision float precision digits. defaults to 6
 * @returns
 */
export const modF = (n, max, precision = 6) => {
    const mlt = Math.pow(10, precision); // multiplier to make it integer
    const ni = Math.floor(n * mlt);
    const maxi = Math.floor(max * mlt);
    return (((ni % maxi) + maxi) % maxi) / mlt;
};
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
export const modIncl = (n, max) => {
    if (max < 0)
        throw new Error("modIncl(): 2nd arg must be >= 0");
    return n === max ? max : ((n % max) + max) % max;
};
/**
 * converts polar coordinate to cartesian. to update center, result.map((v,i)=> v + center[i])
 * @param radius
 * @param angle in radians
 * @returns
 */
export const polarToCartesian = (radius, angle) => {
    return [Math.cos(angle) * radius, Math.sin(angle) * radius];
};
/**
 * reflect a scalar value along axis. good for creating reflected version.
 * @param num number to flip
 * @param axis value to reflect against
 * @returns
 */
export const reflect = (num, axis) => {
    return axis - (num - axis);
};
/**
 * good for drawing shapes to include the maximum value (round up)
 * @param n float number
 * @param digit how many float digits to keep
 * @returns
 */
export const roundF = (n, digit) => {
    const factor = Math.pow(10, digit);
    return Math.round(n * factor) / factor;
};
/**
 * snap value to increment
 * @param n original number
 * @param inc increment to snap to.
 * @returns
 *
 */
export const snapBy = (n, inc) => {
    return Math.round(n / inc) * inc;
};
/**
 * snap to a value in array. whatever is closest to.
 * @param n original number
 * @param snapArr values to snap to
 * @returns {number | undefined}
 */
export const snapToArray = (n, snapArr) => {
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
//# sourceMappingURL=index.js.map
/**
 * clamp values between min and max (=constrain)
 * @param val
 * @param min
 * @param max
 * @returns
 */
export declare const clamp: (val: number, min: number, max: number) => number;
/**
 * alias for clamp()
 */
export declare const constrain: (val: number, min: number, max: number) => number;
/**
 *
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export declare const dist: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 * returns squared distance
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export declare const distSq: (x1: number, y1: number, x2: number, y2: number) => number;
/**
 *
 * @param n number
 * @param amp how far it can be away from input
 * @returns
 */
/**
 * drop decimals after digit. good for array index (floor)
 * @param n float number
 * @param digit how many decimal digits to keep
 * @returns
 */
export declare const floorF: (n: number, digit: number) => number;
/**
 *
 * @param val
 * @param s
 * @param e
 * @param ns
 * @param ne
 * @returns
 */
export declare const map: (val: number, s: number, e: number, ns: number, ne: number) => number;
/**
 * linear interpolation (=lerp)
 * @param a start value
 * @param b stop value
 * @param t amount 0..1
 * @returns
 */
export declare const mix: (a: number, b: number, t: number) => number;
/**
 * alias for mix()
 */
export declare const lerp: (a: number, b: number, t: number) => number;
/**
 * NOTE: it may not be accurate with non-integer numbers.
 * @param n
 * @param max
 * @returns
 */
export declare const mod: (n: number, max: number) => number;
/**
 * modulo(%) for float numbers up to precision digit.
 * @param n original number
 * @param max modulo
 * @param precision float precision digits. defaults to 6
 * @returns
 */
export declare const modF: (n: number, max: number, precision?: number) => number;
/**
 * inclusive modulo. modIncl(1, 3) will include 3.
 * can handle negative number and returns positive value
 * @param n number to update
 * @param max number to divide with
 * @returns number from modulo op. within range 0..max (inclusive)
 */
export declare const modIncl: (n: number, max: number) => number;
/**
 * converts polar coordinate to cartesian. to update center, result.map((v,i)=> v + center[i])
 * @param radius
 * @param angle in radians
 * @returns
 */
export declare const polarToCartesian: (radius: number, angle: number) => number[];
/**
 * reflect a scalar value along axis. good for creating reflected version.
 * @param num number to flip
 * @param axis value to reflect against
 * @returns
 */
export declare const reflect: (num: number, axis: number) => number;
/**
 * good for drawing shapes to include the maximum value (round up)
 * @param n float number
 * @param digit how many float digits to keep
 * @returns
 */
export declare const roundF: (n: number, digit: number) => number;
/**
 * snap value to increment
 * @param n original number
 * @param inc increment to snap to.
 * @returns
 *
 */
export declare const snapBy: (n: number, inc: number) => number;
/**
 * snap to a value in array. whatever is closest to.
 * @param n original number
 * @param snapArr values to snap to
 * @returns {number | undefined}
 */
export declare const snapToArray: (n: number, snapArr: number[]) => number;
//# sourceMappingURL=index.d.ts.map
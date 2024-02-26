// frequently used constants
export const PI = Math.PI;
export const TWO_PI = Math.PI * 2;

/**
 * Clamp values between min and max (= `constrain`)
 * @param val
 * @param min
 * @param max
 * @returns
 */
export const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

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
export const dist = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(distSq(x1, y1, x2, y2));
};

/**
 * Get squared distance between two points
 *
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export const distSq = (x1: number, y1: number, x2: number, y2: number) => {
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
 * Drop decimals after digit. Good for array index (floor)
 * @param n float number
 * @param digit how many decimal digits to keep
 * @returns
 */
export const floorF = (n: number, digit: number) => {
  n = parseFloat(n.toFixed(digit));
  const factor = Math.pow(10, digit);
  return Math.floor(n * factor) / factor;
};

/**
 * Map value from the original range to a new range
 *
 * @param val - value to transform
 * @param s - start value of original range
 * @param e - end value of original range
 * @param ns - start value of new range
 * @param ne - end value of new range
 * @returns
 */
export const map = (
  val: number,
  s: number,
  e: number,
  ns: number,
  ne: number,
) => ns + ((val - s) / (e - s)) * (ne - ns);

/**
 * Linear interpolation (= `lerp`)
 *
 * @param a - start value
 * @param b - stop value
 * @param t - amount `0..1`
 * @returns
 */
export const mix = (a: number, b: number, t: number) => a * (1 - t) + b * t;

/**
 * Alias for mix()
 */
export const lerp = mix;

/**
 * Can handle negative number and returns positive value
 * Use `modF()` for non-integer values.
 *
 * @example
 * mod(-1, 3) // returns 2
 *
 * @param n
 * @param max
 * @returns
 */
export const mod = (n: number, max: number): number => {
  return ((n % max) + max) % max;
};

/**
 * Modulo(%) for float numbers up to precision digit.
 *
 * @example
 * modF(1.2, 1, 6); // returns 0.2
 *
 * @param n original number
 * @param max modulo
 * @param precision float precision digits. defaults to 6
 * @returns
 */
export const modF = (n: number, max: number, precision = 6): number => {
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
 * Inclusive modulo. modIncl(1, 3) will include 3. This only works with positive `n`.
 * Can handle negative number and returns positive value
 *
 * @example
 * modIncl(3, 3) // returns 3
 * modIncl(-3, 3) // returns 0
 *
 * @param n number to update
 * @param max number to divide with
 * @returns number from modulo op. within range 0..max (inclusive)
 */
export const modIncl = (n: number, max: number): number => {
  if (max < 0) throw new Error("modIncl(): 2nd arg must be >= 0");
  return n === max ? max : ((n % max) + max) % max;
};

/**
 * Converts polar coordinate to cartesian. to update center, result.map((v,i)=> v + center[i])
 *
 * @param radius
 * @param angle - in radians
 * @returns
 */
export const polarToCartesian = (radius: number, angle: number) => {
  return [Math.cos(angle) * radius, Math.sin(angle) * radius];
};

/**
 * Reflect a scalar value along axis. good for creating reflected version.
 *
 * @example
 * reflect(3.2, 0); // -3.2
 *
 * @param num - number to flip
 * @param axis - value to reflect against
 * @returns
 */
export const reflect = (num: number, axis: number) => {
  return axis - (num - axis);
};

/**
 * Good for drawing shapes to include the maximum value (round up)
 *
 * @param n float number
 * @param digit how many float digits to keep
 * @returns
 */
export const roundF = (n: number, digit: number) => {
  const factor = Math.pow(10, digit);
  return Math.round(n * factor) / factor;
};

/**
 * Snap value to increment
 *
 * @param n - original number
 * @param inc - increment to snap to.
 * @returns
 *
 */
export const snapBy = (n: number, inc: number) => {
  return Math.round(n / inc) * inc;
};

/**
 * Snap to a value in array. whatever is closest to.
 *
 * @example
 * snapToArray(3, [1.4, 1.5, 4.08]) // 4.08
 * snapToArray(-100, [-10, 2, 40]) // -10
 *
 * @param n - original number
 * @param snapArr - values to snap to
 * @returns
 */
export const snapToArray = (n: number, snapArr: number[]) => {
  snapArr.sort((a, b) => a - b); // sort numbers in order
  if (n <= snapArr[0])
    return snapArr[0]; // if less than the smallest
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
  // REVIEW: should remove it
  throw new Error("could not snap to any value");
};

/**
 * Map local `t` (0..1) based on which side of global `T` it is on. Values less than `T` is mapped to 1 and great than is 0.
 * (Think of it as `T` traveling across 1D space and transform `t` depending on which side it is on.)
 *
 * `radius` creates a buffer around `T` and linearly interpolate `t` values if it falls within the range. Any value outside the range is either 1 or 0.
 * Front is 0 (haven't traveled yet) and back is 1 (traveled already)
 *
 * It only concerns with mapping local `t` to 0..1 range within the buffer.
 * Any extra transformation can be done by transforming this value again instead of trying to transform `t` or `T` (see example below).
 *
 * from [230305-1-anim-t-overlap](2023/3-March/230305-1-anim-t-overlap) sketch
 *
 * @example
 * ```
 * const keys = new Keyframes();
 * // define how to transform (again) transformed local t to desired values. Can also apply easing as needed.
 * // control only the normalized range by keeping both ends at 0.
 * keys.add({ time: 0, value: 0 });
 * keys.add({ time: 0.5, value: 1 });
 * keys.add({ time: 1.0, value: 0 });
 *
 * const num = 20;
 * for (let i = 0; i <= num; i++) {
 *   // local t is lerped in 0..1 within buffer as playhead tranvels forward.
 *   let t = mapRange(i / num, 0.2, 0.2, playhead);
 *   // map t (0..1) to desired range (0 -> 1 -> 0)
 *   const h = keys.value(t);
 *   drawRect(
 *     ctx,
 *     [(i / num) * width, height / 2],
 *     [width / num, (h * height) / 2],
 *     "center",
 *   );
 *   ctx.fillStyle = `black`;
 *   ctx.fill();
 * }
 * ```
 *
 * @param t - Normalized local t 0..1. This is used to sample mapped value. It determines the density or resolution of values.
 * @param radius - Buffer radius on each side. To have different radius on each direction, pass `[back, front]`. (positive float value)
 * @param T - global T 0..1
 * @returns localized t value between 0..1
 */
export function mapLocalRange(
  t: number,
  radius: number | [number, number],
  T: number,
) {
  const [b, f] = Array.isArray(radius) ? radius : [radius, radius];
  if (f + b > 1.0) throw new Error("a + b must be <= 1");
  const fTip = T + f;
  const bTip = T - b;

  // front is greater than max 1.0
  // special case for when the range over 1 wraps to start.
  if (fTip > 1 && t < fTip - 1) {
    return map(t + 1, T, fTip, 0.5, 0);
  }

  // behind is less than min 0.0
  // special case when the negative range wraps to end.
  if (bTip < 0 && t > 1.0 + bTip) {
    return map(t, bTip + 1, T + 1, 1, 0.5);
  }

  // REVIEW: if f & b are 0, out becomes Infinity, -Infinity or NaN.
  // this is expected of how map() works, but it can happen unintentionally while animating,
  // find a way to handle it.

  // f & b are within 0..1, simple map will do.
  // map left side of T and right side of T separately
  // for when f & b are different values.
  if (t < T) {
    return map(t, bTip, T, 1, 0.5);
  } else {
    return map(t, T, fTip, 0.5, 0.0);
  }
}

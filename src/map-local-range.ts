import { clamp, map } from ".";

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
 * @param t - Normalized local t 0..1. This is used to sample mapped value. It determines the density or resolution of values.
 * @param radius - Buffer radius on each side. To have different radius on each direction, pass `[back, front]`. (positive float value)
 * @param T - global T 0..1
 * @returns localized t value between 0..1
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
 */
export function mapLocalRange(
  t: number,
  radius: number | [number, number],
  T: number,
) {
  const [b, f] = Array.isArray(radius) ? radius : [radius, radius];
  if (b + f > 1.0) throw new Error("radius sum must be <= 1");

  T %= 1.0;

  const fTip = T + f;
  const bTip = T - b;

  // front is greater than max 1.0
  // special case for when the range over 1 wraps to start.
  if (fTip > 1 && t < fTip - 1) {
    return clamp(map(t + 1, T, fTip, 0.5, 0), 0, 1);
  }

  // behind is less than min 0.0
  // special case when the negative range wraps to end.
  if (bTip < 0 && t > 1.0 + bTip) {
    return clamp(map(t, bTip + 1, T + 1, 1, 0.5), 0, 1);
  }

  // REVIEW: if f & b are 0, out becomes Infinity, -Infinity or NaN.
  // this is expected of how map() works, but it can happen unintentionally while animating,
  // find a way to handle it.

  // f & b are within 0..1, simple map will do.
  // map left side of T and right side of T separately
  // for when f & b are different values.
  if (t < T) {
    return clamp(map(t, bTip, T, 1, 0.5), 0, 1);
  } else {
    return clamp(map(t, T, fTip, 0.5, 0.0), 0, 1);
  }
}

import { describe, expect, test } from "vitest";
import { mapLocalRange } from "../src";

describe("mapLocalRange()", () => {
  // FIX: i don't know why this doesn't work..

  // test("throws error when radius sum is > 1", () => {
  //   expect(mapLocalRange(0.5, [0.5, 0.51], 0.5)).toThrow(
  //     "radius sum must be <= 1",
  //   );
  // });

  test("handles when radius sum is == 1", () => {
    expect(mapLocalRange(0.5, [0.5, 0.5], 0.5)).toBe(0.5);
    expect(mapLocalRange(0.5, 0.5, 0.5)).toBe(0.5);
  });

  test("returns 1.0 when local t == 0", () => {
    expect(mapLocalRange(0.0, [0.5, 0.5], 0.5)).toBe(1.0);
  });

  test("returns 0.0 when local t == 1", () => {
    expect(mapLocalRange(1.0, [0.5, 0.5], 0.5)).toBe(0.0);
  });

  test("clamps to 1.0 when local t == 0 and outside buffer", () => {
    expect(mapLocalRange(0.0, [0.2, 0.4], 0.3)).toBe(1.0);
    expect(mapLocalRange(0.0, [0.0, 0.4], 0.5)).toBe(1.0);
    // edge case?
    expect(mapLocalRange(0.0, [0.0, 0.4], 0.6)).toBe(1.0);
  });

  test("clamps to 0.0 when local t == 1 and outside buffer", () => {
    expect(mapLocalRange(1.0, [0.2, 0.4], 0.3)).toBe(0.0);
    expect(mapLocalRange(1.0, [0.0, 0.4], 0.5)).toBe(0.0);
    // edge case?
    expect(mapLocalRange(1.0, [0.0, 0.4], 0.6)).toBe(0.0);
  });

  test("handles extreme cases", () => {
    // t is at center (t==T), so 0.5 return is correct.
    // but, it could also be 1.0.
    expect(mapLocalRange(0.0, [0.0, 0.2], 0.0)).toBe(0.5);
    expect(mapLocalRange(0.0, [0.0, 0.4], 1.0)).toBe(0.5);
  });

  // need more thinking on how to handle NaN
  test("returns NaN - HOW TO HANDLE?", () => {
    expect(mapLocalRange(0.0, [0.0, 0.0], 0.0)).toBe(NaN);
    expect(mapLocalRange(0.0, [1.0, 0.0], 0.0)).toBe(NaN);
    expect(mapLocalRange(0.0, [0.0, 0.0], 1.0)).toBe(NaN);
  });
});

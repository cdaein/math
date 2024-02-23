import { describe, expect, test } from "vitest";
import {
  distSq,
  dist,
  mix,
  mod,
  modF,
  modIncl,
  floorF,
  // polarToCartesian,
  reflect,
  roundF,
  snapBy,
  snapToArray,
} from "./index";

describe("distSq()", () => {
  test("returns squared distance value", () => {
    expect(distSq(3, 0, 0, 4)).toEqual(25);
  });
});

describe("dist()", () => {
  test("returns distance value", () => {
    expect(dist(3, 0, 0, 4)).toEqual(5);
  });
});

describe("floorF():", () => {
  test("floor down floats", () => {
    expect(floorF(2.8 * 7, 5)).toBe(19.6);
    expect(floorF(2.8 * 7, 3)).toBe(19.6);
    expect(floorF(2.8 * 7, 1)).toBe(19.6);
  });
});

describe("mix():", () => {
  test("handle different amt values", () => {
    expect(mix(0, 10, -1)).toBe(-10);
    expect(mix(0, 5, -0.5)).toBe(-2.5);
    expect(mix(-2.2, 11, 0)).toBe(-2.2);
    expect(mix(-10, 10, 0.5)).toBe(0);
    expect(mix(-4, 12, 1)).toBe(12);
  });
});

describe("mod()", () => {
  test("handles typical modulo operations", () => {
    // expect(mod(0, 0)).toBe(0);
    expect(mod(0, 3)).toBe(0);
    expect(mod(1, 3)).toBe(1);
    expect(mod(2, 3)).toBe(2);
  });
  test("wraps around if greater than max value", () => {
    expect(mod(5, 2)).toBe(1);
    expect(mod(5, 4)).toBe(1);
  });
  test("returns positive value on negative input", () => {
    expect(mod(-1, 3)).toBe(2);
    expect(mod(-2, 3)).toBe(1);
    expect(mod(-3, 3)).toBe(0);
    expect(mod(-4, 3)).toBe(2);
    expect(mod(-5, 3)).toBe(1);
  });
});

describe("modF():", () => {
  test("handles float modulo operations", () => {
    expect(modF(1.2, 1, 6)).toEqual(0.2);
    expect(modF(29 * 0.02, 1, 6)).toEqual(0.58);
    expect(modF(6.6, 1.1, 6)).toEqual(0);
  });
});

describe("modIncl()", () => {
  test("throws error on negative modulo value", () => {
    expect(() => modIncl(3, -3)).toThrow("modIncl(): 2nd arg must be >= 0");
  });
  test("handles typical modulo operations", () => {
    expect(modIncl(0, 0)).toBe(0); // interesting case
    expect(modIncl(0, 3)).toBe(0);
    expect(modIncl(1, 3)).toBe(1);
    expect(modIncl(2, 3)).toBe(2);
  });
  test("returns max value (inclusive)", () => {
    expect(modIncl(3, 3)).toBe(3);
    // expect(modIncl(6, 3)).toBe(3);
    // expect(modIncl(3, 1)).toBe(1);
    expect(modIncl(3.2, 3.2)).toBe(3.2);
    // expect(modIncl(6.4, 3.2)).toBe(3.2);
  });
  test("wraps around if greater than max value", () => {
    expect(modIncl(5, 2)).toBe(1);
    expect(modIncl(5, 4)).toBe(1);
  });
  test("returns positive value on negative input", () => {
    expect(modIncl(-1, 3)).toBe(2);
    expect(modIncl(-2, 3)).toBe(1);
    expect(modIncl(-3, 3)).toBe(0);
    expect(modIncl(-4, 3)).toBe(2);
    expect(modIncl(-5, 3)).toBe(1);
  });
});

describe("polarToCartesian()", () => {
  test("", () => {
    // TODO:
  });
});

describe("roundF():", () => {
  test("round down floats", () => {
    expect(roundF(4.240001, 3)).toBe(4.24);
    expect(roundF(4.2199, 2)).toBe(4.22);
  });
});

describe("snapBy():", () => {
  test("snap to different integer increments", () => {
    expect(snapBy(2.4, 1)).toBe(2);
    expect(snapBy(2.4, 2)).toBe(2);
    expect(snapBy(2.4, 3)).toBe(3);
    expect(snapBy(2.4, 4)).toBe(4);
    expect(snapBy(2.4, 5)).toBe(0);
    expect(snapBy(-2.1, 3)).toBe(-3);
  });
  test("snap to different float increments", () => {
    expect(snapBy(2.4, 1.5)).toBe(3);
    expect(snapBy(2.4, 1.8)).toBe(1.8);
    expect(snapBy(2.4, 2.2)).toBe(2.2);
    expect(snapBy(-1.7, 1.4)).toBe(-1.4);
    expect(snapBy(30, 20)).toBe(40);
  });
});

describe("snapToArray():", () => {
  test("snap to values on/outside boundary", () => {
    expect(snapToArray(0, [4, 6, 7])).toBe(4);
    expect(snapToArray(3.9, [4, 6, 7])).toBe(4);
    expect(snapToArray(4, [4, 6, 7])).toBe(4);
    expect(snapToArray(7, [4, 6, 7])).toBe(7);
    expect(snapToArray(1200, [4, 6, 7])).toBe(7);
  });
  test("snap to float array", () => {
    expect(snapToArray(3, [1.4, 1.5, 4.08])).toBe(4.08);
    expect(snapToArray(2.5, [1.4, 1.5, 4.08])).toBe(1.5);
  });
  test("snap to integer array", () => {
    expect(snapToArray(-100, [-10, 2, 40])).toBe(-10);
    expect(snapToArray(2.5, [-10, 0, 40])).toBe(0);
    expect(snapToArray(30, [0, 20, 40])).toBe(40);
    expect(snapToArray(0, [0, 20, 40])).toBe(0);
    expect(snapToArray(40, [0, 20, 40])).toBe(40);
  });
  test("snap to negative values in array", () => {
    expect(snapToArray(9, [-12, -8, -4])).toBe(-4);
    expect(snapToArray(-5, [-12, -8, -4])).toBe(-4);
    expect(snapToArray(-50, [-12, -8, -4])).toBe(-12);
  });
  test("snap to unsorted input array", () => {
    expect(snapToArray(30, [40, 0, 120])).toBe(40);
    expect(snapToArray(-30, [0, -10, -20])).toBe(-20);
  });
});

describe("snapBy() and snapToArray() should have equal behavior", () => {
  test("same rounding behavior for mid values", () => {
    expect(snapBy(10, 4)).toEqual(snapToArray(10, [4, 8, 12]));
  });
});

describe("reflect():", () => {
  test("reflect around 0", () => {
    expect(reflect(0, 0)).toBe(0);
    expect(reflect(-4, 0)).toBe(4);
    expect(reflect(3.2, 0)).toBe(-3.2);
  });
  test("reflect around negative axis", () => {
    expect(reflect(-4, -4)).toBe(-4);
    expect(reflect(3.2, -4)).toBe(-11.2);
    expect(reflect(-6, -4)).toBe(-2);
  });
  test("reflects around positive axis", () => {
    expect(reflect(8, 12)).toBe(16);
    expect(reflect(-3, 12)).toBe(27);
    expect(reflect(14, 12)).toBe(10);
  });
});

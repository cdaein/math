# math utilities

## Installation

```sh
npm i @daeinc/math
```

then,

```js
import { modF, ... } from "@daeinc/math"
```

## Functions

### clamp

```ts
const clamp: (val: number, min: number, max: number) => number;
```

Clamp values between min and max (=constrain)

### constrain

```ts
const constrain: (val: number, min: number, max: number) => number;
```

Alias for `clamp()`

### dist

```ts
const dist: (x1: number, y1: number, x2: number, y2: number) => number;
```

Compute distance between two points

### distSq

```ts
const distSq: (x1: number, y1: number, x2: number, y2: number) => number;
```

Compute squared distance between two points. There's another version in `@daeinc/geom` that takes `Pt: number[]` type as arguments.

### floorF

```ts
const floorF: (n: number, digit: number) => number;
```

Floor a float value to the specified digit.

### map

```ts
const map: (
  val: number,
  s: number,
  e: number,
  ns: number,
  ne: number
) => number;
```

Map a value from one range to another.

### mix

```ts
const mix: (a: number, b: number, t: number) => number;
```

Linear interpolation (=lerp)

### lerp

```ts
const lerp: (a: number, b: number, t: number) => number;
```

Alias for `mix()`

### mod

```ts
const mod: (n: number, max: number) => number;
```

Modular operation

### modF

```ts
const modF: (n: number, max: number, precision?: number) => number;
```

Modulo(%) operation for float numbers up to precision digit.

### modIncl

```ts
const modIncl: (n: number, max: number) => number;
```

Inclusive modulo operation. `modIncl(1, 3)` will include `3`. It can handle negative number and returns positive value

### polarToCartesian

```ts
const polarToCartesian: (radius: number, angle: number) => number[];
```

Converts polar coodrinate to cartesian coordinate. To use a different center point than the default `[0, 0]`, do something like this:

```ts
result.map((v, i) => v + center[i]);
```

### reflect

```ts
const reflect: (num: number, axis: number) => number;
```

Rreflect a scalar value along axis. If you want to reflect a point in 2d space, you can use [`reflectPoint()`](https://github.com/cdaein/geom#reflectpoint) from [`@daeinc/geom`](https://github.com/cdaein/geom).

### roundF

```ts
const roundF: (n: number, digit: number) => number;
```

Round a float value. Good for drawing shapes to include the maximum value (round up)

### snapBy

```ts
const snapBy: (n: number, inc: number) => number;
```

Snap value to increment using `Math.round()`.

### snapToArray

```ts
const snapToArray: (n: number, snapArr: number[]) => number;
```

Snap to a closest value in an array.

## To do

- add more tests

## License

MIT

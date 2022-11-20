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

### constrain

```ts
const constrain: (val: number, min: number, max: number) => number;
```

### dist

```ts
const dist: (x1: number, y1: number, x2: number, y2: number) => number;
```

### distSq

```ts
const distSq: (x1: number, y1: number, x2: number, y2: number) => number;
```

There's another version in `@daeinc/geom` that takes `Pt: number[]` type as arguments.

### floorF

```ts
const floorF: (n: number, digit: number) => number;
```

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

### mix

```ts
const mix: (a: number, b: number, t: number) => number;
```

### lerp

```ts
const lerp: (a: number, b: number, t: number) => number;
```

### mod

```ts
const mod: (n: number, max: number) => number;
```

### modF

```ts
const modF: (n: number, max: number, precision?: number) => number;
```

### modIncl

```ts
const modIncl: (n: number, max: number) => number;
```

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

### roundF

```ts
const roundF: (n: number, digit: number) => number;
```

### snapBy

```ts
const snapBy: (n: number, inc: number) => number;
```

### snapToArray

```ts
const snapToArray: (n: number, snapArr: number[]) => number;
```

## To do

- add more tests

## License

MIT

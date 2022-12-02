export const multiply = (x: bigint, y: bigint): bigint => {
    if (x < 10 && y < 10) {
        return x * y;
    }

    const size = Math.max(x.toString().length, y.toString().length);

    const n = BigInt(Math.ceil(size / 2));
    const dec = 10n ** BigInt(n);

    const a = (x / dec);
    const b = x % dec;
    const c = y / dec;
    const d = y % dec;

    const ac = multiply(a, c);
    const bd = multiply(b, d);

    const adbc = multiply(a + b, c + d) - ac - bd;
    return (10n ** (2n * n)) * ac + (10n ** n) * adbc + bd;
}
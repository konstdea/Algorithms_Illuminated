const merge = (left: number[], right: number[]): number[] => {
    let leftCursor = 0;
    let rightCursor = 0;
    const result: number[] = [];

    for (let k = 0; k < left.length + right.length; k++) {
        const l = left[leftCursor];
        const r = right[rightCursor];

        switch (true) {
            case l && !r:
            case l < r: {
                result.push(l);
                leftCursor += 1;
                break
            }
            default: {
                result.push(r);
                rightCursor += 1;
            }
        }
    }
    return result;
}

export const sort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    }

    const left = sort(array.slice(0, array.length / 2));
    const right = sort(array.slice(array.length / 2));

    return merge(left, right);
}
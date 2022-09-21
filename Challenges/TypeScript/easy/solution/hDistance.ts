function HDistance(strArr: string[]) {
    let counter = 0;
    const first = strArr[0];
    const second = strArr[1];
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            counter++;
        }
    }

    return counter;
}

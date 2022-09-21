function FizzBuzz(num: number) {
    const result: Array<number | string> = [];
    for (let i = 1; i < num + 1; i++) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;
        const fizzBuzz = fizz && buzz;
        if (fizzBuzz) {
            result.push("FizzBuzz");
        } else if (!fizz && buzz) {
            result.push("Buzz");
        } else if (fizz && !buzz) {
            result.push("Fizz");
        } else {
            result.push(i);
        }
    }

    return result.join(" ");
}

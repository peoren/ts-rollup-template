const version = "0.0.8";
const obj = {
    a: 1
}

// sub function
export const sub = (a: number, b: number) => {
    return a - b;
};

export default () => {
    return `this version is ${version}${obj}`;
};

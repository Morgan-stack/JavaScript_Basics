const BRAND = 'test'

// Method 1 of exporting

// export const add = (a,b) => a + b;
// export const subtract = (a,b) => a - b;

export default BRAND;

// Method 2 of exporting
export {
    add as something,
    subtract 
}
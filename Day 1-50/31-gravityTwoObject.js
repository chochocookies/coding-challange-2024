// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

// input
// Two arrays are given :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 × 10−11 N⋅kg−2⋅m2

// 1 ft = 0.3048 m

// 1 lb = 0.453592 kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution

// const solution = (arr_val, arr_unit) => {
//     const G = 6.67e-11; // Gravitational constant in N·kg−2·m2

//     // Conversion factors
//     const massConversions = {
//         'kg': 1,
//         'g': 1e-3,
//         'mg': 1e-6,
//         'μg': 1e-9,
//         'lb': 0.453592
//     };

//     const distanceConversions = {
//         'm': 1,
//         'cm': 0.01,
//         'mm': 0.001,
//         'μm': 1e-6,
//         'ft': 0.3048
//     };

//     // Convert masses to kg
//     const mass1 = arr_val[0] * massConversions[arr_unit[0]];
//     const mass2 = arr_val[1] * massConversions[arr_unit[1]];
    
//     // Convert distance to meters
//     const distance = arr_val[2] * distanceConversions[arr_unit[2]];

//     // Calculate gravitational force
//     const force = (G * mass1 * mass2) / (distance * distance);

//     return force; // Return force in Newtons
// };

// // Example usage:
// const values = [5, 10, 2]; // Masses in kg and distance in m
// const units = ['kg', 'kg', 'm'];

// arrow func
const solution = ([m1, m2, r], [um1, um2, ud]) => {
    const G = 6.67e-11;
    const conversion = {kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592, m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048};
    return G * m1 * conversion[um1] * m2 * conversion[um2] / ( r * conversion[ud] ) ** 2 ;
}

console.log((solution([1000, 1000, 100], ["g", "kg", "m"]))); // Outputs the gravitational force in Newtons

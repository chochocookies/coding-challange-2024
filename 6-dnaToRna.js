// WPU CODING CHALLANGE
// DAY 6/365

// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         // if (dna[i] === 'T') {
//         //     rna += 'U';
//         // } else {
//         //     rna += dna[i];
//         // }
//         rna += dna[i] === 'T' ? 'U' : dna[i];
//     }
//     return rna;
    
// }

// const DNAtoRNA = (dna) => 
//     dna 
//         .split('')
//         .map((el) => (el === 'T' ? 'U' : el))
//         .join('');

// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');

const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

console.log(DNAtoRNA('TTTT'));
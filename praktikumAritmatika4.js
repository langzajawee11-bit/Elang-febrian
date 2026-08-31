let umur = 18
let punyaKTP = false;
let punyaSIM = false;

let bolehNAIKmotor = (umur >= 17) && punyaSIM;
let statusRemaja = (umur >= 13) || !punyaKTP

console.log("Boleh naik motor:", bolehNAIKmotor)
console.log("Status remaja:", statusRemaja)
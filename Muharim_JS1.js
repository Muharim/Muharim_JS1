// If else
let nilai = 75;

if (nilai >= 80) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}

// Nested if
let hargaBarang = 1200;
let uang = 1500;

if (uang >= hargaBarang) {
  console.log("Anda bisa membeli barang ini.");
  if (uang - hargaBarang >= 500) {
    console.log("Anda juga dapat membeli barang lain.");
  }
} else {
  console.log("Uang Anda tidak cukup untuk membeli barang ini.");
}

// Switch case
let hari = "Jumat";

switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Masih hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}

// for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

let angka = 1;

// While loop
while (angka <= 5) {
  console.log("Angka ke-" + angka);
  angka++;
}

let jumlah = 0;
let n = 1;

// Do While loop
do {
  jumlah += n;
  n++;
} while (n <= 5);

console.log("Jumlah angka dari 1 hingga 5 adalah: " + jumlah);

// function
function tambah(a, b) {
  return a + b;
}

function pangkat(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log("Hasil penambahan: " + tambah(5, 3));
console.log("Hasil pangkat: " + pangkat(2, 4));

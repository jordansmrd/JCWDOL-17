/** @format */
// array merupakan sebuah tipe data yang menyimpan banyak data(tipe data) dengan (biasanya)memiliki tipe data yang seragam
// array merupakan kumpulan element(data)
// setiap element di dalam array, memiliki index(alamat)
// index di dalam array diawali dengan angka 0
const arr = [1, 2, 3]; //array
const arr2 = new Array(4, 5, 6); //array
const arr3 = ["jhonny", "dea"];
//jhonny berada di index 0
//dea berada di index 1

const arr4: number[] = [3];
const arr5: (string | number)[] = [3, "4"];

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr3[0]); //cara untuk mengambil value dari array melalui index
console.log(arr3.length);

// for = looping
// for biasa menggunakan 3 statements. declaration, condition, counter

for (const element of arr3) {
  //for of digunakan untuk mengakses element di dalam array. jumlah loop bergantung pada length array
  //code-block
  console.log(element);
}

for (const index in arr3) {
  //for in digunakan untuk mengakses index di dalam array. jumlah loop juga bergantung pada length array
  console.log(index, arr3[index]);
}

//built-in method dalam array
const names: string[] = ["ronald", "john", "andrew"];
const names2: string[] = ["ronaldowati", "naruto"];
//built-in method yang tidak merubah origin value
console.log(names.toString()); //method ini menghasilkan sebuah string konversi dari array names
console.log(names.join("_")); // mirip dengan method toString. tapi separator bisa diubah
const gabunganNames: string[] = names.concat(names2);
gabunganNames.push("john");
console.log(gabunganNames);
console.log(gabunganNames.slice(3, 4), "ini slice"); //mengambil element dari array menghasilkan sebuah array juga. argument 3 adalah index, argument 4 menandakan berhenti diindex ke 4
console.log(gabunganNames.indexOf("john"), "lokasi index john"); //mencari lokasi index berdasarkan element yang kita cari
console.log(
  gabunganNames.lastIndexOf("john"),
  "lokasi index john yg paling terakhir"
);

//built-in method yang merubah origin value
names.push("rooney"); // menambahkan value ke dalam array diletakkan di paling terakhir
names.unshift("messi"); //sama seperti push, tapi diletakan dipaling awal
names.pop(); //menghapus index/element di dalam array yg lokasi dipaling akhir
names.shift(); //menghapus index/element di dalam array yang lokasinya dipaling depan
names.splice(0, 1); //menghapus index/element. argument 0 adalah index. argument 2 adalah banyak data yang mau dihapus
names.sort(); //mengurutkan array sesuai dengan karakter
names.reverse(); //membalik posisi array
//property dari array
console.log(names.length, "banyak element dari array names");

//value dari array
console.log(names);

//looping dengan built-in methods
//forEach = tidak memiliki return. hanya looping sebanyak length
//map = return array sebanyak length
//filter = return array sebanyak kondisi
//findIndex = return number of index

//apabila sebuah parameter/argument merupakan function. maka disebut dengan callback function

//foreach
const tmp = gabunganNames.forEach((name, i, urr) => {
  //   console.log(name, "index ke", i, urr);
  console.log(i, name);
  return i;
});
const addition: string[] = ["jordan", "dewa"];
console.log(tmp);

// gabunganNames.concat(addition).forEach((name, i, arr) => {
//   console.log(name, arr);
// });

//map
const tmp2 = gabunganNames.map((name, i, urr) => name + i);
console.log(tmp2);

//filter
const tmp3 = gabunganNames.filter((name, i) => {
  if (i % 2) return true;
});

console.log(tmp3);

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const genap: number[] = numbers.filter((number) =>
  !(number % 2) ? true : false
);
const ganjil: number[] = numbers.filter((number) =>
  number % 2 ? true : false
);
// kalau false akan dieleminasi
console.log(genap);
console.log(ganjil);

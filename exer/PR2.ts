// buat piramid 
const piramid = (tinggi:number) : void=> {
    let sQ = 1;
    for (let baris = 1;baris<=tinggi;baris++){
        let hasil = "";
        for (let kolom = 0;kolom<baris;kolom++){
            hasil += (
                sQ<10
                ? "0"
                : " "
            ) + sQ + " ";
            sQ++
        }
        console.log(hasil)
    }
}
piramid(4)

//soal nomor 2
const bunyi = (num:number):string=>{
    let result : string[] = [] // determine hasil jadi di dalam array karena dijadikan deret
    for(let urutan = 1; urutan<=num;urutan++){ // urutan dimulai dari yang pertama, urutan akan mengikuti parameter number
        result.push ( // Push, menggantikan sebuah string ke dalam number
            (urutan % 3 === 0 && num % 5 === 0) ? "FizzBuzz" 
            :urutan % 3 === 0 ? "Fizz"
            :urutan % 5 === 0 ? "Buzz"
            :urutan.toString() // setiap number dijadkan string
        );
    }
    return result.join(", ") //jarak antara diganti koma + spasi
}
console.log(bunyi(25))

// body mass index calculator
// bmi = mass/height = kg/m2


const bMI=(mass:number, height:number):any=>{
    let meter = height/100;
    let result = mass / Math.pow(meter,2);
    if (result < 18.5  ){
        return "kurus"
    } else if (result > 18.5&&result <= 24.9) {
        return "ideal"
    }else if (result >= 25&&result <= 29) {
        return "overweight"
    } else if (result >= 30&& result <=39.9) {
        return "sangat overweight"
    }   else {
        return "overweight"
    }
}
console.log(bMI(80,180)) //pengerjaan soal : 90% sendiri, 10%Ai

//odd number array remover

const remover=(array:number[]):number[]=>{
    let result:number[]=[];
    for (let i=0;i<=array.length;i++){
        if (array[i] % 2 === 0){
            result.push(array[i])
        }
    }
    return result
}
console.log(remover(([1, 2, 3, 4, 5, 6])))

// word splitter

let kata:string = "word splitter";
const  wSplit = (kata:string):string[]=>{
    return kata.split(" ");
};
console.log(wSplit(kata))

// exercise day 5
// soal.no1
//Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const array:number[] = [12, 5, 23, 18, 4, 45, 32];
let lowest:number = array[0];
let highest:number = array[0];
let sum:number = 0;
for (let i = 0; i < array.length; i++){
    sum+=array[i];

    if (array[i] > highest){
        highest = array[i]
    }

    if (array[i] < lowest) {
        lowest = array[i]
    }
}

const rata:number = sum/array.length;

console.log(lowest);
console.log(highest);
console.log(rata);

// soal no.2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const kata2:string[] = ["apple", "banana", "cherry", "date"];
const asmbly=(kata2:string[]):any => {
    const lastword = kata2.pop();
    const hasil = kata2.join(" ,") + " and " + lastword;
    return hasil
}
console.log(asmbly(kata2))

// soal no.3 
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 let soal:number[]= [5, 3, 1, 7, 2, 6]
 let terkecil:number=array[0];
 const nomorDua = (soal:number[]):number => {
    const sortedSoal  = soal.slice().sort((a, b) => a-b);
    return sortedSoal[1]
 }
 console.log(nomorDua(soal))

// soal 4
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
// are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const arr1:number[] = [1, 2, 3];
const arr2:number[] = [3, 2, 1];

const calculateArray=(arr1:number[],arr2:number[]):number[] =>{
    const result = []; // containtment hasil sebagai array
    for (let i=0;i < arr1.length; i++) { 
        result.push(arr1[i]+arr2[i]);// penjumlahan terjadi secara serentak
    }
    return result
}  
console.log(calculateArray(arr1,arr2))

//  soal 5
//  Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

const arrExample:number[] = [1, 2, 3, 4];
const shiftArr = (arrExample:number[],addNumber:number):any=>{
    arrExample.push(addNumber);
    return arrExample;
}
console.log(shiftArr(arrExample,7))

// soal page 2 no 1
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

const  mixedArray:any[] = ["3", 1, "string", null, false, undefined, 2];
const findNumber = (mixedArray:any[]):number =>{
    return mixedArray.reduce((sum, element)=>{
        if(typeof element === 'number'){
            return sum + element
        }
        return sum;
    }, 0);
}
console.log(findNumber(mixedArray))

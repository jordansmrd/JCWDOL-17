/** @format */

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

//understand
// input berupa sebuah array of number
// output sebuah number
// dari array yang dikirim ke function
// carilah 1 angka yang tidak memiliki duplikat
// [2,2,1] => 1

//strategy
// buat sebuah function parameter array dan return number
// dari array yang sudah ada, kita akan cari value yang tidak memiliki duplikasi
// setelah mendapatkan angka tersebut return dari function

//psuedocode
// buat parameter arr untuk menampung array of number
// for sebanyak arr.length
//              cari angka yang hanya memiliki 1 value saja. (filter)
//              kita akan menggunakan filter untuk mendapatkan length setiap value yg dilooping
//              apabila hasil filter hanya memiliki 1 length saja berarti return value tersebut

//ex
//filter yg angkanya 2 => [2,2]
//filter yg angka 1 => [1]
//apabila lengthnya ==1 return value tersebut

const findFirstNonDuplicate = (arr: number[]) => {
  const set = new Set(arr); // [2,2,1] => [2,1]

  set.forEach((value) => {
    if (arr.filter((n) => n == value).length == 1) return console.log(value);
  });

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr.filter((n) => n == arr[i]).length == 1) return arr[i];
  //     // [2,2,1] => [2,2] . i = 0 .
  //     // [2,2,1] => [2,2] . i = 1
  //     // [2,2,1] => [1] . i = 2.  return 1
  //   }
};

findFirstNonDuplicate([2, 2, 1]); //1
findFirstNonDuplicate([4, 1, 2, 1, 2]); //4
findFirstNonDuplicate([1]); //1

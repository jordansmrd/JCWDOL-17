// No 1

function triPattern(height: number) {
  let triPat: string = "";
  let k: number = 1;
  for (let i: number = 1; i <= height; i++) {
    for (let j: number = 1; j <= i; j++) {
      if (k <= 9) triPat += `0${k}`;
      else triPat += k;

      triPat += " ";
      k++;
    }
    triPat += "\n";
  }
  return triPat;
}

console.log(triPattern(4));

function wordRep(n: number) {
  let resultWrd: (number | string)[] = [];

  for (let i: number = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) resultWrd.push("FizzBuzz");
    else if (!(i % 3)) resultWrd.push("Fizz");
    else if (!(i % 5)) resultWrd.push("Buzz");
    else resultWrd.push(i);
  }

  return resultWrd;
}

for (const element of wordRep(16)) {
  console.log(element);
}

// No 3

// function bmiCal(weight:number,height:number) {
//   const resBMI = weight/((height/100)*(height/100))
//   if(resBMI < 18.5) return "less weight"
//   else if(resBMI >= 18.5 && resBMI <= 24.9 ) return "ideal"
//   else if(resBMI >= 25.0 && resBMI <= 29.9 ) return "overweight"
//   else if(resBMI >= 30.0 && resBMI <= 39.9 ) return "very overweight"
//   else return "Obesity"
// }

const bmiCal = (weight: number, height: number) => {
  const resBMI = weight / ((height / 100) * (height / 100));
  if (resBMI < 18.5) return "less weight";
  else if (resBMI >= 18.5 && resBMI <= 24.9) return "ideal";
  else if (resBMI >= 25.0 && resBMI <= 29.9) return "overweight";
  else if (resBMI >= 30.0 && resBMI <= 39.9) return "very overweight";
  else return "Obesity";
};

console.log(bmiCal(52, 166));

// No 4

// function oddNumDel(...arg:number[]){
//    let resultNum:number[] = []

//    for(let i = 0; i<arg.length;i++){
//       if(!(arg[i]%2)) resultNum.push(arg[i])
//       else continue
//    }
//    return resultNum
// }

const oddNumDel = (...argue:number[]) => {
  const resultNum:number[] = argue.filter((num) =>
    !(num%2) ? true : false 
  );
  return resultNum
};

console.log(oddNumDel(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// No 5

// function splitStr(str:string){
//   const resultSplit:string[] = str.split(' ')
//   return resultSplit
// }

const resultSplit = (str: string) => str.split(" ");
console.log(resultSplit("Hi aku Herry"));

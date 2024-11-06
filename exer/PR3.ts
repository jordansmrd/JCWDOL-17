class Student {
    name: string;
    email: string;
    age: number;
    score: number;

    constructor(name: string, email: string, age: number, score: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }
}

class LHA {
    highest: number;
    lowest: number;
    average: number = 0;

    constructor(numbers: number[]) {
        this.highest = Math.max(...numbers);
        this.lowest = Math.min(...numbers);
        for (let i = 0; i < numbers.length; i++) {  // Fixed: changed `i <= numbers.length` to `i < numbers.length`
            this.average += numbers[i];
        }
        this.average = this.average / numbers.length;
    }
}

const test = new LHA([5, 3, 7, 8, 10, 23, 45]);

const calculateArrayStudent = (students: Student[]) => {
    return {
        score: new LHA(students.map((student) => student.score)),  // Fixed: added missing `=>`
        age: new LHA(students.map((student) => student.age))       // Fixed: corrected typo and added missing `=>`
    };
};


// exercise
class Comparator {
    public static equalizer(obj1:Record<string,any>,obj2:Record<string,any>):boolean{
        const keys1 = Object.keys(obj1)
        const keys2 = Object.keys(obj2)

        for (const key of keys1){
            if(obj1[key]!==obj2[key]){
                return false;
            }
        }
        return true;
    }  
}

console.log(Comparator.equalizer({a:2},{a:1}))

// create a func to ger the intersection of two object
class Input1 {
    a=1;
    b=2;
}

class Input2 {
    a=1;
    c=3;
}

// expectation output: {a:1}

const intersect=(obj1:Record<string,any>,obj2:Record<string,any>)=>{
    let hasilnya:Record<string,any>={};

    for (const key in obj1){
        if(obj1[key]===obj2[key]){
            hasilnya[key]=obj1[key];
        }
    }
    return hasilnya
}

const input1 = new Input1();
const input2 = new Input2();
console.log(intersect(input1,input2))

// merge two array of student data and remove duplicate
interface Ekskul {
    name:string;
    email:string;
}

let Futsal:Ekskul[] =  [
    {name:"student1", email:"student1@gmail.com"},
    {name:"student2", email:"student2@gmail.com"}
]

let Band:Ekskul[] = [
    {name:"student1", email:"student1@gmail.com"},
    {name:"student3", email:"student3@gmail.com"}
]

const mergeAndRemove=(obj1:Ekskul[],obj2:Ekskul[]) :Ekskul[]=>{
    const merged = [...obj1, ...obj2];

    const seen = new Set<string>();
    const unique = merged.filter(item=>{
        const identifier = `${item.name}-${item.email}`;
        if(seen.has(identifier)) {
            return false;
        }
        seen.add(identifier);
        return true
    });
    return unique
}
console.log(mergeAndRemove(Futsal,Band))
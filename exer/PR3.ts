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

// create a shooting game 

// first define
type Weapon = {
    name:string;
    power:number;
}

type Item = {
    name:string;
    aid?:number;
    power?:number;
}
class User{
    health:number;
    power:number;
    weapon?:Weapon;
    item?:Item;
    constructor (health:number,power:number,weapon?:Weapon|null,item?:Item|null){
        this.health = health;
        this.power = power;
        this.weapon= weapon ?? undefined;
        this.item = item ?? undefined;
    }

    attack(target:User):void{ // attack jadi method
        const arms = this.power + (this.weapon?.power || 0);//tangan kosong atau ada senjata, kalau ga ada +0
        target.health -= arms;
        target.health = target.health < 0 ?  0 : target.health;
        console.log(`${this.weapon?.name|| "tangan kosong"} kena! Darah${target.health}`);
    }

    pick(item: Weapon|Item):void {//method pemilihan senjata atau penyembuhan
        if ("power" in item) {
            this.weapon = item as Weapon;
            console.log(`lu ambil ${this.weapon.name} dengan damage ${this.weapon.power}`);
        } else if ("aid" in item)  {
            this.item = item as Item;
            console.log(`lu ambil ${this.item.name} dengan penyembuhan ${this.item.aid}`)
        }
    }
}
// buat variable yang akkan berjalan, yaitu players, weapons, and item.
const player1 = new User(100, 10, null,null);
const player2 = new User(100, 10, null,null);

const weaponsCrate : Weapon[] = [
    {name:"Glock 15", power:20},
    {name:"REC7", power:30},
    {name:"Salt Shotgun", power:15},
]

const itemscrate : Item[] = [
    {name:"perban", aid: 30},
    {name:"Grenade", power:74},
    {name:"Red Bull", aid: 5}
]
//fungsi yang bkin pusing
// ngambil crate
    const dapetSenjata=():Weapon=>{
        return weaponsCrate[Math.floor(Math.random()*weaponsCrate.length)];
    }
    const dapetItem=():Item=>{
        return itemscrate[Math.floor(Math.random()*itemscrate.length)]
    }

// fungsi PUBG
const pUBG = () => {
    let gantianPertama = true;//define yang main pertama

    while (player1.health>0 && player2.health>0){
        const yangSekarang = gantianPertama ? player1 : player2; // karena sudah terdefine maka player1 yang duluan
        const musuh = gantianPertama ? player2 : player1;// kalau nilai gantianPertama true jadi player kedua jadi samsak dulu
    
        console.log(`sekarang gantiannya ${gantianPertama? player1:player2}`);

        const pilihan = Math.random()<0.5? "attack": "pick";

        if(pilihan === "pick"){
            const barang = Math.random()<0.5? dapetSenjata() : dapetItem();
            yangSekarang.pick(barang);
        } else{
            yangSekarang.attack(musuh);
        }

        if (musuh.health <= 0 ){
            console.log(`Stop! ${gantianPertama ?player2:player1} udah mati, jangan di serang lagi!`);
            break;
        }

        gantianPertama = !gantianPertama;
    
    }
};

pUBG()

// Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty

// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data
 
class Barang {
    name:string;
    price:number;
    qty:number
    constructor(name:string,price:number,qty:number){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    hargaTotal():any{
        return this.price*this.qty
    }
}

class Keranjang {
    produk: Barang[] = [];
    total:number = 0;
    cart(produk:Barang):void{
        this.produk.push(produk);
        this.total += produk.hargaTotal()
    }

    invoice():number{
        return this.total;
    }

    addItems(products:Barang[]):void{
        products.forEach(product => {
            this.cart(product)
        });
    }

    cashier():void{
        console.log("===== Invoice =====");
        this.produk.forEach((item, index) => {
            console.log(`Item ${index + 1}: ${item.name}`);
            console.log(`  Quantity: ${item.qty}`);
            console.log(`  Unit Price: ${item.price}`);
            console.log(`  Total: ${item.hargaTotal()}`);
            console.log("-------------------");
        });
        console.log(`Grand Total: ${this.total}`);
        console.log("===================");
    }
}

const item1 = new Barang("Kondom", 6000, 2);
const item2 = new Barang("Aqua 500ml", 3000, 1);
const item3 = new Barang("Vivo Lubricant Gel", 60000, 1);

const keranjang = new Keranjang();
keranjang.addItems([item1,item2,item3])

keranjang.cashier()






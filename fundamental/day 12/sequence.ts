let result: string = "";

function greet(str: string) {
    result = str;
}

function hello() {
    greet("hello"); 
}

function arigatou() {
    greet("arigatou");
}

arigatou();
hello();
console.log(result);

function cal2(a:number,b:number){
    let result = a + b;
    displayer(result);
}

cal2(7, 8);
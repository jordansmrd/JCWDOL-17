// const tryPromise = new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve();
//         } else {
//             reject("error");
//         }
//     }, 2000);
// });

// tryPromise
//     .then(() => console.log("success"))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("finally done"));


// const fetchData = async () => {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users : { name : string} [] = (await response.json()) as {
//             name : string;
//         }[];
//         console.log(users.filter((user) => user.name.startsWith("C")));
//     }catch (error){
//         console.log(error);
//     }finally {
//         console.log("always running");
//     }
// };

import users from "./data.json" assert { type: "json" };
console.log(users);


type bankAccountType = {money: number, deposit: (val:number) => void };

let bankAccount: bankAccountType = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

type myselfType = {
  name: string, 
  bankAccount:bankAccountType,
  hobbies: string[]
};

let myself: myselfType = {
  name: "Instacode",
  bankAccount: bankAccount,
  hobbies: ["sports", "Cooking", "Coding"]
};

myself.bankAccount.deposit(3000);

console.log(myself)

//****************************************************************************************
//                                  DONE                                                 *
//****************************************************************************************

// To Do assign types the code below

// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };

// let myself = {
//     name: "Instacode",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };

// myself.bankAccount.deposit(3000);

// console.log(myself);

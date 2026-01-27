// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     var val = productFun(i);
//     console.log(val);
//   }, 100);
// }

// function productFun(i) {
//   i++;
//   let prod = 1;
//   prod = prod * i;
//   return prod;
// }

function createAccount(initialAmount) {
  let balance = initialAmount;
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount)
        {
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance; 
    }   
  };
}
let myAccount = createAccount(1000);    
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.getBalance());

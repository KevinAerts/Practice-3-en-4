var accounts = [];
 
 function createAccount(account){
     accounts.push(account);
     return account;
 };
 
 function getAccount(username){
   var a;
   var matchaccount;
   for(a=0; a<accounts.length; a++){
       if(accounts[a].username === username){
           matchaccount = accounts[a];
       };
   };
   return matchaccount;
 };
 
 function deposit(account, amount){
     if(amount>0 && !isNaN(parseInt(amount))){
         return account.balance+=amount;
     }
     else{
         throw 'Het getal is kleiner dan 0 of niet numeriek';
     };
 };
 
 function withdraw(account, amount){
     if(amount>0 && !isNaN(parseInt(amount))){
         return account.balance-=amount;
     }
     else{
         throw 'Het getal is kleiner dan 0 of niet numeriek';
     };
 };
 
 function getBalance(user){
     account = getAccount(user);
     
     return function(){
         return account.balance;
     };
 };
 
 
 var kevin = ({username:"Kevin", balance:0});
 var tom = ({username:"Tom", balance:500});
 
 
 console.log(createAccount(kevin));
 console.log(createAccount(tom));
 console.log(getAccount("Tom"));
 console.log(deposit(kevin, 8));
 console.log(withdraw(kevin,10));
 console.log(accounts);
 console.log(getBalance("Kevin")('balance'));
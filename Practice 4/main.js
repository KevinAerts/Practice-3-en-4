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
 
 function balancechange(account, amount){
     this.amount = amount;
     this.account = getAccount(account);
     this.currentamount = getBalance(account)('balance');
     this.deposit = function(){
            if(this.amount>0 && !isNaN(parseInt(this.amount))){
             return this.account.balance+=this.amount;
            }
            else{
             throw 'Het getal is kleiner dan 0 of niet numeriek!';
             };
         };
     this.withdraw = function(){
             if(this.amount>0 && !isNaN(parseInt(this.amount)) && this.currentamount>this.amount){
                 return this.account.balance-=this.amount;
             }
             else{
             throw 'Het getal is kleiner dan 0 of niet numeriek of je huidige saldo is te laag!';
             };
     }; 
 };
 
 function getBalance(user){
     account = getAccount(user);
     
     return function(){
         return account.balance;
     };
 };
 
 
 var kevin = createAccount({username:"Kevin", balance:0});
 var tom = createAccount({username:"Tom", balance:500});
 

 console.log(new balancechange("Kevin", 2.65).deposit());
 console.log(new balancechange("Tom", 600).withdraw());
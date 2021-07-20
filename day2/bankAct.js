
var handler =require("./actHandller");
var events=require("events");
var emitter=new events.EventEmitter();
var Account=function(amount){
var balance=amount;

    var withdraw=function (amount){
         balance=balance-amount;
         monitor();
    }
    var deposit= function (amount){
        balance=balance+amount;
        monitor();
    }
    var getBalance=function(){
        return balance;
    }
    var monitor=function (){
        if(balance < 1000){
            
          //handler.blockAcnt();
            emitter.emit("underBalance");
        }
        else if(balance >= 250000){
            //handler.payIT();
            emitter.emit("overBalance");
        }
    }
    return{
        Balance:getBalance,
        debit:withdraw,
        credit:deposit
    }
}

emitter.on("underBalance",handler.blockAcnt);
emitter.on("underBalance",handler.sendEmail);
emitter.on("underBalance",handler.sendSMS);
emitter.on("overBalance",handler.payIT);

var Anct=new Account(5000);
Anct.credit(2000);
var amt=Anct.Balance();
console.log("Account Balance = "+ amt);
Anct.debit(9500);
var amt=Anct.Balance();
console.log("Account Balance = "+ amt);
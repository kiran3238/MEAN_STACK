express =require('express');
eobj=express();
port=5200;

function starter(){
    console.log("Marvellous Server is sarted at port 5200");
}
eobj.listen(port,starter);

function AcceptRequest(req,res){
    res.send("Marvellous Server is ON..");
}
BalanceAmount=10000;
eobj.get('/',AcceptRequest);

function CreditAmount(req,res){
   
    value=req.query.Amount;
    BalanceAmount=BalanceAmount+Number(value);
    res.send("Credit Option is Selected..."+BalanceAmount);
}
eobj.get('/Credit',CreditAmount);

function DebitAmount(req,res){
    
    value=req.query.Amount;
    BalanceAmount=BalanceAmount-Number(value);
    res.send("Debit Option is Selected..."+BalanceAmount);
}
eobj.get('/Debit',DebitAmount);


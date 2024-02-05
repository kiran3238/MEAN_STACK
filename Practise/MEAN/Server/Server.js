express =require ('express');
eobj=new express();
port=5200;

function Starter(){
    console.log("Kirann Server is Listening...");
}
eobj.listen(port,Starter);

function AcceptRequest(req,res){
    res.send('Kirann Server is Live....!!!');
}
eobj.get('/',AcceptRequest);

function CreditAmount(req,res){
    val=req.query.Amount;
    res.send('Credited Amount is '+val);

}
eobj.get('/Credit',CreditAmount);


function DebitAmount(req,res){
    val=req.query.Amount;
    res.send('Debit Amount is '+val);

}

eobj.get('/Debit',DebitAmount);


function server(reqNumber){
    console.log("this request number is: "+ reqNumber);
    callDatabase(function(){console.log("Call this anon function after db operation is done:"+reqNumber);});
}

function callDatabase(callback){
    console.log("I am inside callDb1");
    setTimeout(callback,5000);
    console.log("I am inside callDb2");

}


server(11111);
server(22222);
server(33333);
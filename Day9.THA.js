let name =  {
  firstname : "Kundan",
  lastname : "Gupta",
}
printFullName =  function(hometown,company){
  console.log(this.firstname + " " + this.lastname +", " + hometown + ", " + company)
}


printFullName.call(name,"Ranchi","Kokar");


printFullName.apply(name, ["Ranchi","Kokar"]);


let printMyNAme = printFullName.bind(name,"Ranchi","Kokar");
printMyNAme();

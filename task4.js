var data = [
    {
      Company: "Samsung",
      Model: "Galaxy",
      Memory: 64,
      Price: 15000,
    },
    {
      Company: "Nokia",
      Model: "S730",
      Memory: 128,
      Price: 22000,
    },
    {
      Company: "Xiaomi",
      Model: "Note",
      Memory: 32,
      Price: 12000,
    },
    {
      Company: "Motorala",
      Model: "G10",
      Memory: 32,
      Price: 15000,
    },
    {
      Company: "Apple",
      Model: "S12",
      Memory: 64,
      Price: 25000,
    },
  ];
  

function fun() {
    var cmp=document.getElementById("cmp").value;
    var mdl=document.getElementById("mdl").value;
    var mem=document.getElementById("mem").value;
    var pri=document.getElementById("pri").value;

    var val={
        Company:cmp,
        Model:mdl,
        Memory:mem,
        Price:pri
    }
    data.push(val);
    var table="<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
    data.forEach(v => {
        table+="<tr><td>"+
        v.Company+
        "</td><td>"+
        v.Model+
        "</td><td>"+
        v.Memory+
        "</td><td>"+
        v.Price+
        "</td></tr>"
    });
    table+="</table>";
    document.getElementById("output").innerHTML=table;
}
// var val;
// fetch("./data.json")
//   .then(function (res) {
//     return res.json();
//   })

//    .then(function (data) {
//     val=data;
//     console.log(val);
//     // for (let i = 0; i < data.length; i++) {
//     //   document.getElementById("data").innerHTML +=
//     //     data[i].Company +
//     //     " => " +
//     //     data[i].Model +
//     //     " => " +
//     //     data[i].Memory +
//     //     " => " +
//     //     data[i].Price +
//     //     "<br/>";
//     // }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //   console.log(val);

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
  var v1 = document.getElementById("tsort").value;
  var v2 = document.getElementById("tdata").value;
  if (v1 === "ascending" && v2 === "company") {
    data.sort((a, b) =>
      a.Company > b.Company ? 1 : b.Company > a.Company ? -1 : 0
    );

    // addTable(data);
  } else if (v1 === "descending" && v2 === "company") {
    data.sort((a, b) =>
      a.Company < b.Company ? 1 : b.Company < a.Company ? -1 : 0
    );
    // addTable(data);
  } else if (v1 === "ascending" && v2 === "model") {
    data.sort((a, b) => (a.Model > b.Model ? 1 : b.Model > a.Model ? -1 : 0));
    //addTable(data);
  } else if (v1 === "descending" && v2 === "model") {
    data.sort((a, b) => (a.Model < b.Model ? 1 : b.Model < a.Model ? -1 : 0));
    // addTable(data);
  } else if (v1 === "ascending" && v2 === "memory") {
    data.sort(function (a, b) {
      return a.Memory - b.Memory;
    });
    //   addTable(data);
  } else if (v1 === "descending" && v2 === "memory") {
    data.sort(function (a, b) {
      return b.Memory - a.Memory;
    });
    //addTable(data);
  } else if (v1 === "ascending" && v2 === "price") {
    data.sort(function (a, b) {
      return a.Price - b.Price;
    });
    // addTable(data);
  } else if (v1 === "descending" && v2 === "price") {
    data.sort(function (a, b) {
      return b.Price - a.Price;
    });
    //addTable(data);
  }

  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
  data.forEach((val) => {
    table +=
      "<tr><td>" +
      val.Company +
      "<td>" +
      val.Model +
      "</td><td>" +
      val.Memory +
      "</td><td>" +
      val.Price +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}
// function addTable(data) {

//     var ans = document.getElementById("show");
//     var cols = [];

//     for (var i = 0; i < data.length; i++) {
//         for (var k in data[i]) {
//             if (cols.indexOf(k) === -1) {
//                 cols.push(k);
//             }
//         }
//     }

//     // Create a table element
//     var table = document.createElement("table");

//     // Create table row tr element of a table
//     var tr = table.insertRow(-1);

//     for (var i = 0; i < cols.length; i++) {

//         // Create the table header th element
//         var theader = document.createElement("th");
//         theader.innerHTML = cols[i];

//         // Append columnName to the table row
//         tr.appendChild(theader);
//     }

//     // Adding the data to the table
//     for (var i = 0; i < data.length; i++) {

//         // Create a new row
//         trow = table.insertRow(-1);
//         for (var j = 0; j < cols.length; j++) {
//             var cell = trow.insertCell(-1);

//             // Inserting the cell at particular place
//             cell.innerHTML = data[i][cols[j]];
//         }
//     }

//     ans.appendChild(table)
// }

function CreateTable() {
    var myBooks = [
    {
        "Sl.No":1,
        "Name":"Toothpaste",
        "Quantity":1,
        "Unit":"gm",
        "Department":"Personal care",
        "Notes":"White"
    
    },

    {
        "Sl.No":1,
        "Name":"Milk",
        "Quantity":2,
        "Unit":"l",
        "Department":"Dairy",
        "Notes":"Milma"
    
    },
    {
        "Sl.No":3,
        "Name":"Soap",
        "Quantity":2,
        "Unit":"gm",
        "Department":"Personal care",
        "Notes":"Dettol"
    
    },
    {
        "Sl.No":4,
        "Name":"Eggs",
        "Quantity":6,
        "Unit":"No",
        "Department":"Dairy",
        "Notes":"-"
    
    },
    {
        "Sl.No":5,
        "Name":"Sugar",
        "Quantity":2,
        "Unit":"Kg",
        "Department":"Condiments",
        "Notes":"-"
    
    },
    {
        "Sl.No":6,
        "Name":"Fish",
        "Quantity":1,
        "Unit":"Kg",
        "Department":"Meat",
        "Notes":"Salmon"
    
    },
    {
        "Sl.No":7,
        "Name":"Oranges",
        "Quantity":2,
        "Unit":"Kg",
        "Department":"Fruits",
        "Notes":"Navel orange"
    
    },
    {
        "Sl.No":8,
        "Name":"Tomato",
        "Quantity":2,
        "Unit":"Kg",
        "Department":"Vegetables",
        "Notes":"-"
    
    },
    {
        "Sl.No":9,
        "Name":"Coconut oil",
        "Quantity":1,
        "Unit":"l",
        "Department":"Oils",
        "Notes":"Pure coconut oil"
    
    },
    {
        "Sl.No":10,
        "Name":"Rice",
        "Quantity":5,
        "Unit":"Kg",
        "Department":"Grains",
        "Notes":"Matta"
    
    }
        
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
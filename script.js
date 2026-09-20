const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");
const clearBtn = document.querySelector(".clear");

form.addEventListener("submit", e => {
    e.preventDefault();

    // Collect input values
    const fields = ["name","course","year","section","email"];
    const values = fields.map(id => document.getElementById(id).value.trim());

    // Check if any field is empty
    if (values.includes("")) {
        alert("Please fill out all fields!");
        return;
    }

    // Create a new table row with strong borders
    const row = document.createElement("tr");
    row.innerHTML = values.map(v => `<td>${v}</td>`).join("");

    // Append to table
    tableBody.appendChild(row);

    // Reset form
    form.reset();
});

// Clear table and form
clearBtn.addEventListener("click", () => {
    form.reset();
    tableBody.innerHTML = "";
});
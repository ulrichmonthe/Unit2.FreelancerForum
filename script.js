
let freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];


function renderFreelancers() {
    const tableBody = document.querySelector("#freelancer-table tbody");
    tableBody.innerHTML = ""; 

    
    console.log("Rendering freelancers:", freelancers);

    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = (total / freelancers.length).toFixed(2);
    document.getElementById("average-price").textContent = `The average starting price is $${average}.`;
}


renderFreelancers();
updateAveragePrice();

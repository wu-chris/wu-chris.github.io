function addRow(features, CHECKCROSSBASIC, CHECKCROSSPRO) {
    const table = document.getElementById("comparisonTable");
    const row = document.createElement("tr");
    if (table.rows.length % 2 === 0) {
        row.style.backgroundColor = 'lightyellow'; 
    } 
    else {
        row.style.backgroundColor = 'white'; 
    }
    row.innerHTML = `
        <td>${features}</td>
        <td><i class="fa ${CHECKCROSSBASIC}"></i></td>
        <td><i class="fa ${CHECKCROSSPRO}"></i></td>`;
    table.appendChild(row);
}
function addAllRows(){
    for(let i = 0; i < NRROWS; i ++){
        addRow(FEATURES[i],BASIC[i], PRO[i]);
    }
}
addAllRows();
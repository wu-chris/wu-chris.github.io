function addRow(features, CHECKCROSSBASIC, CHECKCROSSPRO) {
    const table = document.getElementById("comparisonTable");
    table.innerHTML += `
        <tr>
            <td>${features}</td>
            <td><i class="fa ${CHECKCROSSBASIC}"></i></td>
            <td><i class="fa ${CHECKCROSSPRO}"></i></td>
        </tr>
    `;
}
function addAllRows(){
    for(let i = 0; i < NRROWS; i ++){
        addRow(FEATURES[i],BASIC[i], PRO[i]);
    }
}
addAllRows();
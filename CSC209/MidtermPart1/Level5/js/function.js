function addRow(CHECKCROSSBASIC, CHECKCROSSPRO) {
    const table = document.getElementById("comparisonTable");
    table.innerHTML += `
        <tr>
            <td>Sample text</td>
            <td><i class="fa ${CHECKCROSSBASIC}"></i></td>
            <td><i class="fa ${CHECKCROSSPRO}"></i></td>
        </tr>
    `;
}

addRow("fa-remove", "fa-check");
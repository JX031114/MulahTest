const table1Data = {
    A5: 10,
    A20: 20,
    A15: 30,
    A7: 5,
    A13: 4,
    A12: 3
};

document.getElementById('table1').innerHTML = `
    <table>
        <tr><th>Key</th><th>Value</th></tr>
        ${Object.entries(table1Data)
            .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
            .join('')}
    </table>
`;

document.getElementById('alpha').innerText = table1Data.A5 + table1Data.A20;
document.getElementById('beta').innerText = table1Data.A15 / table1Data.A7;
document.getElementById('charlie').innerText = table1Data.A13 * table1Data.A12;

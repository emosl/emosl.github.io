
//CHAT GPT
// 1. Show mouse position on the document
document.addEventListener('mousemove', function (e) {
    document.getElementById('mousePosition1').innerHTML = 'Posición del mouse: X: ' + e.pageX + ', Y: ' + e.pageY;
});

// 2. Get first and last name on button click, and display full name after the button
document.getElementById('form1-submit').addEventListener('click', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('form1-fname').value;
    const lastName = document.getElementById('form1-lname').value;
    const fullName = document.createElement('p');
    fullName.innerHTML = `Nombre completo: ${firstName} ${lastName}`;
    this.insertAdjacentElement('afterend', fullName);
});

// 3. Add row or column to a table on button click
document.getElementById('btn-insert-r').addEventListener('click', function () {
    const table = document.getElementById('sampleTable1');
    const newRow = table.insertRow(-1);
    newRow.insertCell(-1).innerHTML = `Row ${table.rows.length} column 1`;
    newRow.insertCell(-1).innerHTML = `Row ${table.rows.length} column 2`;
});

document.getElementById('btn-insert-c').addEventListener('click', function () {
    const table = document.getElementById('sampleTable1');
    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        row.insertCell(-1).innerHTML = `Row ${i + 1} column ${row.cells.length}`;
    }
});

// 4. Update table content on button click, based on user input
document.getElementById('btn-change').addEventListener('click', function () {
    const rowIndex = parseInt(document.getElementById('rowIndex').value) - 1;
    const colIndex = parseInt(document.getElementById('colIndex').value) - 1;
    const newValue = document.getElementById('newValue').value;
    document.getElementById('myTable1').rows[rowIndex].cells[colIndex].innerHTML = newValue;
});

// 5. Add or remove elements from the options list
document.getElementById('btn-add-color').addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const newOption = document.createElement('option');
    newOption.innerHTML = randomColor;
    newOption.value = randomColor;
    document.getElementById('colorSelect1').appendChild(newOption);
});

document.getElementById('btn-rmv-color').addEventListener('click', function () {
    const select = document.getElementById('colorSelect1');
    select.removeChild(select.options[select.selectedIndex]);
});

// 6. Change image size on mouse enter
document.getElementById('imagenGato1').addEventListener('mouseenter', function () {
    const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    this.src = `http://placekitten.com/${width}/${height}`;
});


//COPILOT
// 1. Show mouse position on the document
document.addEventListener('mousemove', function (e) {
    document.getElementById('mousePosition').innerHTML = 'Posición del mouse: X: ' + e.pageX + ', Y: ' + e.pageY;
});

// 2. Get first and last name on button click, and display full name after the button
document.getElementById('form-submit').addEventListener('click', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('form-fname').value;
    const lastName = document.getElementById('form-lname').value;
    const fullName = document.createElement('p');
    fullName.innerHTML = `Nombre completo: ${firstName} ${lastName}`;
    this.insertAdjacentElement('afterend', fullName);
});

// 3. Add row or column to a table on button click
document.getElementById('btn-insert-r').addEventListener('click', function () {
    const table = document.getElementById('sampleTable');
    const newRow = table.insertRow(-1);
    newRow.insertCell(-1).innerHTML = `Row ${table.rows.length} column 1`;
    newRow.insertCell(-1).innerHTML = `Row ${table.rows.length} column 2`;
});

document.getElementById('btn-insert-c').addEventListener('click', function () {
    const table = document.getElementById('sampleTable');
    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        row.insertCell(-1).innerHTML = `Row ${i + 1} column ${row.cells.length}`;
    }
});

// 4. Update table content on button click, based on user input
document.getElementById('btn-change').addEventListener('click', function () {
    const rowIndex = parseInt(document.getElementById('rowIndex').value) - 1;
    const colIndex = parseInt(document.getElementById('colIndex').value) - 1;
    const newValue = document.getElementById('newValue').value;
    document.getElementById('myTable').rows[rowIndex].cells[colIndex].innerHTML = newValue;
});

// 5. Add or remove elements from the options list
document.getElementById('btn-add-color').addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const newOption = document.createElement('option');
    newOption.innerHTML = randomColor;
    newOption.value = randomColor;
    document.getElementById('colorSelect').appendChild(newOption);
});

document.getElementById('btn-rmv-color').addEventListener('click', function () {
    const select = document.getElementById('colorSelect');
    select.removeChild(select.options[select.selectedIndex]);
});

// 6. Change image size on mouse enter
document.getElementById('imagenGato').addEventListener('mouseenter', function () {
    const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    this.src = `http://placekitten.com/${width}/${height}`;
});






const tableBody = document.getElementById('table-body');
let activeCell = null;

for (let row = 0; row < 10; row++) {
    const newRow = document.createElement('tr');

    for (let col = 0; col < 10; col++) {
        
        const newCell = document.createElement('td');
        const cellValue = row * 10 + col + 1;
        newCell.textContent = cellValue;

        if (cellValue % 2 === 0) {
            newCell.classList.add('even');
        }else{
            newCell.classList.add('odd')
        }

        newCell.addEventListener('click', () => {
            if (activeCell) {
                activeCell.classList.remove('active');
            }
            newCell.classList.add('active');
            activeCell = newCell;
        });

        newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
}

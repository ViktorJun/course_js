document.addEventListener('DOMContentLoaded', function() {
    function createPythagorasTable(size) {
        const table = document.querySelector('.readyTable');
        for (let i = 0; i <= size; i++) {
            const row = document.createElement('tr')
            for (let j = 0; j <= size; j++) {
                const cell = document.createElement(i === 0 || j === 0 ? 'th' : 'td');
                if (i === 0 && j === 0) {
                    cell.textContent = '';
                } else if (j === 0) {
                    cell.textContent = i;
                }else if (i === 0) {
                    cell.textContent = j;
                }else {
                    cell.textContent = j * i;
                }
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
    createPythagorasTable(10);
});


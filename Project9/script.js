const Title = document.getElementById('title');
const TotalBalance = document.getElementById('balance');
const CreditBalance = document.getElementById('money-credit');
const DebitBalance = document.getElementById('money-debit');
const TransactionHistory = document.getElementById('list');
const TransactionBtn = document.getElementById('btn');
const TransactionAmount = document.getElementById('amount');
const TransactionDesc = document.getElementById('reason');

TransactionBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Add Transaction
    function addTransaction() {
        const type = TransactionAmount > 0 ? '+' : '-'
        const TransactionLI = document.createElement('li');
        TransactionLI.classList.add(TransactionAmount > 0 ? 'credit' : 'debit');
        TransactionLI.innerHTML = `
            ${TransactionDesc} <span>${type}${TransactionAmount}</span> 
            <button class="delete-btn"><i class="far fa-trash-alt"></i></button>
        `;
        TransactionHistory.appendChild(TransactionLI);
    }
    addTransaction();
})
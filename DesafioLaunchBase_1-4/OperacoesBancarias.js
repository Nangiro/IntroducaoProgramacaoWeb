const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance += transaction.value
    }
    else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue(user) {
    let total = 0

    for(let transaction of user.transactions) {
        total += transaction.value
    }

    return total / user.transactions.length
}

function getTransactionsCount(user) {
    let counter = {
        creditcounter: 0,
        debitcounter: 0,
    }

    for (let transaction of user.transactions){
        if (transaction.type == 'credit'){
            ++counter.creditcounter
        } else {
            ++counter.debitcounter
        }
    }

    
    return counter
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue(user)) // 70

console.log(getTransactionsCount(user)) // { credit: 2, debit: 2 }
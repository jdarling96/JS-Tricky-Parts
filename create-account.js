function createAccount(pin, amount = 0) {
    let userPin = pin
    let initialAmount = amount

    return obj = {
        checkBalance: function(insertPin){
            if(insertPin === userPin){
                return `$${initialAmount}`
            } else{
                return "Invalid PIN."
            }
        },
        deposit: function(insertPin, insertAmount){
            if(insertPin === userPin && !isNaN(insertAmount)){
                initialAmount += insertAmount
                return `Succesfully deposited $${insertAmount}. Current balance: $${initialAmount}.`

            } else {
                return "Invalid PIN."
            }

        },
        withdraw: function(insertPin, withdraw){
            if(withdraw > initialAmount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            if(insertPin === userPin && !isNaN(withdraw)){
                initialAmount -= withdraw
                return `Succesfully withdrew $${withdraw}. Current balance: $${initialAmount}.`

            } else{
                return "Invalid PIN."
            }
        },
        changePin: function(oldPin, newPin){
            if(oldPin === userPin){
                userPin = newPin
                return "PIN successfully changed!"
            } else {
                return "Invalid PIN."

            }
        }

    }


}

module.exports = { createAccount };

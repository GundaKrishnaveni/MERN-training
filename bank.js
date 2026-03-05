import {deposit,checkBalance,withdraw,showTransactions} from "./bankingsystem.js"
deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
withdraw(1,20000)
checkBalance(1)
withdraw(1,200)
showTransactions(1)
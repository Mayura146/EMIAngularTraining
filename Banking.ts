const PromptSync = require('prompt-sync');
var ps = require('prompt-sync');
var prompt = ps();
var process = require('process');
class Bank {
    constructor()
    {  
            console.log('Enter the Account type \n1)savings\n2)Current');
            var type = prompt();
            if (type == "1" ? type = "saving" : type = "current");
                 this.type = type;
       
            var name = prompt('Customer Name ');
                this.name = name;
        
            flag = true;
            while (flag) {
                var d = prompt('Enter the DOB in yyyy-mm-dd');
                var date = new Date(d);
                if (date.getMonth() < 12 & date.getDay() < 30) {
                    flag = false
                        this.dob = d;
                }

            }
            var D1 = new Date(Date.now());
            this.age = D1.getFullYear() - date.getFullYear();
            if (this.age > 60) {
                console.log("Sorry You Cannot open the Account");
                process.exit(0);
            }
        
            flag = true;
            while (flag) {
                var email = prompt('email: ');
                flag = ValidateEmail(email);
                if (!(flag)) {
                        this.email = email;
                }
            }
            function ValidateEmail(mail) {
                var re = /\S+@\S+\.\S+/;
                if (re.test(email)) {

                    return false;
                }
                else {
                    console.log("You have entered an invalid email address!")
                    return (true)
                }
            }
      
            var flag = true;
            while (flag) {
                var bal = prompt('Enter the account bal (minimum 500) ');
                if (bal >= 500) {
                    this.bal = bal;
                    flag = false;
                }
            }
       
        
            var accnum = Math.floor(Math.random() * 100000);
            accnum = "SBI005" + accnum;
             this.accnum = accnum;

       
    }

    display() {
        console.log("\n----------------------------------------------------------------------------------------------------------");
        console.log("Account Number:" + this.accnum)
        console.log("Account Name: "+this.name)
        console.log("Account Type: "+this.type)
        console.log("Account Bal:" + this.bal)
        console.log("DOB: " + this.dob)
        console.log("Age: " + this.age)
        console.log("Email: " + this.email)
    }
}

class depowith extends bank {
    constructor() {
        super(bank);
    }
        depo() {
        var dep = parseInt(prompt("Enter the Amount to Deposit "));
        this.bal = parseInt(this.bal) + dep;
    }
        withdraw() {
            var wit = parseInt(prompt("Maximum Amount that can be withdrawen is " + (this.bal - 500)+":"));
            while ((this.bal - wit) < 500) {
                console.log("Sorry, Maximum Amount that can be withdrawen is " + (this.bal - 500)+":");
                var wit = parseInt(prompt("Enter the Amount to Withdraw :"));
            }
        this.bal = parseInt(this.bal) - wit;
        
    }
}

const b = new depowith();
b.display();
var ch = 1;

while (ch) {
    console.log("\n----------------------------------------------------------------------------------------------------------");
    console.log("Welcome to SBI");
    console.log("Enter your Choice\n1)Withdraw\n2)Deposit\n3)Exit")
    console.log("----------------------------------------------------------------------------------------------------------");
    var ch = prompt();
    switch (parseInt(ch)) {
        case 1: b.withdraw();
            b.display();
            break;
        case 2: b.depo();
            b.display();
            break;
        case 3: ch = false;
            break;
        default: console.log("Enter correct Choice ")
    }
}


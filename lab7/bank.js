window.onload = init;

var accountInfoList = [];
var accountname, amount;

// function Account(accountname, amount) {
//     this.accountname = accountname;
//     this.amount = amount;
// }
class Account {
    constructor(accountname, amount) {
        this.accountname = accountname;
        this.amount = amount;
    }
}

var createAccount = function () {

    function information(name, amount) {
        var acc = new Account(name, amount);
        accountInfoList.push(acc);
        printinformation();
    }

    function newaccount(accountname, deposit) {

        information(accountname, deposit);
    }


    function printinformation() {
        var pp = "";

        for (var i = 0; i < accountInfoList.length; i++) {
            pp += "Account Name :  " + accountInfoList[i].accountname + "    Balance : " + accountInfoList[i].amount + "\n";
        }

        document.getElementById("data").value = pp;
    }

    return {
        accountdetails: function () {
            var accountname = document.getElementById("accountname").value;
            var deposit = document.getElementById("deposit").value;
            newaccount(accountname, deposit);
        }
    }
};

function init() {
    var button = document.getElementById("button");
    var acc1 = createAccount();
    button.onclick = acc1.accountdetails;

}

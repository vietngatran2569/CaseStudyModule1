let Username = function () {
    this.arrAdmin = [["admin"], ["123"]];
    this.arrUser = [["nga"], ["123"]];
    this.login = function () {
        let username = document.getElementById("inputUser").value;
        let password = document.getElementById("inputPassword").value;
        if (username.trim() === '') {
            alert("Username is not blank");
        } else if (password.trim() === '') {
            alert("Password is not blank");
        } else {
            for (let i = 0; i < this.arrAdmin[0].length; i++) {
                if (username === this.arrAdmin[0][i] && password === this.arrAdmin[1][i]) {
                    alert("Hello " + this.arrAdmin[0][i] + " login success!");
                    return window.location = "adminManager.html";
                }
            }
            for (let i = 0; i < this.arrUser[0].length; i++) {
                if (username === this.arrUser[0][i] && password === this.arrUser[1][i]) {
                    alert("Hello " + this.arrUser[0][i] + " login success!");
                    return window.location = "userManager.html";
                }
            }
            alert("Username or password is incorrect.");
        }
    };
};
let login = new Username();

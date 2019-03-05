var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.Value;
        var password = passwordInput.Value;
        if (username === 'lphan' && password === 'abc123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User not found';
        errorBox.style = 'display: block;';
        var interval = setInterval();
        {
            errorBox.style = "display: none;";
        }
        goToHome();
        {
            window.location.href = 'index.html';
        }
    };
    return Login;
}());
var login = new Login();

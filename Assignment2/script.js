
    function showSignUp() {
        document.getElementById('signin-container').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }

    function showSignIn() {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('signin-container').style.display = 'block';
    }

    function validateSignIn() {
        // Perform validation for sign in form
        var username = document.getElementById('signin-username').value;
        var password = document.getElementById('signin-password').value;

        // Example validation: username and password should not be empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Username and password cannot be empty');
            return false;
        }


        return true;
    }

    function validateSignUp() {
        // Perform validation for sign up form
        var firstname = document.getElementById('signup-firstname').value;
        var lastname = document.getElementById('signup-lastname').value;
        var email = document.getElementById('signup-email').value;
        var username = document.getElementById('signup-username').value;
        var password = document.getElementById('signup-password').value;
        var confirmPassword = document.getElementById('signup-confirm-password').value;
        var phone = document.getElementById('signup-phone').value;
        var address = document.getElementById('signup-address').value;

        // Example validation: fields should not be empty and password should match confirm password
        if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || phone.trim() === '' || address.trim() === '') {
            alert('All fields are required');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }

        // Additional validation logic can be added as needed

        return true;
    }

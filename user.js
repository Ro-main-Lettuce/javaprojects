// Define a User class to represent a user
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.isAuthenticated = false;
    }

    // Method to authenticate the user
    authenticate(username, password) {
        if (this.username === username && this.password === password) {
            this.isAuthenticated = true;
            console.log('User authenticated successfully.');
        } else {
            console.log('Invalid username or password.');
        }
    }

    // Method to check if the user is authorized
    isAuthorized() {
        if (this.isAuthenticated) {
            console.log('User is authorized.');
            // Perform authorized actions here
        } else {
            console.log('User is not authorized. Please authenticate first.');
        }
    }

    // Method to log out the user
    logout() {
        this.isAuthenticated = false;
        console.log('User logged out successfully.');
    }
}

// Usage example
const user = new User('john', 'password');

user.authenticate('john', 'password');
user.isAuthorized();

user.logout();
user.isAuthorized();

const users = [];

module.exports = class Users {
    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    save() {
        users.push(this);
    }

    static fetch() {
        return users;
    }
    
}


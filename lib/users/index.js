/**
 * Created by alex on 3/18/15.
 */
module.exports = {
    users: [],
    saveUser: function (user) {
        this.users.push(user);
    },
    getUsers: function () {
        return this.users;
    }
};

const pgPool = require("./pool")

const pushUser = async (user) => {
    await pgPool.query("INSERT INTO users (forename, surname, email, password, role_id) VALUES ($1, $2, $3, $4);",
        [user.forename, user.surname, user.email, user.password])
}

const pushNewMessage = async (newMessage, user) => {
    await pgPool.query("INSERT INTO messages (title, date, user_id, message) VALUES ($1, NOW()::date, $2, $3);",
        [newMessage.title, user.id, newMessage.message])
}

const getUserCredentials = async (email) => {
    const {rows} = await pgPool.query("SELECT id, email, password FROM users WHERE email = $1",
        [email]);
    return rows[0];
}

const getUserById = async (id) => {
    const {rows} = await pgPool.query("SELECT u.*, r.role FROM users as u JOIN roles as r ON u.role_id = r.id WHERE u.id = $1",
        [id]);
    return rows[0];
}

const getAllMessages = async () => {
    const {rows} = await pgPool.query("SELECT m.title, m.message, TO_CHAR(m.date, 'DD/MM/YYYY') as date, u.forename, u.surname FROM messages as m JOIN users as u ON m.user_id = u.id");
    return rows;
}

module.exports = {pushUser, getUserCredentials, getUserById, pushNewMessage, getAllMessages}
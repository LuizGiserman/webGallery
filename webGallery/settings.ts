require('dotenv').config();

const settings = {

    DB_HOST : process.env.DB_HOST || "localhost",
    DB_USER : process.env.DB_USER || "default",
    DB_PWD: process.env.DB_PWD || "admin"
}

export default settings;
module.exports = {
    "type": "mysql",
    "host":  process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "shop",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true,
    "autoLoadEntities": true
};

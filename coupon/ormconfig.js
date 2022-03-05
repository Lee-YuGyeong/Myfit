module.exports = {
    "type": "mysql",
    "host": 'myfit.cmty47wd7cwc.us-east-1.rds.amazonaws.com',
    "port": 3306,
    "username": "root",
    "password": "12345678",
    "database": "shop",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true,
    "autoLoadEntities": true
};

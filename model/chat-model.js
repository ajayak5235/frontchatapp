const Sequelize = require('sequelize')

const sequelize = require('../util/database')
const personalMsg=sequelize.define('personalmsg',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    msg:Sequelize.STRING,
    type:Sequelize.STRING
})

module.exports = personalMsg;
   
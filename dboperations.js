const sql = require('mssql/msnodesqlv8');
const config = {
    connectionString: "Driver=SQL Server;Server=DESKTOP-H0EACRB\\SQLEXPRESS;Database=sunpop;Trusted_Connection=true;"
};

sql.connect(config, err => {
    new sql.Request().query('SELECT * from FruityBabes')
})


async function getFruityBabes(){
    try{
        let pool = await sql.connect(config);
        let fruitybabes = await pool.request().query("SELECT * from FruityBabes");
        return fruitybabes.recordsets;
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getFruityBabes: getFruityBabes
};
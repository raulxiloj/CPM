const oracledb = require('oracledb');
import keys from './keys';


async function initialize() {
    console.log('Initializing database module');
    const pool = await oracledb.createPool(keys.database);
}

function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
      let conn;
   
      opts.outFormat = oracledb.OBJECT;
      opts.autoCommit = true;
   
      try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(statement, binds, opts);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        if (conn) { // conn assignment worked, need to close
          try {
            await conn.close();
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  }

  

function close() {
     oracledb.getPool().close();
}

module.exports.initialize = initialize;
module.exports.close = close;
module.exports.simpleExecute = simpleExecute;
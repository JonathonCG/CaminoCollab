const Pool = require('pg').Pool
const pool = new Pool({
  user: 'node',
  host: '172.16.15.205',
  database: 'node',
  password: 'Cl@yt0n42!',
  port: 5432,
})

// const getAddr = (request, response) => {
    // const Addr = parseInt(request.params.id)
//   
    // pool.query('SELECT * FROM addresses WHERE fulladdr = $1', [Addr], (error, results) => {
    //   if (error) {
        // throw error
    //   }
    //   response.status(200).json(results.rows)
    // })
//   }
// 

const getAddr = (request, response) => {
    requestQuery = "%" + request.query.q + "%"
    pool.query('SELECT fulladdr, withinname FROM addresses WHERE fulladdr ILIKE $1 LIMIT 10', [requestQuery], 
    (err, results) => {
      if (err) {
        throw err
      }
      response.status(200).json(results.rows)
    })
  }

  
module.exports = {getAddr}
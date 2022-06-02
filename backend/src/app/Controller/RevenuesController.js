const { conn } = require("../../config/db/sql");

class RevenuesController {
async test(req,res){
  res.render('revenue')
}

  async index(req, res) {
    // const accessToken = req.headers.token.split(" ")[1];
    // const decoded = jwt.verify(accessToken, accessKey);
    const pool = await conn
    const sqlString1= `SELECT * FROM chuyen_di`
    return await pool
      .request()
      .query(sqlString1,async function (err, data){
        var amountTrip ,amountNumTrip, amountBill,amountNumBill= 0
        if(data){
          // tính toán dữ liệu tổng tiền , số lượng của chuyến
          for(let i=0;i<data.recordset.length;i++){
            amountTrip=amountTrip + (data.recordset[i].so_luong * data.recordset[i].don_gia)
            amountNumTrip+= data.recordset[i].so_luong
          }
          const sqlString2 = `SELECT * FROM hoa_don`
          return await pool
          .request()
          .query(sqlString2,async function(err,data2){
            if(data2){
              // tính toán dữ liệu tổng tiền , số lượng chuyến của hóa đơn
              for(let j =0;j<data2.recordset.length;j++){
                amountBill+= data2.recordset[j].tong_tien
                amountNumBill+= data.recordset[j].so_luong
              }
            }else{
              res.json({msg:"Không có dữ liệu hóa đơn"})
            }
             
          })
        }else{
          res.json({msg:"không có dữ liệu chuyến đi"})
        }
 
      }) 
    
      
      
}
}
module.exports = new RevenuesController();

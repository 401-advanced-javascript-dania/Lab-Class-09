
module.exports = (erorr,req,res,next)=>{
  res.status(500);
  res.statusMessage = 'Generic Server Erorr!';
  res.json({erorr:err});
};
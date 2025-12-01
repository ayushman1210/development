const income = require("../models/income.js");
const incomeSchema=require("../models/income.js");

exports.addinc=async(req,res)=>{
   const {title, amount, category,description,date}=req.body

   const income=incomeSchema({
    title,
    amount,
    category,
    description,
    date
   })


   try {
    if(!title ||  !category || !description || !date){
        return res.status(400).json({message:'all field must be field'})
    }
    if(amount<=0 || amount==='number'){
        return res.status(400).json({message:'money in positive value '})
    }
    await income.save()
    res.status(200).json({message:'Income Added '})
     } catch (error) {
        return res.status(500).json({message:'server error'})
   }
   console.log(income)
}

exports.getinc=async(req,res)=>{
    try {
        const income=await incomeSchema.find().sort({createdAt:-1})
       res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message:'server error'})
    }
}

exports.deleteinc=async(req,res)=>{
  const {id}=req.params;
  incomeSchema.findById(id)
  .then((income)=>{
    res.status(200).json({message:'income deleted successfully'})
  })
  .catch((err)=>{
    res.status(500).json({message:'server error'})
  })
}
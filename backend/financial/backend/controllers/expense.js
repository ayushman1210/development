const expenseSchema=require("../models/expense.js");

exports.addexpense=async(req,res)=>{
   const {title, amount, category,description,date}=req.body

   const expense=expenseSchema({
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
    await expense.save()
    res.status(200).json({message:'expense Added '})
     } catch (error) {
        return res.status(500).json({message:'server error'})
   }
   console.log(expense)
}

exports.getexpense=async(req,res)=>{
    try {
        const income=await expenseSchema.find()
       res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message:'server error'})
    }
}

exports.deleteexpense=async(req,res)=>{
  const {id}=req.params;
 expenseSchema.findById(id)
  .then((income)=>{
    res.status(200).json({message:'expense deleted successfully'})
  })
  .catch((err)=>{
    res.status(500).json({message:'server error'})
  })
}
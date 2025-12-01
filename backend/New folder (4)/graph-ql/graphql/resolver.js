const { Query } = require('mongoose')
const product=require('../data/product')


const resolver={
Query:{
    product:()=>{
     {   id:"1"
        title: "book"
        category:"books"
        price:1200
        instock:true
    }
     {   id:"2"
        title: "ok"
        category:"books"
        price:12
        instock:false
    }
}
},
}

module.exports=resolver
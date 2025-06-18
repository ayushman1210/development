// class Animal{
//  constructor(name,leg,speaks){
//         this.name=name;
//         this.leg=leg;
//         this.speaks=speaks;
//     }
//     static method(){// call on the classes 
//         console.log("hello")
//     }
//     speak(){
//         console.log(this.speaks)
//     }
// }

// let dog=new Animal("dog",4,"bhow");
// let cat=new Animal("cat",4,"meow");
// dog.speak();

// Animal.method();

// // new Date();

// //json.stringify json.parse


// class Rectangle{
//     constructor(width,length){
//         this.width=width;
//         this.length=length;
//     }

//     area(){
//     const area=this.width*this.length;
//     return area 
// }
// }

// const rect=new Rectangle(2,4);
// const ans=rect.area();
// console.log(ans);


class Square{
    constructor(side){
        this.side=side;
    }

 area(){
    return this.side*this.side;
 }
}

  const sqr=new Square(2);
console.log(sqr.area());
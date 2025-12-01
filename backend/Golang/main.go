// package main

// import "fmt"

// var name = "ayushman"
// var fruit string="hello"

// func print(username string ){
// 	fmt.Println(username)
// }

// func number (numbers ...int){
// 	fmt.Println(numbers)
// }

// func add(x int , y int ) int {
// 	return x+y
// }


// func phone(name *string, age int){
// 	if age > 75 {
// 		panic("age is greter yours ")
// 	}
// }

// // type Person struct {
// // 	firstname string 
// // 	lastname string 
// // }

// // func (p Person) fullname() string {
// // fmt.Println(p.lastname)
// // // return p.firstname+p.lastname
// // }

// func hello(){
// 	defer fmt.Println("hello")
// 	fmt.Println("world")
// }


// func main() {
// // 	// println("hello world ")
// // 	// num:=12
// // 	// fmt.Println(num)
// // 	// fmt.Println(name)
// // 	// fmt.Println(fruit )
// // 	// var one ,two ,three ,four int =1,2,3,4
// // 	// fmt.Println(one,two,three,four)

// // 	// var (
// // 	// 	num1 int 
// // 	// 	ge string
// // 	// 	number int =1
// // 	// 	greeting string ="good morning"
// // 	// )

// // 	// fmt.Println(num1,number,ge,greeting)
// // 	// fmt.Println(two>three)
// // 	// password :="120932"
	
// // 	// num4:=2

// // 	// if (num4>7) {
// // 	// 	fmt.Println("hello")
// // 	// } else{
// // 	// 	fmt.Println("no")
// // 	// }

// // // for x:=10; x<11; x++ {
// // // 	fmt.Println(x)
// // // }

// // // x:=1
// // // for x<=5 {fmt.Println(x)
// // // 	 x++}


// // // x:=1;

// // // switch x{
// // // case 1: fmt.Println("sunday")
// // // case 2: fmt.Println("2")
// // // default: fmt.Println("defalt ")
// // // }


// // array 
// // var arr=[3] int {1,2,3}
// // fmt.Println(arr)


// // arr2:=[4] int{1,2,3,4}
// // fmt.Println(arr2,cap(arr2))

// // for i:=0; i<len(arr2); i++ {
// // 	fmt.Println(arr2[i]);
// // }

// //slice can inc and dec their size its like dynamic array 

// // num:=[]string{"hello","ayushan","go is beast "}
// // fmt.Println(num)
// // fmt.Println(num[:])
// // fmt.Println(num[1:3])
// // num1 :=append(num,"ayush","run","agan")
// // fmt.Println(num1);

// //make (make([]type, length,caapcity))

// // for index,value :=range num{
// // 	fmt.Println(index,value)
// // }
// //  info := map [string]int{
// // 	"ayush":12,
// // 	"gu[ta]":112,
// // 	"good":12,
// //  }

// //  fmt.Println(info)
// //  info["ayush"]=13;
// //   fmt.Println(info)


// //   for value := range info{
// // 	fmt.Println(value)
// //   }

// // type Person struct {
// // 	name string
// // 	job string
// // 	phone int
// // 	availabale bool
// // }
 
// // type info struct {
// // 	Person
// // 	address string
// // }

// // a:=info{
// // 	Person:Person{
// // 		name:"ayushman",
// // 		job:"bad",
// // 	},
// // 	address: "babaganj",
// // }
// // fmt.Println(a.address)

// // var user Person

// // user.name="ayushm"
// // user.job="hfhe"

// // h:= Person{
// // 	name:"h",
// // 	job:"goood",
// // }
// // fmt.Println(user)
// // fmt.Println(h)


// //anamous struct 
// //  h := struct{
// // 	name string
// // 	lname string
// //  }{
// // 	name:"ayush",
// // 	lname:"gupta",
// //  }
// //  fmt.Println(h.name)




// // print("ayushman")
// // number(1,2,2,3,2)
// // fmt.Println((add(1,2)))

// // f:= func() {
// // 	fmt.Println("hello")
// // }
// // f();

// // func(){
// // fmt.Println("anamous functon")
// // }()

// // methods 

// // define a type 
// //  define a method for the type 
// // create a person instance 
// //call the method on person instance

// // ayush:=Person{
// // 	firstname:"ayush",
// // 	lastname:"gupta",
// // }
// // (ayush.fullname())

// // person :=Person(firstname:"ayush", lastname:"gupta")
// // fullname:= person.fullname()
// // fmt.Println(fullname)

// //defer keyword 
// // hello()


// //scope 
// //pointer
// x:=12;
// var pointer *int=&x
// fmt.Println("address of x" , &x);
// fmt.Println("value of x" , *pointer);
// fmt.Println("value of x " , x);
// fmt.Println("value of p that is address of x " , pointer);
// fmt.Println("address of p" , &pointer);


// // panic()

// // name:="ayushman"
// // age:= 79

// // phone(&name, age)


// }
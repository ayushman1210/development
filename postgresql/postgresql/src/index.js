require('dotenv').config();
console.log(process.env.DATABASE_URL)

const { createTable , insert, fetchuser, updateuser, deleteuser }=require('./concept/basic-query')



async function testquery(){
    try {
        // await createTable();
        // await insert('ayushman','ayushman@gmal.com');
        //     await insert('ayushan','ayushman@gail.com');
        //         await insert('aushman','ayushman@mail.com');
        //             await insert('aushman','ayushmn@gmail.com');
        //                 await insert('ayshman','ayshman@gmail.com');
        // await fetchuser()
        await updateuser('ayushan',"asgdjgmail.com")
        await deleteuser('ayshman')
        console.log('deleted success fullu')
        console.log('updated successfully')
    } catch (error) {
        console.log(error)
    }
}



async function testallquery(){
    try {
        await testquery()
    } catch (error) {
        console.log(error)
    }
}

testallquery()
Commands to run 

// C:\MongoDB\Server\4.2\bin\mongod.exe --dbpath=C:\mongo-data -->start server

1. npm init -y
2. npm i mongodb@3.1.10
3. npm audit fix //if any vulnerability found
4. npm i mongoose@5.3.16
5. npm i validator@10.9.0
after installing postman
6. npm i nodemon --save--dev
7. npm i express@4.16.4
8. npm i bcryptjs@2.4.3
9. npm i jsonwebtoken@8.4.0

//important notes

1. create a model

const task=mongoose.model('task',{
    description:{
        type:String
    },
    completed:{
        type:bool
    }
})

const Task=new task({
    description:learn,
    completed:false
})

Task.save().then(()=>
{
    console.log('Done'+Task)
}).catch(()=>
{
    console.log(error)
})


2. Added features for mongoose data

    required:Make any field compulsary
    default:add a default value
    validate : choose to validate your data
    and lot more

There are also type specific options
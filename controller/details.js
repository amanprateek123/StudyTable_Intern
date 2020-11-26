const Parent = require('../models/parent')
const Teacher = require('../models/teacher')
const Student = require('../models/student')
const School = require('../models/school')

exports.postDetails = async(req,res)=>{
     const main = req.body.main
     const title = req.body.value
     const p = req.body.parent
     const s = req.body.student
     const sc = req.body.school
     const t = req.body.teacher
     if(title==='parent'){
          const parent = new Parent()
          parent.name = main.name
          parent.email = main.email
          parent.phone = main.phone
          parent.message = main.message
          parent.child = p.child1
          parent.class = p.class1
          parent.city = p.city1
          try{
               await parent.save()
               res.json({msg:'Details upload successfully',status:200})
               console.log('Success!')
          }
          catch(e){
               res.json({error:e.message,status:404})
               console.log(e)
           }
     }
     if(title==='school'){
          const school = new School()
          school.name = main.name
          school.email = main.email
          school.phone = main.phone
          school.message = main.message
          school.class = sc.class3
          school.school = sc.school3
          school.city = sc.city3
          try{
               await school.save()
               res.json({msg:'Details upload successfully',status:200})
               console.log('Success!')
          }
          catch(e){
               res.json({error:e.message,status:404})
               console.log(e)
           }
     }
     if(title==='student'){
          const student = new Student()
          student.name = main.name
          student.email = main.email
          student.phone = main.phone
          student.message = main.message
          student.school = s.school2
          student.class = s.class2
          student.city = s.city2
          try{
               await student.save()
               res.json({msg:'Details upload successfully',status:200})
               console.log('Success!')
          }
          catch(e){
               res.json({error:e.message,status:404})
               console.log(e)
           }
     }
     if(title==='teacher'){
          const teacher = new Teacher()
          teacher.name = main.name
          teacher.email = main.email
          teacher.phone = main.phone
          teacher.message = main.message
          teacher.school = t.school4
          teacher.class = t.class4
          teacher.city = t.city4
          try{
               await teacher.save()
               res.json({msg:'Details upload successfully',status:200})
               console.log('Success!')
          }
          catch(e){
               res.json({error:e.message,status:404})
               console.log(e)
           }
     }
}
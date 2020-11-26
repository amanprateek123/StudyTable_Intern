import React,{useState} from 'react'
import {useMutation} from 'react-query'

import Contact from '../components/Contact/Contact'

export default function Contacts(props) {
    const schema = {name:'',email:'',phone:'',message:''}
    const studentSchema = {class2:'',city2:'',school2:''}
    const teacherSchema = {school4:'',class4:'',city4:''}
    const schoolSchema = {school3:'',city3:'',class3:''}
    const parentSchema = {child1:'',class1:'',city1:''}

    const titles = [
        {
          value: 'teacher',
          label: 'Teacher',
        },
        {
          value: 'student',
          label: 'Student',
        },
        {
          value: 'parent',
          label: 'Parent',
        },
        {
          value: 'school',
          label: 'School and Coaching',
        },
      ];
      const [title, setTitle] = useState('teacher');
      const [data,setData] = useState(schema)
      const[studentData,setStudentData] = useState(studentSchema)
      const[teacherData,setTeacherData] = useState(teacherSchema)
      const[parentData,setParentData] = useState(parentSchema)
      const[schoolData,setSchoolData] = useState(schoolSchema)
      const [status,setStatus] = useState({})
      
      console.log(title,data,studentData,teacherData,schoolData,parentData)

      const handleChange = (event) => {
        setTitle(event.target.value);
      };

      const handler = (e) =>{
         setData({...data,[e.target.name]:e.target.value})
      }
      const studentHandle = (e)=>{
          setStudentData({...studentData,[e.target.name]:e.target.value})
      }
      const teacherHandle = (e)=>{
        setTeacherData({...teacherData,[e.target.name]:e.target.value})
    }
    const parentHandle = (e)=>{
        setParentData({...parentData,[e.target.name]:e.target.value})
    }
    const schoolHandle = (e)=>{
        setSchoolData({...schoolData,[e.target.name]:e.target.value})
    }

    //Request from frontend
    const postDetail = ()=>{
      return (
        fetch('/details',{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({main:data,value:title,student:studentData,parent:parentData,teacher:teacherData,school:schoolData})
        }).then(res=>res.json()).then(res=>{
          setStatus(res)
          console.log(res)
          setTimeout(()=>{
             window.location.reload()
          },2500)
        })
      )
    }

    const [detail,meta] = useMutation(postDetail)

    const propData = {
        titles,
        title,
        data,
        studentData,
        teacherData,
        schoolData,
        status,
        parentData,
        handleChange,
        handler,
        studentHandle,
        teacherHandle,
        parentHandle,
        schoolHandle,
        detail
      }

    return (
        <React.Fragment>
           <Contact propData={propData} />
        </React.Fragment>
    )
}

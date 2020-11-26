import React from 'react'
import './Contact.scss'
import {TextField,Button,TextareaAutosize,Snackbar} from '@material-ui/core'

export default function Contact(props) {
        const parent = (
          <React.Fragment>
              <TextField required id="standard-basic" name="child1" label="Child Name" fullWidth variant="outlined" className="inp" value={props.propData.parentData.child1} onChange={props.propData.parentHandle}  />
              <TextField required id="standard-basic" label="Class" name="class1" fullWidth variant="outlined" className="inp" value={props.propData.parentData.class1} onChange={props.propData.parentHandle} />
              <TextField required id="standard-basic" label="City" name="city1" fullWidth variant="outlined" className="inp" value={props.propData.parentData.city1} onChange={props.propData.parentHandle} />
          </React.Fragment>
      )
      const student = (
       <React.Fragment>
          <TextField required id="standard-basic" label="Class" name="class2" fullWidth variant="outlined" className="inp" value={props.propData.studentData.class2} onChange={props.propData.studentHandle}   />
          <TextField required id="standard-basic" label="School Name" name="school2" fullWidth variant="outlined" className="inp" value={props.propData.studentData.school2} onChange={props.propData.studentHandle}/>
          <TextField required id="standard-basic" label="City" name="city2" fullWidth variant="outlined" className="inp" value={props.propData.studentData.city2} onChange={props.propData.studentHandle} />
       </React.Fragment>
      )

      const school = (
        <React.Fragment>
           <TextField required id="standard-basic" label="Name of School/Coaching" name="school3" fullWidth variant="outlined" className="inp" value={props.propData.schoolData.school3} onChange={props.propData.schoolHandle}  />
           <TextField required id="standard-basic" label="City" name="city3" fullWidth variant="outlined" className="inp" value={props.propData.schoolData.city3} onChange={props.propData.schoolHandle} />
           <TextField required id="standard-basic" label="Class" name="class3" fullWidth variant="outlined" className="inp" value={props.propData.schoolData.class3} onChange={props.propData.schoolHandle} />
        </React.Fragment>
       )

       const teacher = (
        <React.Fragment>
           <TextField required id="standard-basic" name="school4"  label="Name of School/Coaching or Independent" fullWidth variant="outlined" className="inp" value={props.propData.teacherData.school4} onChange={props.propData.teacherHandle} />
           <TextField required id="standard-basic" name="class4" label="Class" fullWidth variant="outlined" className="inp" value={props.propData.teacherData.class4} onChange={props.propData.teacherHandle} />
           <TextField required id="standard-basic" name="city4" label="Address or City" fullWidth variant="outlined" className="inp" value={props.propData.teacherData.city4} onChange={props.propData.teacherHandle} />
           
        </React.Fragment>
       )

       const status = props.propData.status

    return (
        <div className="contact" >
            <div className="head">
               <img src="https://photos.angel.co/startups/i/7262515-c178186d3006ce057a5f6bf7cdf2a78e-medium_jpg.jpg?buster=1571428761" alt="pic" />
               <h2> Contact Us </h2>
            </div>
            <form onSubmit={(e)=>{e.preventDefault();props.propData.detail()}}>
                <div style={{width:'50%',marginRight:'.5em'}} >
                <TextField required id="standard-basic" label="Name" name="name" onChange={props.propData.handler} autoFocus={true} fullWidth variant="outlined" className="inp"   />
                <TextField required id="standard-basic" label="Email" name="email" onChange={props.propData.handler} fullWidth variant="outlined" className="inp" />
                <TextField required id="standard-basic" label="Phone" name="phone" onChange={props.propData.handler} fullWidth variant="outlined" className="inp" />
                <TextField required
                id="outlined-select-currency-native"
                select
                label="Select title"
                value={props.propData.title}
                onChange={props.propData.handleChange}
                SelectProps={{
                  native: true,
                }}
                className="inp"
                fullWidth
                helperText="Please select your title"
                variant="outlined"
             >
                {props.propData.titles.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                 ))}
             </TextField>
              {props.propData.title==="teacher"?teacher:props.propData.title==="parent"?parent:props.propData.title==="school"?school:props.propData.title==="student"?student:null}</div>
              <div style={{width:'50%',marginLeft:'.5em'}} >              
                 <TextareaAutosize aria-label="minimum height" name="message" onChange={props.propData.handler} rowsMin={11} className="textarea" placeholder="Enter your message..!" />
                 <div className="btns">
                   <Button variant="contained" color="inherit" type="submit" > Submit </Button>
                 </div>
                 {status.status===200? <div style={{color:'green',textAlign:'center',margin:'2em 0',fontWeight:'bold'}} > {status.msg} !! </div>:null}
                 
               </div>
            </form>
        </div>
    )
}

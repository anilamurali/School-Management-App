import React, { useState } from 'react'

const Addstudent = () => {
  var [admno,setAdmno]=useState("")
  var [roll,setRoll]=useState("")
  var [name,setName]=useState("")
  var [std,setStd]=useState("")
  var [pname,setPname]=useState("")
  var [Mobile,setMobile]=useState("")
  var [addres,setAddress]=useState("")
  const setData=()=>{
    var data={"admno":admno,"roll":roll,"name":name,"std":std,"pname":pname,"mobile":Mobile,"address":addres}
    console.log(data)
  }
  return (
    <div>
        <div class="container">
  <div class="ror">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Admission Number</label>
          <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Roll Number</label>
          <input onChange={(e)=>{setRoll(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Standard</label>
          <input onChange={(e)=>{setStd(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Parent Name</label>
          <input onChange={(e)=>{setPname(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Mobile Number</label>
          <input onChange={(e)=>{setMobile(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Address</label>
          <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button onClick={setData} class="btn btn-success">SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Addstudent
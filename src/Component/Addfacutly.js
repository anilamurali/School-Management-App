import React, { useState } from 'react'

const Addfacutly = () => {
    var [name,setName]=useState("")
    var [education,setEducation]=useState("")
    var [mobile,setMobile]=useState("")
    var [addres,setAddress]=useState("")
    var [pincode,setPincode]=useState("")
    var [dist,setDist]=useState("")
    const setData=()=>{
        var data={"name":name,"education":education,"mobile":mobile,"address":addres,"pincode":pincode,"dist":dist}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Education</label>
          <input onChange={(e)=>{setEducation(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Mobile</label>
          <input onChange={(e)=>{setMobile(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Address</label>
          <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Pincode</label>
          <input onChange={(e)=>{setPincode(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">District</label>
          <input onChange={(e)=>{setDist(e.target.value)}} type="text" class="form-control"/>
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

export default Addfacutly
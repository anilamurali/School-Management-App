import React, { useState } from 'react'

const Studentsearch = () => {
    var [admno,setAdmno]=useState("")
    const searchData=()=>{
        var data={"admno":admno}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="" class="form-label">Admission Number</label>
          <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" class="form-control"/>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button onClick={searchData} class="btn btn-success">SEARCH</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Studentsearch
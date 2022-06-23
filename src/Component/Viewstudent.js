import React from 'react'
import Header from './Header'

const Viewstudent = () => {
    const data=[{
        "admno":"1",
        "roll":"1",
        "name":"anila",
        "std":"4",
        "pname":"murali",
        "mobile":"122344",
        "addresss":"thadathil"

}]
  return (
    <div>
      <Header/>
      <div class="container">
  <div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
    <table class="table table-hover table-success">
  <thead>
    <tr>
      <th scope="col">ADMISSION NUMBER</th>
      <th scope="col">ROLL NUMBER</th>
      <th scope="col">NAME</th>
      <th scope="col">STANDARD</th>
      <th scope="col">PARENT NAME</th>
      <th scope="col">MOBILE</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map((value,key)=>{
        return <tr>
    <th scope="row">{value.admno}</th>
    <td>{value.roll}</td>
    <td>{value.name}</td>
    <td>{value.std}</td>
    <td>{value.pname}</td>
    <td>{value.mobile}</td>
    <td>{value.addresss}</td>
  </tr>
    })
    }
    
  </tbody>
</table>
    </div>
  </div>
</div>
        
    </div>
  )
}

export default Viewstudent
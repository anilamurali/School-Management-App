import React from 'react'
import Header from './Header'

const Viewfaculty = () => {
    const data=[{
        "name":"anila",
        "education":"MCA",
        "mobile":"17756",
        "address":"thadathil",
        "pincode":"849642",
        "dist":"kollam"

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
      <th scope="col">NAME</th>
      <th scope="col">EDUCATION</th>
      <th scope="col">MOBILE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PINCODE</th>
      <th scope="col">DISTRIC</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((value,key)=>{
            return <tr>
      <th scope="row">{value.name}</th>
      <td>{value.education}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <td>{value.pincode}</td>
      <td>{value.dist}</td>
      
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

export default Viewfaculty
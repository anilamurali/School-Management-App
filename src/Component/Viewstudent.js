import React from 'react'

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
  )
}

export default Viewstudent
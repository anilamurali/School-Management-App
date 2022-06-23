import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link active" to='/' >Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to='/studentview'>View Student</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" to='/addstudent'>Add Student</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" to='/searchstudent'>Search Student</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" to='/viewfaculty'>View Faculty</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" to='/addfaculty'>Add Faculty</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" to='/Searchfaculty'>Search Faculty</Link>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header
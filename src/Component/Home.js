import React, { useState } from 'react'

const Home = () => {
  var [uname,setUname]=useState("")
  var [pass,setPass]=useState("")
  const setaData=()=>{
    var data={"uname":uname,"pass":pass}
    console.log(data)
  }

  return (
    <div>
      <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.guim.co.uk/img/media/34338ef925bc9e17266fcc4299ef9c602358f6a4/0_384_5760_3456/master/5760.jpg?width=1200&quality=85&auto=format&fit=max&s=ce62178acf03b3be47e77fecc7ef6d0a" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.amity.edu/ais/aisv6/assets/images/infrastructure/classrooms/middleroom-3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://image.shutterstock.com/image-photo/elementary-school-science-teacher-uses-260nw-1795173919.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nam facilis iure aliquid provident non quasi itaque sapiente 
                    adipisci ex minus? Laboriosam, nostrum beatae vero fuga ad minus cum porro!</div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos ut pariatur voluptates numquam, est, asperiores velit voluptas
                     perferendis provident quas praesentium. Voluptatum eos ducimus debitis dolor quia esse quis!</div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
                    <h1>Faculty Login</h1>
                    <input onChange={(e)=>{setUname(e.target.value)}} type="text" class="form-control" placeholder="Username"/><br></br>
                    <input onChange={(e)=>{setPass(e.target.value)}} type="text" class="form-control" placeholder="Password"/><br></br>
                    <button onClick={setaData} class="btn btn-success">LOGIN</button>
                </div>
               
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Home
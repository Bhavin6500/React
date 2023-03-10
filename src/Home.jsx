import React from 'react';
import web from "../src/image/develop.jpg";


const Home = () => {
  return(
<>
<section id="header" className = "d-flex align-items-center">
<div className = "container-fluid nav_bg">
    <div className = "row">
        <div className = "col-10 mx-auto">
        <div className='row'>
     <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column  " >
        <h1>Grow your <strong className = "brand-name">business</strong></h1>
        <h2 className = "my-3">Team of Developer making websites</h2>
        <div className= "mt-3">
            <a href = "" className="btn btn-primary rounded-pill">Get started</a>
        </div>
     </div> 
<div className = "col-lg-6  order-1 order-lg-2 header-img">
    <img src={web} className = "img-fluid animated" alt = "homeimg" />
</div>
</div>



        </div>
    </div>
</div>

</section>

</>

  );
}


export default Home;
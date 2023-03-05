import React from 'react';




const Card = (props) => {
  return(
<>
{/* 
<div class="row row-cols-1 row-cols-md-3 g-4 m-2"> */}

  {/* <div class="row">
    <div class="card">
      <img src={props.imgsrc} class="card-img-top" alt="image" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    
</div> */}
  




<div class="row row-cols-3  row-cols-md-3  m-2 ">
  <div class="col mb-4 ">
    <div class="card">
      <img src={props.imgsrc} class="card-img-top" alt="hh" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>


</div>
</>

  );
}


export default Card;
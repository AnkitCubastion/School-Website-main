import React from 'react';

export const LandingCarousel = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg" alt="First slide" style={{ maxHeight: '500px', objectFit: 'contain' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://as1.ftcdn.net/v2/jpg/02/06/98/44/1000_F_206984465_KR5VmeNHo2l3JJOUAzYu8WQ8dR0Em7Pw.jpg" alt="Second slide" style={{ maxHeight: '500px', objectFit: 'contain' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.helpalliance.org/wp-content/uploads/2022/12/en-off-rwanda-aspect-ratio-16-9.png" alt="Third slide" style={{ maxHeight: '500px', objectFit: 'contain' }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
};

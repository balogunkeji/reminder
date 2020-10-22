import React from 'react';
// import image1 from '/birthday1.jpg';

function Reminder() {

  const paragraph = document.querySelector('.para');
  const show = document.querySelector('.showcase-content');
  const showcas = document.querySelector('.showcase');
  
  function handleClick(){
      show.style.display = 'none'
      paragraph.innerHTML = '0 birthday today'
      showcas.style.margin = '15% auto'
      showcas.style.overflow = "hidden"
  }

  return (
    <div className = 'Reminder'>
        <main className="showcase">
        <div className="container">
            <p className="para">5 birthdays today</p>
            <div className="showcase-content">
                <article>
                    <div>
                        <img src= {process.env.PUBLIC_URL +'/birthday1.jpg'} alt="" />
                    </div>
                    <div>
                        <h4>Bertie Yates</h4>
                        <p>29 years</p>
                    </div>
                </article>
                <article>
                    <div>
                    <img src= {process.env.PUBLIC_URL +'/birthday2.jpg'} alt="" />
                    </div>
                    <div>
                        <h4>Hester Hogan</h4>
                        <p>32 years</p>
                    </div>
                </article>
                <article>
                    <div>
                    <img src= {process.env.PUBLIC_URL +'/birthday3.jpg'} alt="" />
                    </div>
                    <div>
                        <h4>Larry Little</h4>
                        <p>36 years</p>
                    </div>
                </article>
                <article>
                    <div>
                    <img src= {process.env.PUBLIC_URL +'/birthday4.jpg'} alt="" />
                    </div>
                    <div>
                        <h4>3Sean Walsh</h4>
                        <p>34 years</p>
                    </div>
                </article>
                <article>
                    <div>
                    <img src= {process.env.PUBLIC_URL +'/birthday5.jpg'} alt="" />
                    </div>
                    <div>
                        <h4>Lola Gardner</h4>
                        <p>29 years</p>
                    </div>
                </article>
            </div>
            <button onClick={handleClick()}>clear all</button>
        </div>
    </main>
    </div>
  );
}

export default Reminder;

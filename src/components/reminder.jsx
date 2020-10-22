import React, { useState } from "react";

function Reminder() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='Reminder'>
      <main
        className='showcase'
        style={{ margin: toggle && "15% auto", overflow: toggle && "hidden" }}
      >
        <div className='container'>
          <p className='para'>
            {toggle ? "0 images/birthday today" : "5 images/birthdays today"}
          </p>
          <div
            className='showcase-content'
            style={{ display: toggle && "none" }}
          >
            <article>
              <div>
                <img src='/images/birthday1.jpg' alt='' />
              </div>
              <div>
                <h4>Bertie Yates</h4>
                <p>29 years</p>
              </div>
            </article>
            <article>
              <div>
                <img src='/images/birthday2.jpg' alt='' />
              </div>
              <div>
                <h4>Hester Hogan</h4>
                <p>32 years</p>
              </div>
            </article>
            <article>
              <div>
                <img src='/images/birthday3.jpg' alt='' />
              </div>
              <div>
                <h4>Larry Little</h4>
                <p>36 years</p>
              </div>
            </article>
            <article>
              <div>
                <img src='/images/birthday4.jpg' alt='' />
              </div>
              <div>
                <h4>3Sean Walsh</h4>
                <p>34 years</p>
              </div>
            </article>
            <article>
              <div>
                <img src='/images/birthday5.jpg' alt='' />
              </div>
              <div>
                <h4>Lola Gardner</h4>
                <p>29 years</p>
              </div>
            </article>
          </div>
          <button onClick={() => setToggle(true)}>clear all</button>
        </div>
      </main>
    </div>
  );
}

export default Reminder;

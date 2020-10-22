import React, { useState } from "react";

function Reminder() {
  const [toggle, setToggle] = useState(false);

  const Reminders = [
    {
      name: "Bertie Yates",
      age: 29,
      image: "birthday1",
    },
    {
      name: "Hester Hogan",
      age: 32,
      image: "birthday2",
    },
    {
      name: "Larry Little",
      age: 35,
      image: "birthday3",
    },
    {
      name: "Sean Walsh",
      age: 34,
      image: "birthday4",
    },
    {
      name: "Lola Gardner",
      age: 32,
      image: "birthday5",
    },
  ];

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
            {Reminders.map((data) => (
              <article>
                <div>
                  <img src={`/images/${data.image}.jpg`} alt='' />
                </div>
                <div>
                  <h4>{data.name}</h4>
                  <p>{data.age} years</p>
                </div>
              </article>
            ))}
          </div>
          <button onClick={() => setToggle(true)}>clear all</button>
        </div>
      </main>
    </div>
  );
}

export default Reminder;

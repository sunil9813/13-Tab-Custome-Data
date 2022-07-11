import React, { useState } from "react"
import data from "./data"

const Tabs = () => {
  const [content, setContent] = useState(data)
  const [info, setInfo] = useState(0)
  const { title, dates, desc } = content[info]

  return (
    <>
      <main>
        <section>
          <div className='container'>
            <div className='button'>
              {content.map((item, index) => (
                <button key={item.id} onClick={() => setInfo(index)} className={`btn ${index === info && "active"}`}>
                  {item.page}
                </button>
              ))}
            </div>
            <div className='content'>
              <h3>{title}</h3>
              <p>{dates}</p>
              {desc.map((duty, index) => (
                <div className='desc'>
                  <i class='fa-solid fa-angles-right'></i>
                  <p>{duty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Tabs

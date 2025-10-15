import React from 'react'
import vector from '../../assets/border-vector.png'
import vector1 from '../../assets/vector-1.png'
import vector2 from '../../assets/vector-2.png'
import vector3 from '../../assets/vector-3.png'
import vector4 from '../../assets/vector-4.png'
import me from '../../assets/me.png'
import { Link } from 'react-router-dom'
import './main.scss'

const Main = () => {
  return (
    <section className="about container">
      <div className="content">
        <div className="hello-message">Hi there 👋 I'm Abdulrahman Ahmed</div>
        <p>
          a passionate Full-Stack JavaScript Developer who builds responsive,
          dynamic web applications that combine creativity and performance.
          Check out my projects or download my resume below!
        </p>
        <Link className="btn">CV Download</Link>
      </div>
      <div className="photo light-pomp">
        <img src={me} alt="me" className="me" />
        <img src={vector} alt="vector" className="border-vector" />
        <img src={vector1} alt="vector" className="vector one" />
        <img src={vector2} alt="vector" className="vector two" />
        <img src={vector3} alt="vector" className="vector three" />
        <img src={vector4} alt="vector" className="vector four" />
      </div>
    </section>
  )
}

export default Main

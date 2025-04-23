import React from 'react'
import './Home.css'
import CodeGithub from '../code/CodeGithub'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className='text'>
          <h5>Hi all. I am</h5>
          <h1>Umid G'aybullayev</h1>
          <h3> >Full Stack developer</h3>
          <p>// complete the game to continue</p>
          <p>// you can also see it on my Github page</p>
          <p>const githubLink = “https://github.com/example/url”</p>
        </div>
        <div className="game">
          <img src={"/Snake Game.png"} />
        </div>
      </div>

      <div className="home-mobile">
        <h5>Hi all. I am</h5>
        <h1>Umid G'aybullayev</h1>
        <h3> >Full Stack developer</h3>

        <p>// find my profile on Github:</p>
          <CodeGithub/>
      </div>
    </>
  )
}

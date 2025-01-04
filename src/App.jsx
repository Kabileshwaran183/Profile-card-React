
function App() {
  
  return (
    <>
    <div className="outer-box">
    <div className="inner-box">

      <img className="prof-img" src="/giphy.webp" alt="profile img" />
      {/* <div className="prof-img"></div> */}

      <div className="prof-section">
        <h2 className="tit-1">Kabileshwaran B</h2>
        <h6 className="tit-2">React Developer</h6>
        <p className="tit-3"><u>webiste-page</u></p>
        <div className="btn-section">
          <button id="mail-btn"><img src="/email.png"/>Email</button>
          <button id="lin-btn"><img src="/linkedin.png"/>LinkedIn</button> 
        </div>
        <h4 className="about">About</h4>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h4 className="interests">Interest</h4>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>

      <div className="footer-section">
        <img className="soc-icons" src="/Twitter Icon.png" alt="twitter" />
        <img className="soc-icons" src="/Facebook Icon.png" alt="facebook" />
        <img className="soc-icons" src="/Instagram Icon.png" alt="instagram" />
        <img className="soc-icons" src="GitHub Icon.png" alt="github" />
      </div>

    </div>

    </div>
    </>
  )
}

export default App

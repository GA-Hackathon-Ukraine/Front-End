import './About.styles.css'

const About = () => {
  return (
    <div className="aboutPage">
      <h1 className='title'>About</h1>
      <div className="cardContainer">
        <div className="card">
          <img src="Bulls_Eye.svg" alt="bulls eye" className="card-img"with="75" height="75"></img>
          <h3 className="card-text">Mission</h3>
          <p>Robota strives to stand in solidarity with the people of Ukraine in anyway we can; our goal is to connect Ukrainian Refugees with prospective employers and the resources they will need locally to adapt to life in Washington State. </p>
        </div>
        <div className="card">
          <img src="BlueYellowVision.svg" alt="blue and yellow vision"  className="card-img" with="75" height="75"></img>
          <h3 className="card-text">Vision</h3>
          <p>The U.S.-Ukrainian relationship serves as a pillar of unity that aims to help resetore democracy, human rights, and hope in a nation devastated by border conflicts. We hope that the people of Ukraine can keep the faith, and eventually come together to rebuild an even stronger nation. </p>
        </div>
        <div className="card">
          <img src="UkraineHeartinHands.svg" alt="ukraine heart in hands" className="card-img"with="75" height="75"></img>
          <h3 className="card-text">Values</h3>
          <p>During times of war, it is vital to help those fleeing from serious and forever life-changing circumstances and maintain hope. The U.S.-Ukrainian relationship serves as a pillar of unity that aims to resetore democracy, human rights, and hope in a nation devastated by border conflicts. </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default About
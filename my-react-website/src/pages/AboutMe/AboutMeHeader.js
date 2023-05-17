import "../../style/AboutMeHeader.css"

const AboutMeHeader = () => {
    return (
    <>
        {/* <div className="about-me-header">
            <img src={require("../../assets/monstera.jpg")} alt="Monstera" />
        </div> */}



        <div className="about-me-header" style={{ backgroundImage: `url(${require("../../assets/monstera.jpg")})` }}>
            <div className="about-me-header-text">
            <p>My name is Konrad Hernandez and I am currently a computer science major, math minor, in my last semester at California State University of Long Beach. The intricacies of game development began to lure my eye and after starting to develop my first game through Unity, the passion began.</p>
            </div>
            <div className="about-me-header-rnd-image">
                <img src={require("../../assets/profilepic.png")} alt="profile pic" />
            </div>
        </div>
    </>
    );
  };
  
export default AboutMeHeader;
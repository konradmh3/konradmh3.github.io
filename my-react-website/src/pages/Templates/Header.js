import "../../style/Header.css"

const Header = (props) => {
    return (
    <>
        <div className="about-me-header" style={{ backgroundImage: `url(${require("../../assets/monstera.jpg")})` }}>
            <div className="about-me-header-text">
            <p>{ props.page }</p>
            </div>
            <div className="about-me-header-rnd-image">
                <img src={require("../../assets/profilepic.png")} alt="profile pic" />
            </div>
        </div>
    </>
    );
  };
  
export default Header;
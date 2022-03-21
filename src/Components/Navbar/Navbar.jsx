import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor:"pink",
          height: "50px"

        }}>
          <div className="navbar" style={{
            width : "60%",
            display : "flex",
            gap : "10px",
            marginTop :"10px",
          justifyContent: "center"

          }}>
        <Link to="/" className="home">Home</Link>
        <Link to="/mystery" className="mystery">Mystery</Link>
        <Link to="/technology" className="technology">Technology</Link>
        <Link to="mythology" className="mythology">Mythology</Link>
        <Link to="history" className="history">History</Link>
          </div>
        </nav>
    </>
  );
};

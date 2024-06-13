import AuthAgent from "../AuthAgent";
import NavBar from "../Navbar";
import Footer from "../Footer";

function RouteComponent({ children }) {
  return (
    <>
      <AuthAgent>
        <NavBar />
        {children}
        <Footer/>
      </AuthAgent>
    </>
  );
}

export default RouteComponent;

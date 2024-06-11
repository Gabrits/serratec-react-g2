import AuthAgent from "../AuthAgent";
import NavBar from "../Navbar";

function RouteComponent({ children }) {
  return (
    <>
      <AuthAgent>
        <NavBar />
        {children}
      </AuthAgent>
    </>
  );
}

export default RouteComponent;

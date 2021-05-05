import NavBar from "compoments/NavBar";
import Footer from "compoments/Footer";


function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1  className="text-primary">React Spring Course</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

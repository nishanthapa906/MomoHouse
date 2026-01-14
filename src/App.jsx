import AppRoutes from "./components/common/AppRoutes";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header/>
      <div className="min-h-190 bg-gray-200" >
        <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Sumbawa from "./component/sumbawa/Sumbawa";
import Ksb from "./component/ksb/Ksb";
import AboutUs from "./component/Aboutus/AboutUs";
import Transaksi from "./component/Transaksi/Transaksi";
import Login from "./component/Login/Login";
import Footer from "./component/Footer/Footer";
import Register from "./component/Register/Register";
import ConfirmTransaksi from "./component/Transaksi/ConfirmTransaksi";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sumbawa" element={<Sumbawa />} />
        <Route path="ksb" element={<Ksb />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="transaksi/:tujuan/:id" element={<Transaksi />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="ConfirmTrnasaksi" element={<ConfirmTransaksi />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

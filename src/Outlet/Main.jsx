import { Outlet } from "react-router-dom";
import NavBer from "../Page/Shared/NavBer/NavBer";
import Footer from "../Page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
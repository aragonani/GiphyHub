import {Outlet} from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="bg-fuchsia-950 text-white text-shadow-lg min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

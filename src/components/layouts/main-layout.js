import { Outlet } from "react-router";

function MainLayout() {

    return (
        <div className="main-layout">
            <Outlet />
        </div>
    );
}

export default MainLayout;
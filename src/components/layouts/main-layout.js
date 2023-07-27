import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function MainLayout() {

    return (
        <div className="main-layout">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default MainLayout;
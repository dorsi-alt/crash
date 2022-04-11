import { TopHeader } from "../Components/Header/DesktopHeader";
import { NavBar } from "../Components/NavBar/DesktopNavBar"
import { Page } from "./desktopStyles"

function DesktopView() {
  return (
      <Page>
        <TopHeader/>
        <NavBar/>
      </Page>
    );
}

export default DesktopView;
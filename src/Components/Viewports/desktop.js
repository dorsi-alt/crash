import { TopHeader } from "../Header/DesktopHeader";
import { NavBar } from "../NavBar/DesktopNavBar"
import { Page } from "./desktopStyles"
import { Crash } from "../Games/Crash/crash"

function DesktopView() {
  return (
      <Page>
        <Crash/>
      </Page>
    );
}

export default DesktopView;

import DesktopView from "./Viewports/desktop";
import { useMediaQuery } from "react-responsive";

function App() {

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });
  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)"
  });
  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)"
  });

  return (
    <>
    {isDesktop  && <DesktopView/>}
    </>
  );
}

export default App;

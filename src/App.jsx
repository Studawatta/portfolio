import { useState } from "react";
import { Home } from "./pages";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-white dark:bg-black">
        <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </div>
  );
};

export default App;

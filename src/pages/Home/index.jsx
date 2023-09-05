import { Footer, Navbar } from "../../components";
import { Landing, About, Work, Contact } from "../../modules";
import { styles } from "../../styles";
const Home = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className={`${styles.paddingX} mx-auto max-w-7xl`}>
        <Landing darkTheme={darkTheme} />
        <About darkTheme={darkTheme} />
        <Work darkTheme={darkTheme} />
        <Contact darkTheme={darkTheme} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

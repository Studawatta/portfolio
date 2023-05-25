import { Footer, Navbar } from "../../components";
import { Landing, About, Work, Contact } from "../../modules";
import { styles } from "../../styles";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={`${styles.paddingX} mx-auto max-w-7xl`}>
        <Landing />
        <About />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

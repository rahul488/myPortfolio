import "./styles.css";
import { Box } from "@mui/material";
import IntroSection from "./components/IntroSection/IntroSection";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experiences/Experience";
import Connect from "./components/ConnectMe/Connect";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Box sx={{ paddingBottom: "100px" }}>
      <Header />
      <IntroSection />
      <Skills />
      <Experience />
      <Connect />
      <Footer />
    </Box>
  );
}

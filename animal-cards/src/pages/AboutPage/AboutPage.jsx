import Box from "../../components/Box/Box";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <Box>
        <div className="textContainer">
          <h1>About Animal Database</h1>
          <p>
            Animal Database is a page where you can register animals and their
            class creating a card list that you can navigate and filter
          </p>
        </div>
      </Box>
    </div>
  );
};

export default AboutPage;

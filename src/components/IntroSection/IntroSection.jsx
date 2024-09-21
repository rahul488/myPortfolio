import { Box, Typography } from "@mui/material";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <Box className="name-container" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" className="animated-name">
        Rahul Das
      </Typography>
      <Typography variant="subtitle1" className="animated-designation">
        Full Stack Developer
      </Typography>
      <Typography
        variant="body1"
        className="animated-description"
        sx={{ mt: 2, px: 3 }}
      >
        A passionate software developer with 3.5 years of experience in building
        scalable, high-performance applications. I specialize in full-stack
        development and enjoy working on innovative projects that push the
        boundaries of technology.
      </Typography>
    </Box>
  );
};
export default IntroSection;

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./Experience.css"; // CSS file for styles and animations

const experiences = [
  {
    company: "Programmers.io",
    duration: "2021 - 2024",
    designation: "Frontend Engineer",
    work: "Developed and maintained user-friendly web applications, focusing on responsive design and performance optimization.",
    techStack: "React, JavaScript, jQuery, HTML, CSS",
    image: "/pio.png",
  },
  {
    company: "Intellect Design Arena Ltd",
    duration: "2024 - Present",
    designation: "Product Engineer",
    work: "Supporting bank customers in implementing new features and requirements, with a strong emphasis on security and user experience.",
    techStack:
      "Java, Spring Boot, Oracle, Postgres, JavaScript, JSP, HTML, CSS",
    image: "/intellect2.webp", // Update with your logo path
  },
];

const Experience = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 5 }}>
      <Typography variant="h4" className="experience-header">
        Experience
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className="grid-container"
      >
        {experiences.map((exp, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={index}
            className="fade-in"
          >
            <Box className="experience-item">
              <img
                src={exp.image}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
              <Typography variant="h6" className="company-name">
                {exp.company}
              </Typography>
              <Typography variant="subtitle1" className="duration">
                {exp.duration}
              </Typography>
              <Typography variant="body1" className="designation">
                {exp.designation}
              </Typography>
              <Typography variant="body2" className="work-description">
                {exp.work}
              </Typography>
              <Typography variant="body2" className="tech-stack">
                {exp.techStack}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;

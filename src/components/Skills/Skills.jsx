import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiNextdotjs,
  SiTypescript,
  SiJquery,
} from "react-icons/si";
import "./Skills.css"; // CSS for animation

const skills = [
  { name: "JAVA", icon: <FaJava size={50} />, id: 1 },
  { name: "SPRING BOOT", icon: <SiSpringboot size={50} />, id: 2 },
  { name: "MYSQL", icon: <SiMysql size={50} />, id: 3 },
  { name: "ORACLE", icon: <SiOracle size={50} />, id: 4 },
  { name: "HTML", icon: <FaHtml5 size={50} />, id: 5 },
  { name: "CSS", icon: <FaCss3Alt size={50} />, id: 6 },
  { name: "JAVASCRIPT", icon: <FaJs size={50} />, id: 7 },
  { name: "TYPESCRIPT", icon: <SiTypescript size={50} />, id: 8 },
  { name: "REACT JS", icon: <FaReact size={50} />, id: 9 },
  { name: "NEXT JS", icon: <SiNextdotjs size={50} />, id: 10 },
  { name: "JQUERY", icon: <SiJquery size={50} />, id: 11 },
];

const Skills = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 5 }}>
      <Typography variant="h4" className="skills-header">
        My Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={skill.id}>
            <Box className="skill-item" sx={{ textAlign: "center", p: 2 }}>
              <Box className="icon-box">
                <div className="icon">{skill.icon}</div>{" "}
                {/* Apply icon class here */}
              </Box>
              <Typography variant="h6" className="skill-name">
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;

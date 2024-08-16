import React from "react";
import Typewriter from "typewriter-effect";
import { Grid } from "@mui/material";
import { Character, Heading, HomeContainer, Wave } from "./home.styles";
import CharacterImg from '../../assets/home/character.png'

const Home = () => {
  return (
      <HomeContainer container spacing={2}>
        <Grid md={7} xs={12} justifyContent={"center"} >
          <Heading>Hello! <Wave>&#128075;</Wave></Heading>
          <Heading>I'M <span>Nick Yoon</span></Heading>
          <Heading>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Freelancer",
                  "Software Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 75,
              }}/>
            </Heading>
        </Grid>
        <Grid md={5} xs={12}>
          <Character src={CharacterImg} alt="character"/>
        </Grid>
      </HomeContainer>
  );
}

export default Home;

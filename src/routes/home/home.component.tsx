import Typewriter from "typewriter-effect";
import { Grid } from "@mui/material";
import { Answer, Description, FullImage, Heading, HomeContainer, Wave } from "./home.styles";
import CharacterImg from '../../assets/home/character.png'
import TriviaImg from '../../assets/home/trivia.png'
import { useEffect, useState } from "react";

const Home = () => {
  const [isDesktop, seIsDesktop] = useState(true);
  useEffect(() => {
    window.innerWidth > 1280 ? seIsDesktop(true) : seIsDesktop(false);
  }, [isDesktop]);
  return (
      <HomeContainer container>
        <Grid item md={7} xs={12} justifyContent={"center"} >
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
            <Heading>Thank you for visiting my portfolio!</Heading>
        </Grid>
        <Grid item md={5} xs={12}>
          <FullImage src={CharacterImg} alt="character"/>
        </Grid>
        <Grid item md={3} xs={5}>
          <FullImage src={TriviaImg} alt="character"/>
        </Grid>
        <Grid item md={9} xs={12}>
          <Heading>A LITTLE <span>TRIVIA</span> ABOUT MYSELF</Heading>
          <Description>
            <ul>
            <span>({isDesktop?"Hover":"Click"} to Reveal!)</span>
              <li><span className="purple">Where I am</span>: <Answer className="revealed">From Korea🇰🇷 Living in Canada🇨🇦</Answer></li>
              <li><span className="purple">Hobbies</span>: <Answer>Hiking, Video Game (Making one too!), Drawing, GYM</Answer></li>
              <li><span className="purple">Favorite TV Show</span>: <Answer>Friends</Answer></li>
              <li><span className="purple">Favorite Movie</span>: <Answer>Before Sunrise</Answer></li>
            </ul>
          </Description>
        </Grid>
      </HomeContainer>
  );
}

export default Home;

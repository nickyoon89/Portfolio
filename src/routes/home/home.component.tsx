import Typewriter from "typewriter-effect";
import { Grid } from "@mui/material";
import { Description, FullImage, Heading, HomeContainer, Wave } from "./home.styles";
import CharacterImg from '../../assets/home/character.png'
import TriviaImg from '../../assets/home/trivia.png'

const Home = () => {
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
              <li>From <span className="blue">Ko</span><span className="red">rea</span>, Living in <span className="red">C</span>a<span className="red">na</span>d<span className="red">a</span></li>
              <li><span>HOBBY</span>: Hiking, Video Gaming (Trying to make one too!), GYM</li>
              <li></li>
            </ul>
          </Description>
        </Grid>
      </HomeContainer>
  );
}

export default Home;

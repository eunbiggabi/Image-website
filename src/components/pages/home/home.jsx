import {
  HomeSection,
  HomeContainer,
  HomeMainContainer,
  HomeInfo,
  HomeTitle,
  HomeDescription,
  HomeButton,
  HomeMainImage,
  HomeSideContainer,
  HomeSideImage1,
  HomeSideImage2,
  HomeSideImage3,
} from "./home.styles";
import MainImage from "../../../assets/images/home/profile.jpeg";
import SideImage1 from "../../../assets/images/home/homeSide1.jpeg";
import SideImage2 from "../../../assets/images/home/homeSide2.jpeg";
import SideImage3 from "../../../assets/images/home/homeSide3.jpeg";
import { Button } from "../../button/button.styles";

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeMainContainer>
          <HomeInfo>
            <HomeTitle>I am Chloe, sharing my daily photo here!</HomeTitle>
            <HomeDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              cumque, officia adipisci veniam iusto animi! Magni doloremque,
              dicta quod beatae labore nemo molestias distinctio facere ex cum
              est cumque! Distinctio.
            </HomeDescription>
            <Button bg="red" />
          </HomeInfo>
          <HomeMainImage src={MainImage} />
        </HomeMainContainer>
        <HomeSideContainer>
          <HomeSideImage1 src={SideImage1} />
          <HomeSideImage2 src={SideImage2} />
          <HomeSideImage3 src={SideImage3} />
        </HomeSideContainer>
      </HomeContainer>
    </HomeSection>
  );
}

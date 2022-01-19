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
  HomeSideInfo,
  HomeSideTitle,
  HomeSideDesciption,
} from "./home.styles";
import MainImage from "../../../assets/images/home/profile.jpeg";
import SideImage1 from "../../../assets/images/home/homeSide1.jpeg";
import SideImage2 from "../../../assets/images/home/homeSide2.jpeg";

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
            <HomeButton />
          </HomeInfo>
          <HomeMainImage src={MainImage} />
        </HomeMainContainer>
        <HomeSideContainer>
          <HomeSideImage1 src={SideImage1} />
          <HomeSideInfo>
            <HomeSideTitle>I am a Fruit girl</HomeSideTitle>
            <HomeSideDesciption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              deleniti debitis, fuga, eum nisi harum, nobis suscipit nulla est
              nam ullam dicta tempore explicabo deserunt recusandae laborum
              blanditiis magni perferendis?
            </HomeSideDesciption>
          </HomeSideInfo>
          <HomeSideImage2 src={SideImage2} />
        </HomeSideContainer>
      </HomeContainer>
    </HomeSection>
  );
}

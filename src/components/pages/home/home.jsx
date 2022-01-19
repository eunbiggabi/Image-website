import {
  HomeSection,
  HomeContainer,
  HomeMainContainer,
  HomeInfo,
  HomeTitle,
  HomeDescription,
  HomeButton,
  HomeMainImage,
  HomeSide,
  HomeSideImage1,
  HomeSideImage2,
  HomeSideTitle,
  HomeSideDesciption
} from "./home.styles";
import MainImage from '../../../assets/images/home/profile.jpeg'

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
        <HomeSide>
          <HomeSideImage1 src="images/home/homeSide1.jpeg" />
          <HomeSideImage2 src="images/home/homeSide2.jpeg" />
          <HomeSideTitle>This is Side title</HomeSideTitle>
          <HomeSideDesciption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            deleniti debitis, fuga, eum nisi harum, nobis suscipit nulla est nam
            ullam dicta tempore explicabo deserunt recusandae laborum blanditiis
            magni perferendis?
          </HomeSideDesciption>
        </HomeSide>
      </HomeContainer>
    </HomeSection>
  );
}

import { HomeSection, HomeContainer, HomeTitle } from "./home.styles";

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeMain>
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
          <HomeImage />
        </HomeMain>
        <HomeSide>
          <HomeSideImage1 />
          <HomeSideImage2 />
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

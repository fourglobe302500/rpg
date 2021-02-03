import { Header } from "../components/Header";

const IndexPage = () => {
  return (
    <div>
      <Header
        links={[
          { href: "/game-manager", label: "Game Manager" },
          { href: "/rpg", label: "Play" },
        ]}
        mainText="RPG GAME"
      ></Header>
    </div>
  );
};

export default IndexPage;

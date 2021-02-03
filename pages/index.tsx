import { Header } from "../components/Header";

const IndexPage = () => {
  return (
    <div>
      <Header
        links={[
          { href: "/game-manager", label: "Game Manager" },
          { href: "/rpg", label: "Play" },
        ]}
      ></Header>
    </div>
  );
};

export default IndexPage;

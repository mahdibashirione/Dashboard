import ListMostPlayed from "../components/ListMostPlayed";
import ListTopArtist from "../components/ListTopArtist";

const HomePage = () => {
  return (
    <article className="container w-full py-4">
      <ListTopArtist />
      <ListMostPlayed />
    </article>
  );
};

export default HomePage;

import "C:/Users/jaior/Desktop/Nuevos proyectos/React-curso de youtube/projects/funcionalidad-twitter/src/App.css";
import TwitterFollowCard from "./twitter-follow-card";

//** Podemos darle un estilo especial ala sección para no darselo general */
import "./App.css";

const users = [
  {
    userName: "midudev",
    name: "midu Orozco Guerra",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "name",
    name: "Carlos Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: true,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;

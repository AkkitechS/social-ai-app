import Login from "./components/Login";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Options from "./components/Options";
import Post from "./components/Post";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <Navigation />
      <Main>
        <Options />
        <Post />
        <ProfileCard />
      </Main>
    </div>
  );
};

export default App;

// c1 131b23 c2 1d2d44 c3 31415e

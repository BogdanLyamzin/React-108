import { AiFillApple } from "react-icons/ai";

import Button from "./components/Button/Button";
import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";

import profilesData from "../profiles.json";

function App() {
  return (
    <div>
      <h1>Hello FSON-108!🎉</h1>
      <div>
        <AiFillApple size={48} color="red" />
      </div>
      <Button>Click me</Button>
      <Button success>Click me</Button>
      <Button outline success>Click me</Button>
      <Section title="Test">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora.
        </p>
        <button type="button">Click to increase your money</button>
      </Section>

      <Section title="User list">
        {profilesData.map((profileItem) => {
          return (
            <Profile
              key={profileItem.email}
              name={profileItem.name}
              phone={profileItem.phone}
              status={profileItem.status}
              email={profileItem.email}
              hasPhysicalAddress={profileItem.hasPhisicalAddress}
            />
          );
        })}
      </Section>
    </div>
  );
}

export default App;

import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

// import { Button, Container, InputGroup } from 'reactstrap';
// import { ThemeContext, themes } from "./components/theme";

export default function App() {
  const [fan, setFan] = useState("");
  // const [darkMode, setDarkMode] = React.useState(true);

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <Header fan={fan} />
      <hr />
      <Content />
      <Footer />
    </DefaultContext.Provider>
  );
}

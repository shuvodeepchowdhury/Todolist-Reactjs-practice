import Header from "./components/Header";
import Listitems from "./components/Listitems";
import Ifcondition from "./components/Ifcondition";
import Container from "./components/Container";
import Inputbox from "./components/Inputbox";
import { useState } from "react";

function App() {
  const [myitems, setMyItems] = useState([]);

  const onclicked = (items) => {
    console.log(`${items} is clicked`);
  };

  const [inistate, statechange] = useState("");

  // Function to add a new item to the list
  const addItem = () => {
    if (inistate.trim() !== "") {
      setMyItems((prevItems) => [...prevItems, inistate]); // Add new item to the list
      statechange(""); // Clear the input field
    }
  };

  // Function to delete an item from the list
  const deleteItem = (indexToRemove) => {
    setMyItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <Container>
        <Header />
        <Ifcondition />
        <Inputbox
          statechange={statechange}
          addItem={addItem}
          inistate={inistate}
        />
        <Listitems
          inistate={inistate}
          itemthrow={myitems}
          onclicked={onclicked}
          deleteItem={deleteItem}
        />
      </Container>
    </>
  );
}

export default App;

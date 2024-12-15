import styles from "./inputbox.module.css";

const Inputbox = ({ statechange, addItem, inistate }) => {
  // Handle input change
  const onchangeevent = (event) => {
    statechange(event.target.value); // Update the input value in App.js
  };

  // Handle key press (Enter key) to add an item
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem(); // Call the addItem function when Enter is pressed
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputbox}
        type="text"
        placeholder="Type anything to get add"
        value={inistate} // Bind input value to state
        onChange={onchangeevent}
        onKeyPress={handleKeyPress} // Trigger addItem on Enter key press
      />
      <button
        className={styles.addButton}
        onClick={addItem} // Trigger addItem on button click
      >
        Add
      </button>
    </div>
  );
};

export default Inputbox;

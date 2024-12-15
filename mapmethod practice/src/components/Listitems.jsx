import styles from "./Buttoninner.module.css";

function Listitems({ itemthrow, onclicked, deleteItem }) {
  return (
    <ul className="list-group">
      {itemthrow.map((items, index) => (
        <li className="list-group-item" key={index}>
          {" "}
          <input type="checkbox" style={{ marginRight: "0.5rem" }} />
          <span>{items}</span>
          <button
            className={styles.Buttoninner}
            onClick={() => onclicked(items)}
          >
            Buy
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => deleteItem(index)} // Call deleteItem when clicked
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Listitems;

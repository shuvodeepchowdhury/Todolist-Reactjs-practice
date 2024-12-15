const Ifcondition = () => {
  const myitems = ["map1", "map2", "map3", "map4", "map5", "map6"];
  return (
    <>
      {/* conditional rendering if the food item is null its like a if else statement  since we have comment out our myitems*/}
      {/* {myitems.length === 0 ? <h3> if statement demo using ternary operator </h3> : null} */}
      {myitems.length === 0 && <h3>returning using conditional operator</h3>}
    </>
  );
};

export default Ifcondition;

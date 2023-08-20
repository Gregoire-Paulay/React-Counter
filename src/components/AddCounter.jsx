const AddCounter = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        const counterCopy = [...counter];
        if (counterCopy.length < 3) {
          counterCopy.push(0);
          setCounter(counterCopy);
        }
      }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;

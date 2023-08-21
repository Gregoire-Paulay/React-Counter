const AddCounter = ({ counter, setCounter }) => {
  const handleAddCounter = () => {
    const counterCopy = [...counter];
    if (counterCopy.length < 3) {
      counterCopy.push(0);
      setCounter(counterCopy);
    }
  };
  return <button onClick={handleAddCounter}>Add Counter</button>;
};

export default AddCounter;

const Counter = ({ counter, setCounter }) => {
  const handleClick = (index, value) => {
    const counterCopy = [...counter];
    counterCopy.splice(index, 1, value);
    setCounter(counterCopy);
    // localStorage.setItem("counter", JSON.stringify(counterCopy));
  };

  return (
    <div>
      {counter.map((elem, index) => {
        return (
          <div key={index} className="counter">
            <div>
              {elem <= 0 ? (
                <button className="hidden">
                  <i className="fa-solid fa-minus icon"></i>
                </button>
              ) : (
                <button onClick={() => handleClick(index, elem - 1)}>
                  <i className="fa-solid fa-minus icon"></i>
                </button>
              )}
              <p>{elem}</p>
              {elem >= 10 ? (
                <button className="hidden">
                  <i className="fa-solid fa-plus"></i>
                </button>
              ) : (
                <button onClick={() => handleClick(index, elem + 1)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              )}
            </div>

            <button
              onClick={() => {
                handleClick(index, 0);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Counter;

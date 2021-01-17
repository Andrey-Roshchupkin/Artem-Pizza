const { createContext, useContext, useState } = require("react");

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState();

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext)

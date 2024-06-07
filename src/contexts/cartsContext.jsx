import { createContext, useContext, useReducer } from "react";

const initialState = {
  carts: [],
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "carts/add":
      return { ...state, carts: [...state.carts, payload] };
    case "carts/remove":
      const carts = state.carts.filter((cart) => cart.id !== payload);
      return { ...state, carts: carts };
    default:
      return state;
  }
}

const CartsContext = createContext();

function CartsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartsContext.Provider value={{ state, dispatch }}>
      {children}
    </CartsContext.Provider>
  );
}

export function useCarts() {
  const context = useContext(CartsContext);
  if (context === undefined) {
    throw new Error(
      "Do not use userCarts custom hook outside the CartsProvider"
    );
  }
  return context;
}

// export { useCarts };
export default CartsProvider;

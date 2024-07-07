import { createContext, useContext, useReducer, useEffect } from "react";

// Helper function to get the initial state from localStorage
const getInitialCarts = () => {
  // console.log("hello")
  const savedCarts = localStorage.getItem('carts');
  return savedCarts ? JSON.parse(savedCarts) : [];
};

const initialState = {
  carts: getInitialCarts(),
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "carts/add":
      return { ...state, carts: [...state.carts, payload] };
    case "carts/remove":
      return { ...state, carts: state.carts.filter((cart) => cart.id !== payload) };
    case "carts/set":
      return { ...state, carts: payload };
    case "carts/increaseQuantity":
      return {...state, carts: state.carts.map((cart) => {
        if (cart.id === payload) {
          return { ...cart, quantity: cart.quantity + 1 };
        }
        return cart;
      })}
    case "carts/decreaseQuantity":
      return {...state, carts: state.carts.map((cart) => {
        if (cart.id === payload) {
          return { ...cart, quantity: cart.quantity - 1 };
        }
        return cart;
      })}
    case"carts/selectedtoggleItem":
      return {...state, carts: state.carts.map((cart) => {
        if (cart.id === payload) {
          return { ...cart, selected: !cart.selected };
        }
        return cart;
      })}
    case "carts/removeItem":
      return { ...state, carts: state.carts.filter((cart) => cart.id !== payload) };
    default:
      return state;
  }
}

const CartsContext = createContext();

function CartsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save carts to local storage whenever state.carts changes
  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(state.carts));
  }, [state.carts]);

  const cartsNum = state.carts.reduce((acc, cart) => acc + cart.quantity, 0);
  return (
    <CartsContext.Provider value={{ carts: state.carts, cartsNum, dispatch }}>
      {children}
    </CartsContext.Provider>
  );
}

export function useCarts() {
  const context = useContext(CartsContext);
  if (context === undefined) {
    throw new Error(
      "Do not use useCarts custom hook outside the CartsProvider"
    );
  }
  return context;
}

export default CartsProvider;

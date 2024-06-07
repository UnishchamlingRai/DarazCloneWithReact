import CategoriesListName from "../../features/Home/CategoriesListName/CategoriesListName";
import Slider from "../../features/Home/Slider/Slider";

import ProductsContainer from "../../features/Products/ProductsContainer/ProductsContainer";
import style from "./Home.module.css";
function Home() {
  return (
    <div>
      <div className={style.hero}>
        <CategoriesListName />
        <Slider />
      </div>
      <ProductsContainer />
    </div>
  );
}

export default Home;

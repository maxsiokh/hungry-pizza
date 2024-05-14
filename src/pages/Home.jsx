  import React, { useContext, useState, useEffect } from "react";
  import Categories from "../components/Categories";
  import PizzaBlock from "../components/PizzaBlock";
  import PizzaSkeleton from "../components/PizzaSkeleton";
  import { CartContext } from "../components/CartContext";

  const Home = ({ searchValue }) => {
    const { addToCart } = useContext(CartContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategory] = useState(0);

    useEffect(() => {
      fetch(
        `https://65ae21371dfbae409a7403d0.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=rating&order=desc`
      )
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
      window.scrollTo(0, 0);
    }, [categoryId]);

    const handleAddToCart = (pizzaData) => {
      addToCart(pizzaData);
    };

    const filteredPizzas = items.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const pizzasItems = isLoading
      ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
      : filteredPizzas.map((obj) => (
          <PizzaBlock key={obj.id} onAddToCart={handleAddToCart} {...obj} />
        ));

    return (
      <div className='container'>
        <div className='content__top'>
          <Categories
            value={categoryId}
            onClickCategory={(i) => setCategory(i)}
          />
        </div>
        <h2 className='content__title'>Усі піци</h2>
        <div className='content__items'>{pizzasItems}</div>
      </div>
    );
  };

  export default Home;

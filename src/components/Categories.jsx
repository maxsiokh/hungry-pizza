import React from "react";

function Categories({ value, onClickCategory }) {
  const Categories = ["Всі", "М'ясні", "Вегетаріанська", "Грибні", "Закриті"];

  return (
    <div className='categories'>
      <ul>
        {Categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value == i ? "active" : " "}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

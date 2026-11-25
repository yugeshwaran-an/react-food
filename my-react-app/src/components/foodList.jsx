function FoodCard({ name, price, image }) {
  return (
    <article className="food-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rs. {price}</p>
    </article>
  );
}

function FoodList() {
  const foods = [
    {
      name: "Pizza",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    },
    {
      name: "Burger",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    },
    {
      name: "French Fries",
      price: 79,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
    },
  ];

  return (
    <div className="food-list">
      {foods.map((food) => (
        <FoodCard
          key={food.name}
          name={food.name}
          price={food.price}
          image={food.image}
        />
      ))}
    </div>
  );
}

export default FoodList;

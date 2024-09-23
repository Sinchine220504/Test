import React from 'react';

const houses1 = [
  { address: '123 Main St', size: 1200, price: 400000, bedrooms: 3 },
  { address: '456 Oak St', size: 1800, price: 550000, bedrooms: 4 },
  { address: '789 Pine St', size: 1500, price: 300000, bedrooms: 2 },
];

const houses2 = [
  { address: '321 Elm St', size: 1600, price: 450000, bedrooms: 3 },
  { address: '654 Cedar St', size: 2000, price: 600000, bedrooms: 4 },
  { address: '987 Maple St', size: 1400, price: 350000, bedrooms: 2 },
];

const App = () => {
  
  const allHouses = houses1.concat(houses2);

  const filteredHouses = allHouses.filter((house) => house.bedrooms >= 3);

  const updatedHouses = filteredHouses.map((house) => ({
    ...house,
    size: house.size + 200,
  }));
  const expensiveHouse = updatedHouses.find((house) => house.price > 500000);

  const hasLargeHouse = updatedHouses.some((house) => house.bedrooms > 5);

  return (
    <div>
      <h2>Filtered and Updated Houses</h2>
      <ul>
        {updatedHouses.map((house, index) => (
          <li key={index}>
            {house.address} - Size: {house.size} sqft - Price: ${house.price} - Bedrooms: {house.bedrooms}
          </li>
        ))}
      </ul>
      <h3>First house over $500,000: </h3>
      {expensiveHouse ? (
        <p>{expensiveHouse.address} - Price: ${expensiveHouse.price}</p>
      ) : (
        <p>No house over $500,000 found.</p>
      )}
      <h3>Any house with more than 5 bedrooms: {hasLargeHouse ? 'Yes' : 'No'}</h3>
    </div>
  );
};

export default App;
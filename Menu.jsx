import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';

const foodItems = [
  { id: 1, name: 'Biryani', price: 15.00, rating: 4.9, description: 'Fragrant rice dish with aromatic spices and tender meat/vegetables.' },
  { id: 2, name: 'Idli', price: 5.00, rating: 4.8, description: 'Soft and fluffy steamed rice cakes served with chutney and sambar.' },
  { id: 3, name: 'Dosa', price: 7.50, rating: 4.7, description: 'Crispy savory crepe made from fermented rice and lentil batter.' },
  { id: 4, name: 'Upma', price: 6.00, rating: 4.5, description: 'Savory semolina porridge cooked with vegetables and spices.' },
];

function Menu({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = foodItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Our Menu</h1>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />

      {filteredItems.length === 0 ? (
        <p>No items found</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onAdd={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;

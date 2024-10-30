import React from 'react';
import SearchCard from '../components/SearchCard';

function Home() {
  return (
    <div className="home">
      <h1>Favorites</h1>
      <SearchCard />
      {/* Anda bisa menambahkan lebih banyak SearchCard di sini atau menggunakan map untuk mendaftar item dari API */}
    </div>
  );
}

export default Home;

<template>
    <div class="search-menu">
      <h1>Cari Menu Coffee</h1>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Cari menu..."
        @input="searchMenu"
      />
      <div v-if="filteredCoffee.length">
        <div v-for="coffee in filteredCoffee" :key="coffee.id" class="menu-item">
          <h3>{{ coffee.name }}</h3>
          <p>Harga: Rp{{ coffee.price }}</p>
        </div>
      </div>
      <div v-else>
        <p>Menu tidak ditemukan</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        coffeeList: [
          { id: 1, name: "Latte", price: 20000 },
          { id: 2, name: "Americano", price: 18000 },
          { id: 3, name: "Cappuccino", price: 25000 },
          { id: 4, name: "Mocha", price: 23000 },
        ],
      };
    },
    computed: {
      filteredCoffee() {
        return this.coffeeList.filter(coffee =>
          coffee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
  </script>
  
  <style>
  .search-menu {
    max-width: 600px;
    margin: auto;
  }
  .menu-item {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  </style>
  
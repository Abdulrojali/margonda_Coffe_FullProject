<script>
import espresso from '@/assets/espresso.jpg'
import latte from '@/assets/latte.jpg'
import cappuccino from '@/assets/capuccino.jpg'
import americano from '@/assets/americano.jpg'

export default{
    data(){
        return{
            menuCoffee:[
                {img:espresso, name:"Espresso", desc:"Minuman kopi murni yang kuat dan kaya rasa.", price:"Rp 20.000"},
                {img:latte, name:"Latte", desc:"Kombinasi sempurna antara kopi dan susu.", price:"Rp 25.000"},
                {img:cappuccino, name:"Cappuccino", desc:"Rasa kopi klasik dengan foam susu yang lembut.", price:"Rp 25.000"},
                {img:americano, name:"Americano", desc:"Espresso dengan tambahan air panas, ringan dan nikmat.", price:"Rp 18.000"},
            ]
        }
    },
    methods:{
        buyCoffe(name){
            alert(`Membeli ${name}`)
        }
    }
}
</script>

<template>
   <section id="menu" class="menu">
        <div class="container">
            <h2>Menu Kopi Kami</h2>

            <div class="menu-list">
                <div class="menu-item" 
                     v-for="(coffee, index) in menuCoffee" 
                     :key="index">

                    <img :src="coffee.img" :alt="coffee.name">

                    <h3>{{ coffee.name }}</h3>
                    <p>{{ coffee.desc }}</p>
                    <span>{{ coffee.price }}</span>

                    <button @click="buyCoffe(coffee.name)">Buy</button>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.menu {
    padding: 60px 20px;
    background: #f7f5f2;
    text-align: center;
}

.menu h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 40px;
    color: #3a2f2f;
}

.menu-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
}

.menu-item {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: .25s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.menu-item img{
    width: 100%;
    height: 170px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 15px;
}

.menu-item h3{
    font-size: 1.3rem;
    font-weight: 700;
    color: #4a3d36;
}

.menu-item p{
    font-size: 0.95rem;
    color: #6c6a6a;
    margin: 10px 0;
    line-height: 1.4rem;
}

.menu-item span{
    font-size: 1.1rem;
    font-weight: 700;
    color: #6f4e37;
    margin-bottom: 15px;
}

button{
    padding: 10px 18px;
    background: #6f4e37;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: .95rem;
    font-weight: 600;
    transition: .2s ease;
    width: 100%;
}

button:hover{
    background: #5a3f2d;
}

</style>
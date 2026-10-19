<template>
       <div class="header" id='header'>
        <div class="container">
            <h2>Selamat Datang di margonda coffe</h2>
            <p>Temukan cita rasa kopi terbaik untuk memulai harimu.</p>
            <button class="btn" @click="handlerRouteToLogin">login</button>
        </div>
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.header {
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 15px 50px;
    overflow: hidden; /* Pastikan elemen anak tidak keluar */
}

.header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/coffeHeader1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(6px); /* Menambahkan efek blur */
    z-index: 1;
}

.container {
    position: relative;
    z-index: 2; /* Pastikan teks berada di atas latar blur */
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

h2 {
    font-size: 5em;
    font-weight: 900;
    text-transform: capitalize;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    color: white;
}

.container p {
    width: 90%;
    font-size: 1.5em;
    font-weight: 500;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    color: white;
}

button {
    background: #6f4e37;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 20%;
    font-size: 1.25em;
}

button:hover {
    opacity: 0.8;
}
</style>

<script>
export default{
    methods:{
        handlerRouteToLogin(){
            this.$router.push('/loginChasier')
        }
    }
}
</script>
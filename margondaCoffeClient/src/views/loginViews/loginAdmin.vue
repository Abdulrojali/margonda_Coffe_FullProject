<template>
   <div class="content">
      <div class="login-container">
       <h1>Login Admin</h1>
           <div class="input-group">
               <label for="username">Username</label>
               <input type="text" id="username" name="username" v-model="username" required>
           </div>
           <div class="input-group">
               <label for="password">Password</label>
               <input type="password" id="password" name="password" v-model="password" required>
           </div>
           <button class="btn-login" @click='submitLoginAdmin'>Login</button>
           <br>
           <br>
           <b>login sebagai <a @click="handlerRouteToChasier">chasier</a></b>
   </div>
   </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
export default{
   data(){
       return{
           username:ref(''),
           password:ref('')
       }
   },
   methods:{
       registers(e){
           e.preventDefault()
           this.$router.push('/registers')
       },
       handlerRouteToChasier(e){
         e.preventDefault()
         this.$router.push('/loginChasier')
       }, 
      async submitLoginAdmin(){
           if(this.username && this.password){
            const authLoginAdmin = await axios.post('http://localhost:8080/login/admin',{user:this.username,pass:this.password})
            if(authLoginAdmin){
                this.$router.push('/dashboard/halamanUtama')
            }
            else{
                alert('invalid login')
                window.location.reload()
            }
           }
           else{
               alert('tolong isi username dan password')
               window.location.reload()
           }
       }
   }
}
</script>
<style scoped>
.content {
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

.content::before {
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
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: Arial, sans-serif;
}

body {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   background-color: #f3f4f6;
}

.login-container {
   position: relative;
    z-index: 2; /* Pastikan teks berada di atas latar blur */
    padding: 20px;
   width: 25%;
   background: #fff;
   padding: 2rem;
   border-radius: 8px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   border: 0.1em solid gray;
   width: 100%;
   max-width: 400px;
   text-align: center;
}

h1 {
   margin-bottom: 1rem;
   color: #333;
}

.input-group {
   margin-bottom: 1rem;
   text-align: left;
}

label {
   display: block;
   font-size: 0.9rem;
   color: #555;
   margin-bottom: 0.5rem;
}

input {
   width: 100%;
   padding: 0.8rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;
   outline: none;
   transition: border-color 0.3s;
}

input:focus {
   border-color: #007bff;
}

.btn-login {
   width: 100%;
   padding: 0.8rem;
   background: #007bff;
   color: #fff;
   font-size: 1rem;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   transition: background-color 0.3s;
}

.btn-login:hover {
   background-color: #0056b3;
}
a{
    color: purple;
    cursor: pointer;
}
b{
    font-size: .9em;
    font-weight: 400;
}
</style>
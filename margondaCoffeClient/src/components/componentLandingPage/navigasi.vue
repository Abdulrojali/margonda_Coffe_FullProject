<template>
<nav class="navbar">
        <div class="container">
            <a href="#" class="logo">margonda coffe</a>
            <ul class="nav-links">
                <li><a href="#header">home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
               
            </ul>
        </div>
    </nav>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.navbar {
    padding: 10px 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: #00000066; 
    
}
.container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.navbar .logo {
    color: white;
    font-size: 2em;
    font-weight: 1000;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 1);
    text-transform: uppercase;
    text-decoration: none;
}
.navbar .nav-links {
    list-style: none;
    display: flex;
    justify-content: flex-end;
}
.navbar .nav-links li {
    margin-left: 20px;
}
.navbar .nav-links a {
    color: white;
    font-size: 1.25em;
    font-weight: 1000;
    text-decoration: none;
}
.navbar .nav-links a:hover {
    text-decoration: underline;
}
</style>
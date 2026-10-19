<template>
    <section id="contact" class="contact">
        <div class="container">
            <h2>Hubungi Kami</h2>
            <form>
                <input type="text" placeholder="Nama" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Pesan Anda" rows="4" required></textarea>
                <button type="submit" class="btn">Kirim</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.contact {
    padding: 70px 20px;
    background: #f7f5f2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    color: #3a2f2f;
    margin-bottom: 25px;
}

.contact form {
    width: 100%;
    max-width: 550px;
    padding: 25px;
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.10);
    display: flex;
    flex-direction: column;
    gap: 18px;
    transition: .3s ease;
}

.contact form:hover {
    box-shadow: 0 6px 22px rgba(0,0,0,0.15);
}

.contact form input,
.contact form textarea {
    width: 500px;
    padding: 12px 14px;
    border: none;
    border-radius: 10px;
    background: #f1ece8;
    font-size: 1rem;
    transition: .2s ease;
}

.contact form input:focus,
.contact form textarea:focus {
    outline: none;
    background: #e9e4df;
    box-shadow: 0 0 0 2px #c6b7aa;
}

.contact form textarea {
    resize: none;
}

.contact form .btn {
    background: #6f4e37;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: .25s ease;
}

.contact form .btn:hover {
    background: #5b3f2d;
    transform: translateY(-2px);
}

/* RESPONSIVE */
@media (max-width: 600px) {
    .contact {
        padding: 50px 15px;
    }

    .contact form {
        padding: 20px;
        border-radius: 12px;
    }

    .contact h2 {
        font-size: 1.7rem;
    }
}

</style>
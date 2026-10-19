<template>
   <navigasiLandingPage></navigasiLandingPage>
   <headerLandingPage></headerLandingPage>
   <menuLandingPage></menuLandingPage>
   <contactLandingPage></contactLandingPage>
   <footerLandingPage></footerLandingPage>
</template>

<script>
import navigasiLandingPage from '@/components/componentLandingPage/navigasi.vue'
import headerLandingPage from '@/components/componentLandingPage/header.vue'
import menuLandingPage from '@/components/componentLandingPage/menu.vue'
import contactLandingPage from '@/components/componentLandingPage/contact.vue'
import footerLandingPage from '@/components/componentLandingPage/footer.vue'
export default{
    components:{
        navigasiLandingPage,
        headerLandingPage,
        menuLandingPage,
        contactLandingPage,
        footerLandingPage
    }
}
</script>

<style>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
</style>
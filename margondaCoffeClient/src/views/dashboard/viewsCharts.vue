<template>
    <div class="viewsDashboard">
        <h1>dashboard views</h1>
        <h1>{{ storeTransaksi.logRiwayatTransaksi[routing.params.id]}}</h1>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { transaksiStore } from '@/store/transaksi';
export default{
    data(){
        return{
            storeTransaksi:transaksiStore(),
            routing:useRoute(),
        }
    },
    methods:{

    }
}
</script>


<style scoped>

</style>
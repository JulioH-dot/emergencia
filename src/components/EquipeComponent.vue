<template>
    <div>
        <div class="row">
            <div class="col-2" v-text="dados.enfermeiro"></div>
            <div class="col-2" v-text="dados.socorrista"></div>
            <div class="col-2" v-text="dados.medico"></div>
            <div class="col-2" v-text="dados.carro"></div>
            <div class="col-2" v-text="dados.telefone"></div>
            <div class="col-2" v-text="dados.kitDeReanimacao"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'EquipeComponent',
    props:{
        dados: Object
    }
}
</script>
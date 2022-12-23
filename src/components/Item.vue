<template>
    <div>
        <div class="row">
            <div class="col-1" v-if="dados.id" v-text="dados.id"></div>
            <div class="col" v-if="dados.nome" v-text="dados.nome"></div>
            <div class="col-2" v-if="dados.escala" v-text="dados.escala"></div>
            <div class="col-2" v-if="dados.turno" v-text="dados.turno"></div>
            <div class="col" v-if="dados.placa" v-text="dados.placa"></div>
            <div class="col" v-if="dados.telefone" v-text="dados.telefone"></div>
            <div class="col" v-if="dados.kit" v-text="dados.kit"></div>
            <div class="col-1" >
                <i class="bi-check2-square" 
                    style="cursor:pointer"
                    @click="adicionarItemEquipe()"
                    >
                </i>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'


export default {
    name: 'Item',
    props:{
        dados: Object,
        tipo: String,
    },
    methods:{
        ...mapMutations({
            setItemEquipe: 'setItemEquipe',
            setItemEquipeVerificado:(commit, item)=>{
                /*
                    pode ter uma camada de lógica para 
                    verificar se o item está disponível
                    se sim, marcar no back-end que ele está sendo utilizado para uma equipe
                    se não, apresentar uma mensagem que o item está sendo utilizaado
                    evitando que múltiplos usuários utilizem o mesmo item     
                */
                commit('setItemEquipe', item)
            }
        }),
        adicionarItemEquipe(){
            let item = {
                tipo: this.tipo,
                dados :this.dados
            }
            this.setItemEquipeVerificado(item)
        }
    }
}
</script>
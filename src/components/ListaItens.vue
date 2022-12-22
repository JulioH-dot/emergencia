<template>
    <div>
       
        <item v-for="(itens, index) in items" 
            :key="index" :dados="itens" 
        />
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState } from 'vuex'

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    computed:{
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            socorristas: state => state.socorristas,
            medicos: state => state.medicos,
            kitDeReanimacao: state => state.equipamentos.kitsDeReanimacao,
            carro:state => state.equipamentos.carros,
            telefones:state => state.equipamentos.telefones,
        }),
        items(){
            switch(this.tipo){
                case 'enfermeiros':
                    return this.enfermeiros
                case 'socorristas':
                    return this.socorristas
                case 'medicos':
                    return this.medicos
                case 'kit-de-reanimacao':
                    return this.kitDeReanimacao
                case 'carros':
                    return this.carro
                case 'telefones':
                    return this.telefones               
            }
            return []
        }
    }
}
</script>
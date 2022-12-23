<template>
    <div>
        <div v-if=" tipo == 'socorristas'">
            <select class="form-control form-control-sm" v-model="turno">
                <option value="" disabled> Selecione um turno</option>
                <option value="">Todos</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
            </select>
        </div>
        <item v-for="(itens, index) in items" 
            :key="index" :dados="itens" :tipo="tipo"
        />
        <div v-if="tipo == 'socorristas'">
            Total: {{ totalSocorristasTurno(turno) }}
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    data:()=>({
        turno: ''
    }),
    computed:{
        ...mapGetters({
            turnoSocorristas:  'turnoSocorristas',
            totalSocorristasTurno: 'totalSocorristasTurno'
        }),
        ...mapState({
            enfermeiros: state => state.enfermeiros,
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
                    return this.turnoSocorristas(this.turno)
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
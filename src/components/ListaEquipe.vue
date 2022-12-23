<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(equipe, index) in equipesMont" :key="index">
                <equipe-component :dados="equipe"/>
            </li>
        </ul>
    </div>
</template>

<script>
import EquipeComponent from '@/components/EquipeComponent.vue'
import { mapState } from 'vuex'

export default {
    name: 'ListaEquipe',
    components: {
        EquipeComponent
    },
    computed:{
        ...mapState(['equipesMont'])
    }
}
</script>
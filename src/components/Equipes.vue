<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ListaEquipe  />
            </div>
        </div>
    </div>
</template>

<script>
import ListaEquipe from '@/components/ListaEquipe.vue'

export default {
    name: 'Equipes',
    components: {
        ListaEquipe
    }
}
</script>
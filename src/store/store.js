import { createStore } from 'vuex'

export default createStore({
  state: {
    titulo: 'Emergências Médicas ',
    equipe:{
      enfermeiro: '',
      socorrista:'',
      medico: '',
      carro: '',
      telefone: '',
      kitDeReanimacao: '',
    },
    equipesMont:[],
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: []
    }
  },
  getters: {
    totalEnfermeiros: state => {
      return state.enfermeiros.length
    },
    totalMedicos: state => {
      return state.medicos.length
    },
    turnoSocorristas: state => {
      return (turno)=>{
        if(!turno){
          return state.socorristas
        }
        return state.socorristas.filter(s => s.turno === turno.toLowerCase())
      }
    },

    totalSocorristas: state => state.socorristas.length,
    totalSocorristasTurno: (state, getters)=>{
      return turno => getters.turnoSocorristas(turno).length
    }

  },
  mutations: {
    addEquipesMontadas: (state, payload) =>{
      state.equipesMont.push(payload)
      state.equipe = {}
    },
    setItemEquipe:(state, item)=>{
      let t = item.tipo
      let d = item.dados

      if(t == 'enfermeiros') state.equipe.enfermeiro = d.nome
      if(t == 'socorristas') state.equipe.socorrista = d.nome
      if(t == 'medicos') state.equipe.medico = d.nome
      if(t == 'carros') state.equipe.carro = d.placa
      if(t == 'telefones') state.equipe.telefone = d.telefone
      if(t == 'kit-de-reanimacao') state.equipe.kitDeReanimacao = d.kit

    },
    setProfissionais:(state, {enfermeiros, socorristas, medicos})=>{
      state.enfermeiros = enfermeiros
      state.socorristas = socorristas
      state.medicos = medicos
      //console.log(payload)
    },
    setEquipamentos:(state, {carros, telefones, kitsDeReanimacao})=>{
      state.equipamentos.carros = carros
      state.equipamentos.telefones = telefones
      state.equipamentos.kitsDeReanimacao = kitsDeReanimacao
    },
  },
  actions: {
    fetchDados(context){
      fetch('http://localhost:3000/tudo')
        .then(response => response.json())
        .then(({equipamentos, profissionais }) => {
          if(equipamentos){
            context.commit( 'setEquipamentos',equipamentos)
          }
          if(profissionais){
            context.commit( 'setProfissionais',profissionais)
          }
        })
    },
    
  },
  modules: {
  }
})

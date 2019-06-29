import Name from './name'
let { capitalize } = Name.methods
export default {
    
    state:{
        cnt:0,
        array:[]
    } ,
    methods:{
        addNumber:(e)=>({dispatch,state})=>{
            
            let { number } = state
            number.cnt++
            number.array.push(5)
            
            
            let {name} = dispatch(capitalize("sss"))
            state.name = name
            return state
        }
    }
}
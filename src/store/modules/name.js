
export default {
    
    state:{
        name:"name1"
    } ,
    methods:{
        capitalize:(e)=>({dispatch,state})=>{
            
            let { name } = state
            name.name=name.name + e
        
            
            return state
        }
    }
}
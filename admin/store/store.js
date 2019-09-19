 
import Vuex from 'vuex'

import stateDefault from './state'

// import mutations from './mutations'
//每次使用Vuex重新生成 避免内存溢出
export default ()=>{
    return new Vuex.Store({
        state:stateDefault,
        // mutations,
        // getters:{
            
        // }
    })
}
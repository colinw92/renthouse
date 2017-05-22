import Vue from 'vue'

export const USER_SIGNIN='USER_SIGNIN'
export const USER_SIGNOUT='USER_SIGNOUT'
export const USER_COLLECT='USER_COLLECT'

export default{
  state:JSON.parse(sessionStorage.getItem('user'))||{},
  mutations:{
    [USER_SIGNIN] (state, user){
      sessionStorage.setItem('user',JSON.stringify(user));
      //user深拷贝State
      Object.assign(state,user);
    },
    [USER_SIGNOUT] (state, user){
      sessionStorage.removeItem('user');
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },
    [USER_COLLECT] (state, houseCollected){
      sessionStorage.setItem('houseCollected',JSON.stringify(houseCollected));
      Object.assign(state,houseCollected);
    }

  },
  actions:{
    [USER_SIGNIN] ({commit}, user){
      commit(USER_SIGNIN,user)
    },
    [USER_SIGNOUT] ({commit}){
      commit(USER_SIGNOUT)
    },
    [USER_COLLECT] ({commit}, houseCollected){
      commit(USER_COLLECT,houseCollected)
    }
  }
}


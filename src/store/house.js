import Vue from 'vue'

export const USER_COLLECT='USER_COLLECT';

export default{
  state:JSON.parse(sessionStorage.getItem('house'))||{},
  mutations:{
    [USER_COLLECT] (state, house){
      sessionStorage.setItem('house',JSON.stringify(house));
      Object.assign(state,house);
    }
  },
  actions:{
    [USER_COLLECT] ({commit}, house){
      commit(USER_COLLECT,house)
    }
  }
}


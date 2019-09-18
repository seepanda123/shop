import api from '../api/api_pro'

export default {
  namespace:'info',
  state: {
    cartNum : 0,
  },
  //同步
  reducers: {
    change(state,{payload}) {
      return{...state,...payload}
    }
  },
  //异步
  effects: {
    *getData(payload, { call, put }) {
      if(localStorage.getItem('id')){
        let id = JSON.parse(localStorage.getItem('id'))
        let num = 0;
      const result = yield call(api.getCartlist,{id:id})
      result.data.map((data)=>{
        num += data.pnum*1
      })
      yield put({
        type: 'change',
        payload: {
          cartNum:num
        }
      })
      }
      
      
    }
  }
}
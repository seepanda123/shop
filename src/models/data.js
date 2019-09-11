import api from '../../api/getpro'

export default {
  namespace:'info',
  state: {
    say: '我是你爸爸',
    age: 25,
    list:[]
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
      const result = yield call(api.getProList, { uid: 19802 })
      yield put({
        type: 'change',
        payload: {
          list:result.data
        }
      })
    }
  }
}


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

}
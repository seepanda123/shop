
import styles from './cart.css';
import { Empty, Button,PageHeader,InputNumber,Icon} from 'antd';
import Link from 'umi/link';
import React,{useState,useEffect} from 'react';
import api from '../api/api_pro';

//修改数量
function onChange(value) {
  console.log(value);
}


export default function(props) {

  //取购物车数据
  const [cartList,setCartList] = useState([]);

  useEffect(() => {
    api.getCartlist({id:2019}).then((data)=>{
      setCartList(data.data)
    })
  }, [props.cartList])


  //删除商品
function del(pid){
  console.log(pid)
  api.delcartlist({
    uid:2019,
    pid:pid
  }).then((data)=>{
    api.getCartlist({id:2019}).then((data)=>{
      setCartList(data.data)
    })
  })
}






  return (
    <div className={styles.normal}>
      {/* 购物车为空 */}
      {/* <div className={styles.warp}>
        <Empty
          image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568212115699&di=36ac21036ce18a584f735638aed97879&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe1b1467beea0a9c7d6a56b32bac6d7e5dcd914f7c3e6-YTwUd6_fw658"
          imageStyle={{
            height: 100,
          }}
          description={
            <p className={styles.noCart}>
              您的购物车中还没有商品
            </p>
          }
        >
          <Button type="danger" href="/">马上去购物</Button>
          <span className={styles.noShop}>您还可以</span>
          <Link to="./login">查看订单</Link>
        </Empty>
      </div> */}

      
      {/* 购物车有商品 */}
      <div className={styles.pay}>
        <PageHeader subTitle="查看购物车商品清单，增加减少商品数量，并勾选想要的商品进入下一步操作。" />
        <table width="100%" className={styles.tit}>
          <tbody>
            <tr>
              <td width="30">
                <input type="checkbox" />
              </td>
              <td width="420">全选</td>
              <td width="145" className={styles.txtC}>单价（元）</td>
              <td width="155" className={styles.txtC}>数量</td>
              <td width="155" className={styles.txtC}>小计（元）</td>
              <td className={styles.txtC}>操作</td>
            </tr>
            </tbody>
        </table>

        {/* 商品列表 */}
        <div className={styles.shopList}>
          <div className={styles.shopName}>商家：O'PARK平台自营店</div>
          <div className={styles.tbody}>
            <table width="100%">
              <tbody>
              {cartList.map((item,i)=>{
                return(
                  <tr key={i}>
                    <td width="20">
                      <input type="checkbox"/>
                    </td>
                    <td width="75">
                      <img src={item.pimg}/>
                    </td>
                    <td width="325">{item.pname}</td>
                    <td width="140" className={styles.txtC}>￥{item.pprice}</td>
                    <td width="170" className={styles.txtC}>
                      <InputNumber size="small" min={1} max={100000} defaultValue={item.pnum} onChange={onChange} />
                    </td>
                    <td width="140" className={styles.txtC}>￥{item.pprice}</td>
                    <td className={styles.txtC}>
                      <Button  onClick={del.bind(props,item.pid)}>删除</Button>
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 总价 */}
        <div className={styles.count}>
          <input type="checkbox"/> 全选
          <div className={styles.merge1}>
            已选商品
            <span className={styles.clRed}> 1 </span> 件 
            <Icon type="double-right" className={styles.mg10}/>
            <span className={styles.mg10}>
              合计（不含运费）：
              <span className={styles.allMoney}>￥48.00</span>  
            </span>
          </div>
          <span className={styles.doClear}>结算</span>
        </div>
      </div>


    </div>
  );
}

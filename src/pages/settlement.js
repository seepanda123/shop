import React, { Component } from 'react'
import styles from './settlement.css';
import Api from '../api/api_pro'
import { Empty, Button,PageHeader,InputNumber,Icon} from 'antd';
import Link from 'umi/link';

export default class settlement extends Component {
  constructor(props) {
    super(props);
    this.state={
          arr:[],
          allMoney:0
    }
  }
  render() {
  return (
    <div className={styles.normal}>
      <div className={styles.pay}>
        <PageHeader subTitle="确认订单信息" />
        <table width="100%" className={styles.tit}>
            <tr>
              <td width="520"></td>
              <td width="170" className={styles.txtC}>单价（元）</td>
              <td width="170" className={styles.txtC}>数量</td>
              <td className={styles.txtC}>小计（元）</td>
            </tr>
        </table>

        {/* 商品列表 */}
        <div className={styles.shopList}>
          <div className={styles.shopName}>商家：O'PARK平台自营店</div>
          <div className={styles.tbody}>
            <table width="100%">
              <tbody>
              {this.state.arr.map((list,i)=>{
                return(
                  <tr key={i}>
                    <td width="75">
                      <img src={list.pimg}/>
                    </td>
                    <td width="325">{list.pname}</td>
                    <td width="140" className={styles.txtC}>￥{list.pprice}</td>
                    <td width="170" className={styles.txtC}>{list.pnum}</td>
                    <td width="140" className={styles.txtC}>{list.pnum*list.pprice}</td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 总价 */}
        <div className={styles.count}>
          <div className={styles.merge1}>
            应付总额：<span className={styles.allMoney}>￥{this.state.allMoney}</span>
          </div>
          <span className={styles.doClear}>提交订单</span>
        </div>
      </div>
    </div>
  )
  }
    componentDidMount() { 
      let arr = this.props.location.state;
      let money = 0;
      arr.map((data)=>{
        money += data.pprice*data.pnum
      })
      this.setState({
        arr:arr,
        allMoney:money
      });
    }
}

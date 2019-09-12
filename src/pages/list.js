import React, { Component } from 'react'
import styles from './list.css';
import Api from '../api/api_pro'
import {Breadcrumb,Row, Col } from 'antd';
// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


export default class detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      dz:"源来如此",
      prolist:[]
    }
  }
  
  render() {
    return (
      <div>
      <Breadcrumb className={styles.nav} separator=">">
        <Breadcrumb.Item>幸福商城</Breadcrumb.Item>
        <Breadcrumb.Item href="">原产地</Breadcrumb.Item>
        <a href="">{this.state.dz}</a>
      </Breadcrumb>
      <div className={styles.rows}>
        <div className={styles.rows1}>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={23} push={1}>
              <a>鲜为人知</a>
              <a>源来如此</a>
            </Col>
            <Col span={1} pull={23}>分类：</Col>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={23} push={1}>
              <a>人气</a>
              <a>销量</a>
              <a>价格</a>
            </Col>
            <Col span={1} pull={23}>排序：</Col>
          </Row>
        </div>
      </div>
        <div className={styles.tiao}>
        
               
          <Row gutter={16}>
            {
              this.state.prolist.map((item,i)=>{
                return(
                <Col className="gutter-row" span={6} key={i}>
                <div className={styles.gutterbox}>
                  <img className={styles.img} src={item.pimg}/>
                  <p className={styles.jiage}>￥{item.pprice}</p>
                  <p className={styles.desc}>{item.pname}</p>
                  </div>
                </Col>
                )
              })
            }
          </Row>
        </div>
        </div>
    )
  }
  componentDidMount(){
    let arr = []
    Api.getProlist({uid:23255,pagesize:50}).then(data => {
      console.log(data.data)
      arr = (data.data).slice(22,28);
      this.setState({
        prolist:arr
      })
      console.log(arr)
    })
  }
}


import React, { Component } from 'react'
import styles from './detail.css';
import {Breadcrumb,Row, Col } from 'antd';
export default class detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      dz:"源来如此"
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
      <div className={styles.main}>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
        <div className={styles.mt}>
          <img className={styles.img} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568177396928&di=8b1edda934ce4346625cb45e0758ca41&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170124%2Ffcc0c22b9f1d4581accf400b0fab5818_th.jpg"/>
          <div className={styles.info}>
            <h2>产品名称</h2>
            <div>价格：<span>50</span></div>
            <div></div>
          </div>
        </div>
        <div className={styles.mb}></div>
      </div>
     </div>
    )
  }
}
import React, { Component } from 'react'
import styles from './list.css';
import {Breadcrumb} from 'antd';

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
      </Breadcrumb>,
      <div className={styles.navb}>
        <div className={styles.rows}>
          <label>分类：</label>
          <a href="" data-id="27">鲜为人知</a>
          <a href="" class="active" data-id="28">源来如此</a>
        </div>
        <div className={styles.rows}>
          <label>排序：</label>
          <a>人气</a>
          <a>销量</a>
          <a>价格</a>
        </div>
      </div>
      <ul>
        <li>
          <a className={styles.inner} href="/detail">
            <img className={styles.img} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
            <p className={styles.price}>￥{50.00}</p>
            <p className={styles.desc}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
          </a>
        </li>
        <li>
          <a className={styles.inner}>
            <img className={styles.img} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
            <p className={styles.price}>￥{50.00}</p>
            <p className={styles.desc}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
          </a>
        </li>
        <li>
          <a className={styles.inner}>
            <img className={styles.img} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
            <p className={styles.price}>￥{50.00}</p>
            <p className={styles.desc}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
          </a>
        </li>
        <li>
          <a className={styles.inner}>
            <img className={styles.img} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
            <p className={styles.price}>￥{50.00}</p>
            <p className={styles.desc}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
          </a>
        </li>
      </ul>
  </div>
    )
  }
}

import React, { Component } from 'react'
import styles from './detail.css';
import {Breadcrumb,Row, Col ,Select ,InputNumber ,Button} from 'antd';



const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
export default class detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      dz:"源来如此",
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      size: 'large',
    }
  }
  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });

  };
  onChange(value){
    console.log('changed', value);
  }
  
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };


  componentDidMount(){
    console.log(this.props.location.state.pid)
  }

  render() {
    const { cities } = this.state; 
    const { size } = this.state;
    return (
      <div>
      <Breadcrumb className={styles.nav} separator=">">
        <Breadcrumb.Item>幸福商城</Breadcrumb.Item>
        <Breadcrumb.Item href="">原产地</Breadcrumb.Item>
        <a href="">{this.state.dz}</a>
      </Breadcrumb>
      <div>
        <Row className={styles.main}>
          <Col span={8} push={1}>
            <img className={styles.img} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568177396928&di=8b1edda934ce4346625cb45e0758ca41&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170124%2Ffcc0c22b9f1d4581accf400b0fab5818_th.jpg"/>
          </Col>
          <Col span={16} push={3} className={styles.row}>
            <h2>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</h2>
            <div className={styles.price}>
              <div className={styles.original}>
                <span className={styles.lable}>现&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
                <span className={styles.gray}>50</span>
              </div>
              <div className={styles.original}>
                <span className={styles.lable}>原&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
                <span className={styles.throu}>60</span></div>
            </div>
            <div className={styles.adress}>
              <div className={styles.original}>
                <span className={styles.lable}>配送至：</span>
                <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={this.handleProvinceChange}>
                  {provinceData.map(province => (
                    <Option key={province}>{province}</Option>
                  ))}
                </Select>
                <Select style={{ width: 120 }} value={this.state.secondCity} onChange={this.onSecondCityChange}>
                  {cities.map(city => (
                    <Option key={city}>{city}</Option>
                  ))}
                </Select>
              </div>
              <div className={styles.original}>
                <span className={styles.lable}>运&nbsp;&nbsp;&nbsp;&nbsp;费：</span>
                <span className={styles.throug}>{0.00}，支持200元免运费</span>
              </div>
            </div>
            <div className={styles.original1}>
              <span className={styles.lable}>数&nbsp;&nbsp;&nbsp;&nbsp;量：</span>
              <InputNumber size="large" min={1} max={100000} defaultValue={1} onChange={this.onChange.bind(this)} />
            </div>
            <div className={styles.btn}>
              <Button type="primary" size={size} ghost="true" className={styles.zbuy}>直接购买</Button>
              <Button type="primary" size={size} className={styles.buy}>加入购物车</Button>
            </div>
          </Col>
        </Row>
          </div>
          <div className={styles.desc}>
            <p className={styles.shop}>商品详情：</p>
            <div className={styles.tit}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</div>
            <div className={styles.ptext}>
              产品产地：澳大利亚<br/>
              产品规格：眼肉牛排500g、西冷牛排1000g、菲力牛排500g、牛腩肉1000g、
              嫩肩肉2000g、米龙2000g、牛胸1000g、牛腱1000g、腿肉1000g
            </div>
          </div>
          <div className={styles.tiao}>
            <p className={styles.shop}>热门推荐：</p>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className={styles.gutterbox}>
                <img className={styles.img1} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
                <p className={styles.price1}>￥{50.00}</p>
                <p className={styles.desc1}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className={styles.gutterbox}>
                <img className={styles.img1} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
                <p className={styles.price1}>￥{50.00}</p>
                <p className={styles.desc1}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className={styles.gutterbox}>
                <img className={styles.img1} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
                <p className={styles.price1}>￥{50.00}</p>
                <p className={styles.desc1}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className={styles.gutterbox}>
                <img className={styles.img1} src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568164077&di=b4607c0e3c24091edc7bdaf1e0d3d662&src=http://n.sinaimg.cn/sinacn10/354/w700h454/20180409/b024-fyvtmxe3129122.jpg'/>
                <p className={styles.price1}>￥{50.00}</p>
                <p className={styles.desc1}>幸福商城原产地—海南红心木瓜幸福商城原产地—海南红心</p>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
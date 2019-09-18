import React, { Component } from 'react'
import styles from './detail.css';
import Api from '../api/api_pro'
import Link from 'umi/link';
import {Breadcrumb,Row, Col ,Select ,InputNumber ,Button} from 'antd';
import { connect } from "dva";


const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
class detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      size: 'large',
      xq:{},
      prolist:[],
      pnum:1
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
    this.setState({
      pnum:value
    })
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };



  render() {
    const { cities } = this.state;
    const { size } = this.state;
      return (
      <div>
      <Breadcrumb className={styles.nav} separator=">">
        <Breadcrumb.Item>幸福商城</Breadcrumb.Item>
        <Breadcrumb.Item href="">原产地</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <Row className={styles.main}>
          <Col span={8} push={1}>
            <img className={styles.img} src={this.state.xq.pimg}/>
          </Col>
          <Col span={16} push={3} className={styles.row}>
            <h2>{this.state.xq.pname}</h2>
            <div className={styles.price}>
              <div className={styles.original}>
                <span className={styles.lable}>现&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
                <span className={styles.gray}>{this.state.xq.pprice}</span>
              </div>
              <div className={styles.original}>
                <span className={styles.lable}>原&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
                <span className={styles.throu}>{parseInt(this.state.xq.pprice)+10}</span></div>
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
                <span className={styles.throug}>0</span>
              </div>
            </div>
            <div className={styles.original1}>
              <span className={styles.lable}>数&nbsp;&nbsp;&nbsp;&nbsp;量：</span>
              <InputNumber size="large" min={1} max={100000} defaultValue={1} onChange={this.onChange.bind(this)} />
            </div>
            {/* 按钮 */}
            <div className={styles.btn}>
              <Button type="primary" size={size} ghost="true" className={styles.zbuy} onClick={this.rightnow.bind(this,{pid:this.state.xq.pid})}>立即购买</Button>
              <Button type="primary" size={size} className={styles.buy} onClick={this.addcart.bind(this)}>加入购物车</Button>
            </div>
          </Col>
        </Row>
      </div>
          {/* 商品详情 */}
          <div className={styles.desc}>
            <p className={styles.shop}>商品详情：</p>
            <div className={styles.tit}>{this.state.xq.pname}</div>
            <div className={styles.ptext}>
              {this.state.xq.pdesc}
            </div>
          </div>

          <div className={styles.tiao}>
            <p className={styles.shop}>热门推荐：</p>
          <Row gutter={16}>
            {
              this.state.prolist.map((item,i)=>{
                return(
                   <Link to={{pathname:"/detail",state:{pid:item.pid}}} key={i} onClick={this.tap.bind(this,item.pid)}>
                    <Col className="gutter-row" span={6}  >
                    <div className={styles.gutterbox}>
                      <img className={styles.img1} src={item.pimg}/>
                      <p className={styles.price1}>￥{item.pprice}</p>
                      <p className={styles.desc1}>{item.pname}</p>
                    </div>
                    </Col>
                   </Link>
                )
              })
            }
          </Row>
        </div>
      </div>
    )
  }
  componentDidMount(){
    let pid = this.props.location.state.pid;
    Api.getProdetail({id:pid}).then(data => {
      this.setState({
          xq:data.data
      })
    })

    //列表
    Api.getProlist({uid:23255,pagesize:12}).then(data => {
      let arr = data.data;
      this.setState({
        prolist:arr
      })
    
    })
  }
  tap(p){
      Api.getProdetail({id:p}).then(data => {
        this.setState({
            xq:data.data
        })
      })
  }
  rightnow(pid){
    let arr = this.state.xq;
    arr.pnum = this.state.pnum;
    this.props.history.push({pathname:'/settlement',state:[arr]})
  }
  addcart(){
    if(localStorage.getItem('xfsc')){
      let pid = this.props.location.state.pid;
      let pnum = this.state.pnum;
      let uid = JSON.parse(localStorage.getItem('id'))
      Api.getAddcart({
        uid: uid,
        pid: pid,
        pnum: pnum
      }).then(data => {
        this.props.dispatch({
          type: 'info/getData',
        })
        this.props.history.push('./addCart')
      })
    }else{
      alert('请登录')
    }
    
  }
}

export default connect(state=>state.info)(detail)
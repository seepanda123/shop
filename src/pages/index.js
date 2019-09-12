import { Carousel,Menu, Icon,PageHeader, Tag, Button, Statistic, Descriptions, Row, Col } from 'antd';
import styles from './index.css';
import 'antd/dist/antd.css';
import Link from 'umi/link';
import React,{useState,useEffect} from 'react';
import api from '../api/api_pro';
const { SubMenu } = Menu;




export default function(props) {
  const [list1,setList1] = useState([]);
  const [list2,setList2] = useState([]);
  const [list3,setList3] = useState([]);
  const [list4,setList4] = useState([]);

  useEffect(() => {
    api.getProlist({uid:23255,pagesize:50}).then((data)=>{
      let list1 = data.data.slice(-6)
      let list2 = data.data.slice(15,22)
      let list3 = data.data.slice(14,15)
      let list4 = data.data.slice(1,14)
      setList1(list1)
      setList2(list2)
      setList3(list3)
      setList4(list4)
    })
  },[props.list1])

  return (
    <div className={styles.normal}>
      {/* 轮播图 */}
      <Carousel effect="fade" autoplay="true">
        <div>
          < img src = "http://statics.opark.com/filetmp/0/11/122/83/%E6%83%85%E4%BA%BA%E8%8A%82%E5%9B%BE.jpg"/>
        </div>
        <div>
          < img src = "http://statics.opark.com/filetmp/0/11/31/190/%E7%89%9B%E6%8E%92%E8%BD%AE%E6%92%AD%E5%9B%BE.jpg"/>
        </div>
      </Carousel>

      {/* 左侧导航栏 */}
      <Menu className={styles.nav} mode="vertical">
        <Menu.Item key="0">
          <Icon type="unordered-list" />
          <span>全部产品分类</span>
        </Menu.Item>

        {/* 原产地 */}
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="global" />
              <span>原产地</span>
            </span>
          }
          className={styles.bg}
          onTitleClick={(e)=>{
            props.history.push('/list',e.key)
          }}
        >
          
          <Menu.ItemGroup title="原产地" className={styles.box}>
            <p className={styles.tit}>鲜为人知  源来如此</p>
            <img src="http://statics.opark.com/filetmp/0/10/36/5/0-9-49-168-300x360%E5%8E%9F%E4%BA%A7%E5%9C%B0.jpg"/>
          </Menu.ItemGroup>
          
        </SubMenu>

        {/* 易办公 */}
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="gift" />
              <span>易办公</span>
            </span>
          }
          className={styles.bg}
          onTitleClick={(e)=>{
            props.history.push('/list', e.key)
          }}
        >
          <Menu.ItemGroup title="易办公" className={styles.box} >
            <p className={styles.tit}>办公用品</p>
            <img src="http://statics.opark.com/filetmp/0/10/39/121/0-9-49-168-300x360%E6%98%93%E5%8A%9E%E5%85%AC.jpg"/>
          </Menu.ItemGroup>
        </SubMenu>

        {/* 职人必备 */}
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="highlight" />
              <span>职人必备</span>
            </span>
          }
          className={styles.bg}
          onTitleClick={(e)=>{
            props.history.push('/list', e.key)
          }}
        >
          <Menu.ItemGroup title="职人必备" className={styles.box}>
              <p className={styles.tit}>office饮品</p>
              <img src="http://statics.opark.com/filetmp/0/11/104/183/%E8%81%8C%E4%BA%BA%E5%BF%85%E5%A4%87.jpg"/>
          </Menu.ItemGroup>
        </SubMenu>

        {/* 精选优物 */}
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="user" />
              <span>精选优物</span>
            </span>
          }
          className={styles.bg}
          onTitleClick={(e)=>{
            props.history.push('/list', e.key)
          }}
        >
          <Menu.ItemGroup title="精选优物" className={styles.box}>
              <p className={styles.tit}>精选优物</p>
              <img src="http://statics.opark.com/filetmp/0/10/38/19/0-9-49-168-300x360%E7%A4%BC%E5%93%81%E6%B1%87.jpg"/>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>

      {/* 列表---原产地 */}
      <PageHeader
        title="原产地"
        extra={[
          <Link key="4" className={styles.more} to="./list"> 鲜为人知 </Link>,
          <span key="3" className={styles.more}> | </span>,
          <Link key="2" className={styles.more} to="./list"> 源来如此 </Link>,
          <Link key="1" className={styles.mores} to="./list"> 更多 ></Link>,
        ]}
      >
      </PageHeader>

      <dl className={styles.homeGood}>
        <dt>
          <div><img src="http://statics.opark.com/filetmp/0/10/178/3/%E7%93%9C%E5%AD%90_03.jpg"/></div>
        </dt>
        {/* dd */}
        {list1.map((data,i)=>{
          return(
            <dd key={i}>
              <Link target="_blank" to="./detail">
                <img src={data.pimg}/>
                <div className={styles.title}>{data.pname}</div>
                <div className={styles.price}>￥<span className={styles.font20}>{data.pprice}</span></div>
              </Link>
              <Link className={styles.buy} target="_blank" to="./detail">
                <Icon type="shopping-cart" />
                立即购买
              </Link>
            </dd>
          )
        })}
      </dl>

      {/* 列表---易办公 */}
      <PageHeader
        title="易办公"
        extra={[
          <Link key="2" className={styles.more} to="./list"> 办公用品 </Link>,
          <Link key="1" className={styles.mores} to="./list"> 更多 ></Link>,
        ]}
      >
      </PageHeader>

      <dl className={styles.homeGood}>
        <dt>
          <div><img src="http://statics.opark.com/filetmp/0/10/36/8/%E8%8C%B6%E7%9B%98.jpg"/></div>
        </dt>

        {/* dd */}
        {list2.map((data,i)=>{
          return(
            <dd key={i}>
              <Link target="_blank" to="./detail">
                <img src={data.pimg}/>
                <div className={styles.title}>{data.pname}</div>
                <div className={styles.price}>￥<span className={styles.font20}>{data.pprice}</span></div>
              </Link>
              <Link className={styles.buy} target="_blank" to="./detail">
                <Icon type="shopping-cart" />
                立即购买
              </Link>
            </dd>
          )
        })}
      </dl>

      {
        /* 列表---职人必备 */ }
      <PageHeader
        title="职人必备"
        extra={[
          <Link key="2" className={styles.more} to="./list"> 职人必备 </Link>,
          <Link key="1" className={styles.mores} to="./list"> 更多 ></Link>,
        ]}
      >
      </PageHeader>

      <dl className={styles.homeGood}>
        <dt>
          <div><img src="http://statics.opark.com/filetmp/0/10/36/24/%E8%AE%A2%E4%B9%A6%E6%9C%BA.jpg"/></div>
        </dt>

        {/* dd */}
        {list3.map((data,i)=>{
          return(
            <dd key={i}>
              <Link target="_blank" to="./detail">
                <img src={data.pimg}/>
                <div className={styles.title}>{data.pname}</div>
                <div className={styles.price}>￥<span className={styles.font20}>{data.pprice}</span></div>
              </Link>
              <Link className={styles.buy} target="_blank" to="./detail">
                <Icon type="shopping-cart" />
                立即购买
              </Link>
            </dd>
          )
        })}
      </dl>


      {/* 列表---精选优物 */}
      <PageHeader
        title="精选优物"
        extra={[
          <Link key="2" className={styles.more} to="./list"> 精选优物 </Link>,
          <Link key="1" className={styles.mores} to="./list"> 更多 ></Link>,
        ]}
      >
      </PageHeader>

      <dl className={styles.homeGood}>
        <dt>
          <div><img src="http://statics.opark.com/filetmp/0/11/104/185/%E8%81%8C%E4%BA%BA%E5%BF%85%E5%A4%87_03.jpg"/></div>
        </dt>

        {/* dd */}
        {list4.map((data,i)=>{
          return(
            <dd key={i}>
              <Link target="_blank" to="./detail">
                <img src={data.pimg}/>
                <div className={styles.title}>{data.pname}</div>
                <div className={styles.price}>￥<span className={styles.font20}>{data.pprice}</span></div>
              </Link>
              <Link className={styles.buy} target="_blank" to="./detail">
                <Icon type="shopping-cart" />
                立即购买
              </Link>
            </dd>
          )
        })}
      </dl>
    </div>
  )
}



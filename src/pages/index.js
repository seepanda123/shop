import { Carousel,Menu, Icon,PageHeader, Tag, Button, Statistic, Descriptions, Row, Col } from 'antd';
import styles from './index.css';
<<<<<<< HEAD
import 'antd/dist/antd.css';
=======
>>>>>>> 1340e4ef27bde6969a7b08f79a35092ac4814173
import Link from 'umi/link';
const { SubMenu } = Menu;

export default function() {

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

        {/* 原产地 */ }
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="global" />
              <span>原产地</span>
            </span>
          }
          className={styles.bg}
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
        >
          <Menu.ItemGroup title="精选优物" className={styles.box}>
              <p className={styles.tit}>精选优物</p>
              <img src="http://statics.opark.com/filetmp/0/10/38/19/0-9-49-168-300x360%E7%A4%BC%E5%93%81%E6%B1%87.jpg"/>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>

      {/* 列表 */}
      <PageHeader
        title="原产地"
        extra={[
          <span key="4" className={styles.more}> 鲜为人知 </span>,
          <span key="3" className={styles.more}> | </span>,
          <span key="2" className={styles.more}> 源来如此 </span>,
          <span key="1" className={styles.mores}> 更多 ></span>,
        ]}
      >
      </PageHeader>

      <dl className={styles.homeGood}>
        <dt>
          <Link to="./detail"><img src="http://statics.opark.com/filetmp/0/10/178/3/%E7%93%9C%E5%AD%90_03.jpg"/></Link>
        </dt>

        <dd>
          <Link target="_blank" to="./detail">
            <img src="http://statics.opark.com/file//0/12/42/41/%E6%B5%B7%E5%8D%97%E7%BA%A2%E5%BF%83%E6%9C%A8%E7%93%9C%E5%A4%B4%E5%9B%BE.jpg?w=180&h=180"/>
            <div className={styles.title}>幸福商城原产地—海南红心木瓜</div>
            <div className={styles.price}>￥<span className={styles.font20}>48.00</span></div>
          </Link>
          <Link className={styles.buy} target="_blank" to="./detail">
            <Icon type="shopping-cart" />
             立即购买
          </Link>
        </dd>
        <dd>
          <Link target="_blank" to="./detail">
            <img src="http://statics.opark.com/file//0/12/42/41/%E6%B5%B7%E5%8D%97%E7%BA%A2%E5%BF%83%E6%9C%A8%E7%93%9C%E5%A4%B4%E5%9B%BE.jpg?w=180&h=180"/>
            <div className={styles.title}>幸福商城原产地—海南红心木瓜</div>
            <div className={styles.price}>￥<span className={styles.font20}>48.00</span></div>
          </Link>
          <Link className={styles.buy} target="_blank" to="./detail">
            <Icon type="shopping-cart" />
             立即购买
          </Link>
        </dd>
        <dd>
          <Link target="_blank" to="./detail">
            <img src="http://statics.opark.com/file//0/12/42/41/%E6%B5%B7%E5%8D%97%E7%BA%A2%E5%BF%83%E6%9C%A8%E7%93%9C%E5%A4%B4%E5%9B%BE.jpg?w=180&h=180"/>
            <div className={styles.title}>幸福商城原产地—海南红心木瓜</div>
            <div className={styles.price}>￥<span className={styles.font20}>48.00</span></div>
          </Link>
          <Link className={styles.buy} target="_blank" to="./detail">
            <Icon type="shopping-cart" />
             立即购买
          </Link>
        </dd>
        <dd>
          <Link target="_blank" to="./detail">
            <img src="http://statics.opark.com/file//0/12/42/41/%E6%B5%B7%E5%8D%97%E7%BA%A2%E5%BF%83%E6%9C%A8%E7%93%9C%E5%A4%B4%E5%9B%BE.jpg?w=180&h=180"/>
            <div className={styles.title}>幸福商城原产地—海南红心木瓜</div>
            <div className={styles.price}>￥<span className={styles.font20}>48.00</span></div>
          </Link>
          <Link className={styles.buy} target="_blank" to="./detail">
            <Icon type="shopping-cart" />
             立即购买
          </Link>
        </dd>
        <dd>
          <Link target="_blank" to="./detail">
            <img src="http://statics.opark.com/file//0/12/42/41/%E6%B5%B7%E5%8D%97%E7%BA%A2%E5%BF%83%E6%9C%A8%E7%93%9C%E5%A4%B4%E5%9B%BE.jpg?w=180&h=180"/>
            <div className={styles.title}>幸福商城原产地—海南红心木瓜</div>
            <div className={styles.price}>￥<span className={styles.font20}>48.00</span></div>
          </Link>
          <Link className={styles.buy} target="_blank" to="./detail">
            <Icon type="shopping-cart" />
             立即购买
          </Link>
        </dd>
        <dd>
          <Link target="_blank" to="./detail">
            <img src="http://statics.opark.com/file//0/12/42/41/%E6%B5%B7%E5%8D%97%E7%BA%A2%E5%BF%83%E6%9C%A8%E7%93%9C%E5%A4%B4%E5%9B%BE.jpg?w=180&h=180"/>
            <div className={styles.title}>幸福商城原产地—海南红心木瓜</div>
            <div className={styles.price}>￥<span className={styles.font20}>48.00</span></div>
          </Link>
          <Link className={styles.buy} target="_blank" to="./detail">
            <Icon type="shopping-cart" />
             立即购买
          </Link>
        </dd>
      </dl>
    </div>
  )
}



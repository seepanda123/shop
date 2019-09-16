
import styles from './settlement.css';
import { Empty, Button,PageHeader,InputNumber,Icon} from 'antd';
import Link from 'umi/link';




export default function() {
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
              <tr>
                <td width="75">
                  <img src="http://statics.opark.com/file/1656578781/0/9/53/172/%E5%BE%97%E5%8A%9B-6801-%E7%99%BD%E6%9D%BF%E7%AC%94%EF%BC%88%E8%93%9D%EF%BC%89.jpg?w=75&h=75"/>
                </td>
                <td width="325">得力 6801 白板笔（蓝） 10支起售</td>
                <td width="140" className={styles.txtC}>￥35</td>
                <td width="170" className={styles.txtC}>4</td>
                <td width="140" className={styles.txtC}>￥35.00</td>
              </tr>

              <tr>
                <td width="75">
                  <img src="http://statics.opark.com/file/1656578781/0/9/53/172/%E5%BE%97%E5%8A%9B-6801-%E7%99%BD%E6%9D%BF%E7%AC%94%EF%BC%88%E8%93%9D%EF%BC%89.jpg?w=75&h=75"/>
                </td>
                <td width="325">得力 6801 白板笔（蓝） 10支起售</td>
                <td width="140" className={styles.txtC}>￥35</td>
                <td width="170" className={styles.txtC}>4</td>
                <td width="140" className={styles.txtC}>￥35.00</td>
              </tr>
            </table>
          </div>
        </div>

        {/* 总价 */}
        <div className={styles.count}>
          <div className={styles.merge1}>
            应付总额：<span className={styles.allMoney}>￥0.00</span>
          </div>
          <span className={styles.doClear}>提交订单</span>
        </div>
      </div>
    </div>
  );
}

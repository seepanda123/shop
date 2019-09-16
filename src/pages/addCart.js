
import styles from './addCart.css';
import { Empty, Button} from 'antd';
import Link from 'umi/link';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.warp}>
        <Empty
          image="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2933620766,4262220351&fm=26&gp=0.jpg"
          imageStyle={{
            height: 100,
          }}
          description={
            <p className={styles.noCart}>
              商品已成功加入购物车！
            </p>
          }
        >
          <Button type="danger" href="/cart">去购物车结算</Button>
          <span className={styles.noShop}>您还可以</span>
          <Link to="/">继续购物</Link>
        </Empty>
      </div>
    </div>
  );
}

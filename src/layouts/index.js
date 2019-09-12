import 'antd/dist/antd.css';
import styles from './index.css';
export default function (props) {
  return (
    <div className={styles.normal}>
      <h2 className="tit">头部导航</h2>
      <div>{props.children}</div>
      <h1>小乙吧</h1>
    </div>
  )
}
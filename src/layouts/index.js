<<<<<<< HEAD

=======
>>>>>>> 1340e4ef27bde6969a7b08f79a35092ac4814173
import 'antd/dist/antd.css';
import styles from './index.css';
export default function (props) {
  return (
    <div className={styles.normal}>
      <h2 className="tit">头部导航</h2>
      <div>{props.children}</div>
    </div>
  )
}
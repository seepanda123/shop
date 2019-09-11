export default function(props) {
  return (
    <div>
      <h2 className="tit">头部导航</h2>
      <div>{props.children}</div>
    </div>
  )
}
import Link from 'umi/link';
import styles from './login.css';
import {Icon, Input, Tooltip, Form, Button, Checkbox} from 'antd';
import React, {Component} from 'react'
import Api from '../api/api_pro'


export default class login extends Component {
    constructor(props) {
        super(props)
        this.state={
            val1:'',
            val2:''
        }
    }

    render() {
        return (
            <div className={styles.login}>
                <div className={styles.nav}>
                    <Icon className={styles.icons} type="home"/>
                    <Link to="/">opark首页</Link>
                    <span className={styles.phone}>
                <Icon type="phone"/>
                手机版
            <img className={styles.erweima} src="http://statics.huhoo.com/css/frame/images/code.png"/>
            </span>
                </div>

                <div className={styles.header}>
                    <div className={styles.headercenter}>

                        <img src="http://statics.huhoo.com/css/opark/common/images/logo_login.png" alt=""/>
                    </div>
                </div>

                <div className={styles.common}>

                    <div className={styles.clearfix}>
                        <div className={styles.clearfixl}>
                            <img src="http://statics.huhoo.com/css/bjonline/images/login_l.png" alt=""/>
                        </div>
                        <div className={styles.clearfixr}>
                            <div className={styles.infoTit}>
                                <span>园区在线</span>
                            </div>
                            <div className={styles.fromInput}>
                                <Input
                                    type="text"
                                    placeholder="账号"
                                    onChange={this.Change1.bind(this)}
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}

                                />
                                <br/>
                                <br/>
                                <Input
                                    type='password'
                                    placeholder="密码"
                                    onChange={this.Change2.bind(this)}
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}

                                />

                                <div className={styles.detail}>
                                    <span className={styles.teshu}>忘记密码？</span>
                                    <Button
                                        className={styles.btn1}
                                        block
                                        onClick={this.btn1.bind(this)}
                                    >
                                        登录
                                    </Button>
                                    <Button
                                        className={styles.btn2}
                                        block
                                        href="/register"
                                    >
                                        注册
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className={styles.footer}>
                    <div className={styles.fooCon}>
                        <p className={styles.p1}>
                            <span className={styles.corp}>
                                <a href="http://www.opark.com/about/" target="_blank">关于O'Park中国园区在线</a>
                                <span>|</span>
                                <a href="http://www.opark.com/news/" target="_blank">新闻中心</a>
                                <span>|</span>
                                <a href="http://www.opark.com/policy/" target="_blank">创业政策</a>
                                <span>|</span>
                                <a href="http://www.opark.com/partner/" target="_blank">合作伙伴</a>
                                <span>|</span>
                                <a href="http://www.opark.com/contact/" target="_blank">联系我们</a>
				            </span>
                            <span className={styles.follow}>
                                <span>关注O'Park</span>
                                <a href="https://weibo.com/bjkjy?topnav=1&wvr=6&topsug=1">
                                    <Icon type="weibo-circle"
                                          style={{fontSize:'20px',marginRight:'10px'}}
                                    />
                                </a>
                                <span className={styles.barcode}>
                                    <Icon className={styles.iconH} type="wechat"/>
                                    <img src="http://statics.huhoo.com/images/web/code/bj.png?10202"/>
                                </span>


                            </span>

                        </p>
                        <p className={styles.p2}>
                            <span className={styles.copy}>Copyright © 2007-2019 苏州欧帕克信息技术有限公司 版权所有 </span>

                        </p>
                    </div>
                </div>

            </div>

        )
    }
    Change1(e){
        //console.log(e.target.value)
        this.setState({
            val1:e.target.value
        })
    }

    Change2(e){
        //console.log(e.target.value)
        this.setState({
            val2:e.target.value
        })
    }

    btn1(e){
        let val1 = this.state.val1
        let val2 = this.state.val2

        Api.login({username:val1,password:val2}).then(data => {
            console.log(data)
            let val = data.data.token;

            if(data.code==1){
                localStorage.setItem('xfsc',JSON.stringify(val))
                localStorage.setItem('id',JSON.stringify(data.data.id))
                localStorage.setItem('name',JSON.stringify(data.data.username))
                this.props.history.push("/")
            }else {
                alert("用户名或者密码错误")
            }
        })

    }

}




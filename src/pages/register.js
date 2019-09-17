import React, {Component} from 'react'
import styles from './register.css';
import Link from 'umi/link';
import Api from '../api/api_pro'
import {Button, Icon, Input, Form, DatePicker, TimePicker, Select, Cascader, InputNumber} from "antd";



export default class register extends Component {
    constructor(props) {
        super(props)
        this.state={
            val1:"",
            val2:"",

        }
    }

    render() {
        const onChange = e => {
            if (e.target.value = "") {
                alert('请输入手机账号')
            }
        };

        return (
            <div className={styles.register}>
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
                        <img src="http://statics.huhoo.com/css/opark/common/images/logo_reg.png" alt=""/>
                        <span>加入O'Park 中国园区在线，360度全程管家式企业成长服务，园区运营尽在掌握！</span>
                    </div>
                </div>

                <div className={styles.common}>

                    <div className={styles.clearfix}>
                        <div className={styles.row}>
                            <h4>手机号码:</h4>
                            <Input placeholder="  手机账号"
                                   type="text"
                                   allowClear
                                   onChange={this.Change1.bind(this)}
                                   onBlur={this.Blur1.bind(this)}
                                   style={{width: '300px', height: '45px', display: "block",float:'left'}}

                            />

                        </div>

                        <br/>
                        <div className={styles.row}>
                            <h4>    密码:</h4>
                            <Input placeholder="  密码"
                                   type="password"
                                   allowClear
                                   onChange={this.Change2.bind(this)}
                                   style={{width: '300px', height: '45px', display: "block",float:'left'}}
                            />
                        </div>

                        <div className={styles.row1}>
                            <Button
                                className={styles.btn}
                                block
                                onClick={this.btn1.bind(this)}
                            >立即加入</Button>
                            <span className={styles.btn2}
                            >已有账号,<a href="/login">立即登录</a></span>
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
                                          style={{fontSize: '20px', marginRight: '10px'}}
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
    btn1(e){
        let val1 = this.state.val1
        let val2 = this.state.val2
        if(!(/^[\w_-]{6,16}$/.test(val2))){
            alert("密码不符合")
        }else {

            Api.register({username:val1,password:val2}).then(data => {
                //console.log(data.msg)
                if (data.msg=="用户名已经存在"){
                    alert("用户名已经存在")
                }else{
                    alert("注册成功")
                    this.props.history.push("/login")
                }

            })

        }

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

    Blur1(e){
        //console.log(e.target.value)
        let val=e.target.value
        if(val==""){
            alert("请输入手机号")
        }else if(!(/^1[3456789]\d{9}$/.test(val))){
            alert("请输入正确的手机号")
        }else {
            return true
        }

    }




}

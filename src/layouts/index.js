import styles from './index.css';
import 'antd/dist/antd.css';
import Link from 'umi/link';
import { Icon, Input, Tooltip, Form, Button, Checkbox } from 'antd';
import { connect } from "dva";
import React, { useState, useEffect } from "react";
function allIndex(props) {
    if (
        props.location.pathname === "/login" ||
        props.location.pathname === "/register" ||
        props.location.pathname === "/public"
    ) {
        return <div>{props.children}</div>;
    }
    const { Search } = Input;
    useEffect(() => {
        props.dispatch({
            type: 'info/getData',
        })
    }, [props.cartNum])

    if (localStorage.getItem("xfsc")) {
        return (
            <div>
                <div id="top"></div>
                <div className={styles.nav}>
                    <Icon className={styles.icons} type="home" />
                    <Link to="/">欢迎访问opark官网</Link>
                    <div className={styles.floatr1}>
                        <span className={styles.anniu1}>
                            欢迎尊敬的：{JSON.parse(localStorage.getItem('name'))}
                        </span>
                        <span className={styles.phone}>
                            <Icon type="phone" />
                            手机版
                    <img className={styles.erweima} src="http://statics.huhoo.com/css/frame/images/code.png" />
                        </span>
                    </div>
                </div>
                <div className={styles.header}>
                    <div className={styles.headercenter}>
                        <Link to='/'><img src="http://statics.opark.com/css/opark/common/images/logo_cyzg.png" alt="" /></Link>
                    </div>
                </div>
                <div className={styles.headerMall}>
                    <div className={styles.mallLayout}>
                        <a className={styles.logo}></a>
                        <div className={styles.infos}>
                            <Search placeholder="搜索幸福商城商品"
                                onSearch={value => console.log(value)}
                                enterButton
                                style={{ width: 284, height: 42, }}
                                className={styles.sousuo}
                            />
                            <a href="/cart" className={styles.cartcar}>
                                <i className={styles.car}><Icon type="shopping-cart" /></i>
                                购物车
                        <em>{props.cartNum}</em>
                            </a>

                        </div>
                    </div>
                </div>
                <div className={styles.normal}>{props.children}</div>
                <div className={styles.footer}>
                    <div className={styles.footerc}>
                        <ul className={styles.clearfix}>
                            <li>
                                <i className={styles.one}></i>
                                <div className={styles.info}>
                                    <div>源头直采</div>
                                    <span>精选正宗品质</span>
                                </div>
                            </li>
                            <li>
                                <i className={styles.two}></i>
                                <div className={styles.info}>
                                    <div>低价保障</div>
                                    <span>缩减中间环节 确保低价</span>
                                </div>
                            </li>
                            <li>
                                <i className={styles.three}></i>
                                <div className={styles.info}>
                                    <div>天无忧退货</div>
                                    <span>国内退货 售后无忧</span>
                                </div>
                            </li>
                            <li>
                                <i className={styles.four}></i>
                                <div className={styles.info}>
                                    <div>多仓直发</div>
                                    <span>极速配送 最快当日送达</span>
                                </div>
                            </li>
                        </ul>

                        <div className={styles.fixAbout}>
                            <ul>
                                <li>
                                    <div className={styles.title}>购物指南</div>
                                    <a href="/">购物流程</a>
                                    <a href="/">正品保障</a>
                                </li>
                                <li>
                                    <div className={styles.title}>支付方式</div>
                                    <a href="/">货到付款</a>
                                    <a href="/">在线支付</a>
                                </li>
                                <li>
                                    <div className={styles.title}>售后服务</div>
                                    <a href="/">退换货说明</a>
                                    <a href="/">常见问题</a>
                                </li>
                                <li>
                                    <div className={styles.title}>关于我们</div>
                                    <a href="/">联系我们</a>
                                    <a href="/">商家入驻</a>
                                </li>
                                <li>
                                    <div className={styles.tel}>400-885-0501</div>
                                    <div className={styles.time}>周一至周五 8:30 - 18:30</div>

                                </li>
                            </ul>
                            <div className={styles.erweimar}>
                                <img src="http://statics.huhoo.com/css/opark/mall/images/code.png" alt="" />
                                <span>下载园区在线</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <div className={styles.footerNavc}>
                            Copyright © 2007-2016 苏州欧帕克信息技术有限公司 版权所有 苏ICP备15022748号
                </div>
                    </div>
                </div>
                <div className={styles.fixedBox}>
                    <ul>
                        <li>
                            <a href="/cart">
                                <em>{props.cartNum}</em>
                                <i className={styles.cartI}></i>
                                <div className={styles.title}>购物车</div>
                            </a>
                        </li>
                        <li className={styles.appBlock}>
                            <a href="/">
                                <i className={styles.phoneI}></i>
                                <div className={styles.title}>APP</div>
                                <div className={styles.appShow}>
                                    <span className={styles.arrowRp}></span>
                                    <img src="http://statics.huhoo.com/css/opark/mall/images/code.png" className={styles.code} />
                                    <div>下载园区在线</div>
                                </div>
                            </a>
                        </li>
                        <li className={styles.gotop}>
                            <a href="#top">
                                <i className={styles.topI}></i>
                                <div className={styles.title}>TOP</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {


        return (

            <div>
                <div id="top"></div>
                <div className={styles.nav}>
                    <Icon className={styles.icons} type="home" />
                    <Link to="/">欢迎访问opark官网</Link>
                    <div className={styles.floatr}>
                        <span className={styles.anniu}>
                            <Link to="/login">登录</Link>
                            <Link to="/register">注册</Link>
                        </span>
                        <span className={styles.phone}>
                            <Icon type="phone" />
                            手机版
                            <img
                                className={styles.erweima}
                                src="http://statics.huhoo.com/css/frame/images/code.png"
                            />
                        </span>
                    </div>
                </div>
                <div className={styles.header}>
                    <div className={styles.headercenter}>
                    <Link to='/'><img src="http://statics.opark.com/css/opark/common/images/logo_cyzg.png"/></Link>
                    </div>
                </div>
                <div className={styles.headerMall}>
                    <div className={styles.mallLayout}>
                        <a className={styles.logo}></a>
                        <div className={styles.infos}>
                            <Search
                                placeholder="搜索幸福商城商品"
                                onSearch={value => console.log(value)}
                                enterButton
                                style={{ width: 284, height: 42 }}
                                className={styles.sousuo}
                            />
                            <a href="/cart" className={styles.cartcar}>
                                <i className={styles.car}>
                                    <Icon type="shopping-cart" />
                                </i>
                                购物车
            <em>{props.cartNum}</em>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.normal}>{props.children}</div>
                <div className={styles.footer}>
                    <div className={styles.footerc}>
                        <ul className={styles.clearfix}>
                            <li>
                                <i className={styles.one}></i>
                                <div className={styles.info}>
                                    <div>源头直采</div>
                                    <span>精选正宗品质</span>
                                </div>
                            </li>
                            <li>
                                <i className={styles.two}></i>
                                <div className={styles.info}>
                                    <div>低价保障</div>
                                    <span>缩减中间环节 确保低价</span>
                                </div>
                            </li>
                            <li>
                                <i className={styles.three}></i>
                                <div className={styles.info}>
                                    <div>天无忧退货</div>
                                    <span>国内退货 售后无忧</span>
                                </div>
                            </li>
                            <li>
                                <i className={styles.four}></i>
                                <div className={styles.info}>
                                    <div>多仓直发</div>
                                    <span>极速配送 最快当日送达</span>
                                </div>
                            </li>
                        </ul>

                        <div className={styles.fixAbout}>
                            <ul>
                                <li>
                                    <div className={styles.title}>购物指南</div>
                                    <a href="/">购物流程</a>
                                    <a href="/">正品保障</a>
                                </li>
                                <li>
                                    <div className={styles.title}>支付方式</div>
                                    <a href="/">货到付款</a>
                                    <a href="/">在线支付</a>
                                </li>
                                <li>
                                    <div className={styles.title}>售后服务</div>
                                    <a href="/">退换货说明</a>
                                    <a href="/">常见问题</a>
                                </li>
                                <li>
                                    <div className={styles.title}>关于我们</div>
                                    <a href="/">联系我们</a>
                                    <a href="/">商家入驻</a>
                                </li>
                                <li>
                                    <div className={styles.tel}>400-885-0501</div>
                                    <div className={styles.time}>周一至周五 8:30 - 18:30</div>
                                </li>
                            </ul>
                            <div className={styles.erweimar}>
                                <img
                                    src="http://statics.huhoo.com/css/opark/mall/images/code.png"
                                    alt=""
                                />
                                <span>下载园区在线</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <div className={styles.footerNavc}>
                            Copyright © 2007-2016 苏州欧帕克信息技术有限公司 版权所有
                            苏ICP备15022748号
        </div>
                    </div>
                </div>
                <div className={styles.fixedBox}>
                    <ul>
                        <li>
                            <a href="/">
                                <em>{props.cartNum}</em>
                                <i className={styles.cartI}></i>
                                <div className={styles.title}>购物车</div>
                            </a>
                        </li>
                        <li className={styles.appBlock}>
                            <a href="/">
                                <i className={styles.phoneI}></i>
                                <div className={styles.title}>APP</div>
                                <div className={styles.appShow}>
                                    <span className={styles.arrowRp}></span>
                                    <img
                                        src="http://statics.huhoo.com/css/opark/mall/images/code.png"
                                        className={styles.code}
                                    />
                                    <div>下载园区在线</div>
                                </div>
                            </a>
                        </li>
                        <li className={styles.gotop}>
                            <a href="/">
                                <i className={styles.topI}></i>
                                <div className={styles.title}>TOP</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.fixedBox}>
                    <ul>
                        <li>
                            <a href="/cart">
                                <em>0</em>
                                <i className={styles.cartI}></i>
                                <div className={styles.title}>购物车</div>
                            </a>
                        </li>
                        <li className={styles.appBlock}>
                            <a href="/">
                                <i className={styles.phoneI}></i>
                                <div className={styles.title}>APP</div>
                                <div className={styles.appShow}>
                                    <span className={styles.arrowRp}></span>
                                    <img src="http://statics.huhoo.com/css/opark/mall/images/code.png" className={styles.code} />
                                    <div>下载园区在线</div>
                                </div>
                            </a>
                        </li>
                        <li className={styles.gotop}>
                            <a href="#top">
                                <i className={styles.topI}></i>
                                <div className={styles.title}>TOP</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )


    }


}

export default connect(state => state.info)(allIndex);

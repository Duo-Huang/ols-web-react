import React from 'react'
import cls from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import * as styles from './topbar.less'
import logo from '../../assests/imgs/thoughtworks-logo.png'
import avatar from '../../assests/imgs/oval.png'

class Topbar extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <img src={logo} className={styles.logo} />
                <Link to="account" className={cls({
                    [styles.active]: this.props.location.pathname === '/account'
                })}>账户</Link>
                <Link to="train" className={cls({
                    [styles.active]: this.props.location.pathname === '/train'
                })}>训练营</Link>
                <Link to="mission" className={cls({
                    [styles.active]: this.props.location.pathname === '/mission'
                })}>任务卡</Link>
                <img src={avatar} className={styles.avatar}/>
            </div>
        );
    }
}

export default withRouter(Topbar);
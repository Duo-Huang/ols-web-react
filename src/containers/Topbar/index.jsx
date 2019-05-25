import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './topbar.less'
import logo from '../../assests/imgs/thoughtworks-logo.png'

export default class Topbar extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <img src={logo} />
                <Link to="account">账户</Link>
                <Link to="train">训练营</Link>
                <Link to="mission">任务卡</Link>
            </div>
        );
    }
}
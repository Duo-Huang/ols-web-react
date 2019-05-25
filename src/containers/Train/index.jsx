import React from 'react'
import * as styles from './train.less'
import api from '../../api'

export default class Topbar extends React.Component {

    constructor() {
        super();
        this.state = {trainList: []}
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <input type="text"/>
                    <button type="button"></button>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        const resp = await api.get('api/trainList');
        if (resp.status === 200) {
            this.setState({
                trainList: resp.data
            })
        }
    }
}
import React from 'react'
import cls from 'classnames'
import * as styles from './train.less'
import Card from '../../components/Card'
import addIcon from '../../assests//imgs/add.png'
import api from '../../api'

const addCard = <div className={styles.addCardContainer}>
    <div className={styles.addTrain}>
        <img src={addIcon} alt="add" />
        <div className={styles.addTitle}>创建训练营</div>
    </div>
</div>

export default class Topbar extends React.Component {

    constructor() {
        super();
        this.state = {
            trainList: [],
            value: '',
            searchResult: []
        }
    }
    render() {
        const { searchResult, value } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.inputContainer}>
                        <input type="text" value={value} onChange={this.inputChange} />
                        <span className={styles.inputClear} onClick={this.inputClear}></span>
                    </span>
                    <button type="button" onClick={this.search}>搜索</button>
                </div>
                <div className={styles.section}>
                    <ul className={cls(styles.cardList, 'clear')}>
                        <li style={{ marginRight: '40px' }} onClick={this.addTrain}>
                            {addCard}
                        </li>
                        {
                            searchResult.map((item, index) => {
                                return (
                                    <li key={item.id} onClick={() => {this.showDetail(item.id)}}style={{ marginRight: (index + 2) % 3 === 0 ? 0 : '40px' }}>
                                        <Card title={item.title} description={item.description} time={item.startTime} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        const resp = await api.get('api/trainList');
        if (resp.status === 200) {
            this.setState({
                trainList: resp.data,
                searchResult: resp.data
            })
        } else {
            // TODO: 
        }
    }

    inputChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    inputClear = () => {
        this.setState({value: ''})
    }

    search = () => {
        const { value, trainList } = this.state;
        const result = [];
        if (value === '') {
            window.location.reload();
            return;
        }
        trainList.forEach((item) => {
            if (item.title.match(value)) {
                result.push(item);
            }
            if (item.description.match(value)) {
                result.push(item);
            }

        });
        this.setState({ searchResult: result })

        if (result.length === 0) {
            window.alert('您好，您所搜索的内容不存在！');
        }
    }

    addTrain = () => {
        this.props.history.push('/train/create')
    }

    showDetail = (trainId) => {
        this.props.history.push(`/train/details/${trainId}`)
    }
}
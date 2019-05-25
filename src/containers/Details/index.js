import React from 'react';
import Card from '../../components/Card';
import styles from './index.less'

export default class Details extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'},
      {title:'任务卡1',description:'这个是我们的任务描述',created_time:'2018-01-01 09:12:33.443'}],
      details: {
        title: '',
        id: '',
        description: '',
      }
    }
  }

  render() {
    const { title='训练营标题', description='训练营描述简介训练营描述简介训练营描述简介训练营描述简介训练营描述简介', cards } = this.state;
    return (
      <div
        className={styles['details-container']}
      >
        <div className={styles['details-title']}>{title}</div>
        <div className={styles['details-description']}>{description}</div>
        <div className={styles['details-cards-container']}>{
          cards.map(item => {
            const card = { ...item, time: item.created_time.substring(0,9) };
            return <Card {...card} />
          })
        }</div>
      </div>
    );
  }
}
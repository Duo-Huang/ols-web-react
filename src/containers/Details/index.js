import React from 'react';
import Card from '../../components/Card';
import api from '../../api';
import styles from './index.less'
class Details extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ id: '12', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '13', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '14', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '15', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '16', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '17', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '18', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '19', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' },
      { id: '10', title: '任务卡1', description: '这个是我们的任务描述', created_time: '2018-01-01 09:12:33.443' }],
      details: {
        title: '',
        id: '',
        description: '',
      }
    }
  }
  componentDidMount() {
    this.getDetails();
  }
  getDetails() {
    api.get('/api/trainingcamps/{id}').then((res) => {
      const { data } = res;
      this.setState({ details: data });
    })
      .catch((err) => {
       alert('详情获取失败')
      })
  }
  goBack = () => {
    this.props.history.goBack();
  }
  render() {
    const { details: { title = '训练营标题', description = '训练营描述简介训练营描述简介训练营描述简介训练营描述简介训练营描述简介' }, cards } = this.state;
    return (
      <div className={styles.main}>
      <div
        className={styles['details-container']}
      >
        <div className={styles['details-back']} onClick={this.goBack}>返回</div>
        <div className={styles['details-title']}>{title}</div>
        <div className={styles['details-description']}>{description}</div>
        <div className={styles['details-cards-container']}>{
          cards.map(item => {
            const card = { ...item, time: item.created_time.substring(0, 9) };
            return <Card key={card.id} {...card} />
          })
        }</div>
      </div>
      </div>
    );
  }
}
export default Details;
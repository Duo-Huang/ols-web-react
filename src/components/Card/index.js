import React from 'react';
import styles from './index.less';
export default class Card extends React.PureComponent {
  render() {
    const {
      title = 'loading',
      description = 'loadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloading',
      time = '2018-01-15创建'
    } = this.props;
    return (
      <div
        className={styles['card-container']}
      >
        <div className={styles['card-title']}>{title}</div>
        <div className={styles['card-description']}>{description}</div>
        <div className={styles['card-time']}>{time}</div>
        <div className={styles['card-close']}></div>
      </div>
    );
  }
}
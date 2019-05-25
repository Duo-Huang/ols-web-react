import React from 'react';
import classes from './index.less';
import cls from 'classnames';
export default class Create extends React.Component {
  render() {
    return (
      <form className={classes.container}>
        <span className={classes.return}>返回</span>
        <span className={classes.title}>创建训练营</span>
        <div className={cls({
          [classes.formItem]: true,
          [classes.name]: true
        })}>
          <span>标题</span>
          <input type="text" />
        </div>
        <div className={cls({
          [classes.formItem]: true,
          [classes.time]: true
        })}>
          <span>开营时间</span>
          <div>
            <input type="text" />
            年
            <input type="text" />
            月
            <input type="text" />
            日
          </div>
        </div>
        <div className={cls({
          [classes.formItem]: true,
          [classes.description]: true
        })}>
          <span>描述</span>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span>0/300</span>
          </div>
        </div>
      </form>
    )
  }
}
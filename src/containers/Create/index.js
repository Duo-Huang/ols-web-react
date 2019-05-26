import React from 'react';
import classes from './index.less';
import cls from 'classnames';
import service from './service';
import Modal from '../../components/modal';
export default class Create extends React.Component {
  state = {
    title: "",
    year: "",
    month: "",
    day: "",
    description: "",
    visible: false,
    descriptionLength: 0
  }

  changeHandle = (key) => (evt) => {
    const { value } = evt.target;
    this.setState({
      [key]: value,
      descriptionLength: key === 'description' ? value.length : this.state.descriptionLength
    });
  }

  submitHandle = () => {
    const { title, description, year, month, day } = this.state;
    const params = {
      title,
      description,
      start_time: [year, month, day].join('-')
    };
    
    service.create(params);
  }

  cancelHandle = () => {
    this.setState({
      visible: true
    })
  }

  confirm = () => {
    this.setState({
      visible: false
    });
    this.props.history.push('/train');
  }

  cancel = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    const { title, year, month, day, description, visible, descriptionLength } = this.state;
    return (
      <div className={classes.container}>
        <span onClick={this.cancelHandle} className={classes.return}>返回</span>
        <span className={classes.title}>创建训练营</span>
        <div className={cls({
          [classes.formItem]: true,
          [classes.name]: true
        })}>
          <span>标题</span>
          <input type="text" onChange={this.changeHandle('title')} value={title} />
        </div>
        <div className={cls({
          [classes.formItem]: true,
          [classes.time]: true
        })}>
          <span>开营时间</span>
          <div>
            <input type="text" onChange={this.changeHandle('year')} value={year} />
            年
            <input type="text" onChange={this.changeHandle('month')} value={month} />
            月
            <input type="text" onChange={this.changeHandle('day')} value={day} />
            日
          </div>
        </div>
        <div className={cls({
          [classes.formItem]: true,
          [classes.description]: true
        })}>
          <span>描述</span>
          <div>
            <textarea onChange={this.changeHandle('description')} value={description}></textarea>
            <span className={classes.length}>{descriptionLength}/300</span>
          </div>
        </div>
        <div className={classes.buttonGroup}>
          <button onClick={this.cancelHandle}>取消</button>
          <button onClick={this.submitHandle}>保存</button>
        </div>
        <Modal title="真的要离开吗？" visible={visible} cancel={this.cancel} confirm={this.confirm}>
          离开后就回不来了哦！
        </Modal>
      </div>
    )
  }
}
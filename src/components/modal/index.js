import React from 'react';
import Portal from '../Portal';
import classes from './index.less';
export default class Modal extends React.Component {
  render() {
    const { title, visible, children, cancel, confirm } = this.props;
    return visible ?  (
      <Portal>
        <div className={classes.modal}>
          {
            title && (
              <div className={classes.title}>
                {title}
              </div>
            )
          }
          <div className={classes.content}>
            {
              children
            }
          </div>
          <div className={classes.buttonGroup}>
            <button onClick={cancel}>取消</button>
            <button onClick={confirm}>确认</button>
          </div>
          <div onClick={cancel} className={classes.close}>×</div>
        </div>
        <div onClick={cancel} className={classes.mask} />

      </Portal>
    ) : null
  }
}
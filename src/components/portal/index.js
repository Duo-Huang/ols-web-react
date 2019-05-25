import React from 'react';
import { createPortal } from 'react-dom';
const body = document.body;
const div = document.createElement('div');
body.appendChild(div);
export default class Portal extends React.Component {
  render() {
    const { children } = this.props;
    return (
      createPortal(children, div)
    )
  }
}
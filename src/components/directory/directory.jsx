import React, { Component } from 'react';
import './directory.scss';
import {sections} from '../../data';
import MenuItem from '../menu-item/menu-item';

class Directory extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sections: sections
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({id, image, title, size}) => (
            <MenuItem key={id} title={title} image={image} size={size} />
          ))
        }
      </div>
    )
  } 
}

export default Directory;
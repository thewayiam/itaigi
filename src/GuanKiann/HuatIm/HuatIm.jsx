import React from 'react';

import './HuatIm.css';

import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import SoundsMapping from './SoundsMapping';
import Debug from 'debug';

var debug = Debug('itaigi:HuatIm');

export default class HuatIm extends React.Component {

  play(id) {
    document.getElementById(id).play();
  }

  render() {
    if (!this.props.suData.屬性內容.音標) {
      return <div className='HuatIm hidden'></div>;
    }

    var id = SoundsMapping.map(this.props.suData.屬性內容.音標);
    if (id === undefined) {
      return <div className='HuatIm hidden'></div>;
    }

    return (
    <div className='HuatIm'>
      <audio id={'audio_' + id}>
        <source type='audio/mpeg'
          src={'http://t.moedict.tw/' + id + '.mp3'} />
      </audio>
      <button onClick={this.play.bind(this, 'audio_' + id)}
        className='ui compact icon button'>
        <i className='icon play'></i>
      </button>
    </div>
    );
  }
};

import React, {Component} from 'react';
import '../App.css';
import VolumeHigh from '../img/icons8-speaker-24c.png';
import VolumeOff from '../img/icons8-mute-24c.png';





class PlayerBar extends Component {

  render(){

    return (
    <section className="player-bar">
    <section id="buttons">
         <button variant="contained" color="secondary" id="previous" class="button-2" onClick={this.props.handlePrevClick}>
           <h6>Previous</h6>
         </button>

         <button id="next" class="button-2" onClick={this.props.handleNextClick}>
           <h6>Next</h6>
         </button>
       </section>
       <section id="time-control">
         <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
         <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration)||0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
         <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
       </section>
       <section id="volume-control">
         <div>
          <img src={VolumeOff} alt="VolumeOff sign" />
         </div>
         <input
          type="range"
          className="seek-bar"
          value={this.props.volume}
          max='1'
          min='0'
          step='0.01'
          onChange={this.props.handleVolumeChange}
           />
         <div>
          <img src={VolumeHigh} alt="VolumeHigh sign" />
         </div>
         </section>

    </section>
  );
  }
}

export default PlayerBar;

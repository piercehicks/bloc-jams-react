import React, {Component} from 'react';
import Backward from '../img/backward.svg';
import Forward from '../img/forward.svg';
import Pause from '../img/icons8-pause-24.png';
import Play from '../img/icons8-play-24.png';
import VolumeHigh from '../img/icons8-voice-24.png';
import VolumeOff from '../img/icons8-mute-24.png';



class PlayerBar extends Component {
  render(){
    return (
    <section className="player-bar">
    <section id="buttons">
         <button id="previous" onClick={this.props.handlePrevClick}>
           <div className="ion-skip-backward">
            <img src={Backward} alt="Backward arrow" />
           </div>
         </button>
         <button id="play-pause" onClick={this.props.handleSongClick}>
           <span className={this.props.isPlaying
              ?
               <img src={Pause} alt="Pause sign" />
              :
              <img src={Play} alt="Play sign" />

            }>
          </span>

         </button>
         <button id="next" onClick={this.props.handleNextClick}>
           <span className="ion-skip-forward">
            <img src={Forward} alt="Forward arrow" />
           </span>
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
         <div className="icon ion-volume-low">
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
         <div className="icon ion-volume-high">
          <img src={VolumeHigh} alt="VolumeHigh sign" />
         </div>
         </section>



    </section>
  );
  }
}

export default PlayerBar;

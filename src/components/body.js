import React from "react";
import Logo from '../images/PULogo.png'
import Logo2 from '../images/PurdueLogo.png'
import Video from '../videos/Avo_RP.mp4'
import Audio from '../images/Audio.png'
import Mute from '../images/Muted.png'

export default function Body() {

    const [toggleMute, setToggleMute] = React.useState(true);
    // initially start muted
    function handleClick() {
        setToggleMute(prevState => !prevState)
    }
    function enterAudio(event) {
        if (event.key === 'Enter') {
          setToggleMute(prevState => !prevState)
        }
      }

    return (
    <div className="Body">
        <h1>Purdue Dota 2 Club</h1>
        <div className="Summary">
            <img src={Logo2} height="400px" />
            <p className="club-info">
                The Dota 2 Club is the hub for all Purdue Dota players. Play and learn the game through online matchmaking, inhouses, and LAN events.
            </p>
        </div>
        <br></br>
        <h1>Teamwork and Bonding</h1>
        <div className="Video-Info">
            <p className="Matchup">Purdue vs Michigan</p>
            <br></br>
            <img className="Video-Sound" src={toggleMute ? Mute : Audio} width="100px" height="100px" onClick={handleClick} onKeyDown={enterAudio}/>
        </div>
        <br></br>
        <br></br>
    </div>
    )
}
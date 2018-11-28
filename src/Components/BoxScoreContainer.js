import React from "react";
import NBAL from '../Images/NBALOGO.jpg'
import PLL from '../Images/PL2.png'
import UCLL from '../Images/UCLLOGO.jpg'

const boxScoreDiv = {
    margin: "1em",
    height: 'auto',
    minHeight: '500px',
    width: "95%",
    background: 'rgb(255, 248, 220)',
    overflow: 'auto',
}

const gameBoxScore = {
    position: 'relative',
    marginLeft: '3%',
    marginTop: '0.5%',
    marginBottom: '0.5%',
    height: '.auto',
    width: '45%',
    float: 'left',
}

const gameTeamScoreHeader = {
    position: 'relative',
    // margin: '10px',
    border: '10px coral',
    borderStyle: 'solid',
    height: '',
    width: '.auto',
    display: 'grid',
    gridTemplateColumns: '30% 15% 10% 30% 15%',
    gridTemplateRows: '100%',
}

const gamePlayerStats = {
    position: 'relative',
    margin: '',
    height: '',
    width: '',
    display: 'grid',
    gridTemplateColumns: '12% repeat(11, 8%)',
    gridTemplateRows: '100%',
    gridRowGap: '8px',
    overflow: 'hidden',
    minHeight: '0',
    minWidth: '0',
}

const startedTeamName = {
    fontSize: '2vw',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: '50%',
    fontFamily: 'Arial Narrow',
}

const playerNameText = {
    fontSize: '12px',
    fontWeight: 'light',
    fontFamily: 'Sans Serif',
    overflow: 'hidden',
    whiteSpace: 'pre',
    textOverflow: 'ellipsis',
}

const playerStatText = {
    fontSize: '10px',
    fontWeight: 'light',
    fontFamily: 'Sans Serif',
    overflow: 'false',
}

const headerTeamPoints = {
    // marginTop: '10%',
    alignSelf: 'center',
    fontSize: '1vw',
}

const headerGameTime = {
    // marginTop: '10%',
    alignSelf: 'center',
    fontSize: '1vw',
}

const statsText = {
    overflow: 'hidden',
    whiteSpace: 'pre',
    textOverflow: 'ellipsis',
}

class PlayerBoxScore extends React.Component {
    render() {
        return([
            <span className={this.props.team + this.props.player.number + 'Name'} style={playerNameText}>{this.props.player.name}</span>,
            <span className={this.props.team + this.props.player.number + 'Minutes'} style={playerStatText}>{this.props.player.playTime}</span>,
            <span className={this.props.team + this.props.player.number + 'Points'} style={playerStatText}>{this.props.player.pts}</span>,
            <span className={this.props.team + this.props.player.number + 'Rebounds'} style={playerStatText}>{this.props.player.reb}</span>,
            <span className={this.props.team + this.props.player.number + 'Assists'} style={playerStatText}>{this.props.player.assist}</span>,
            <span className={this.props.team + this.props.player.number + 'Steals'} style={playerStatText}>{this.props.player.stl}</span>,
            <span className={this.props.team + this.props.player.number + 'Blocks'} style={playerStatText}>{this.props.player.blk}</span>,
            <span className={this.props.team + this.props.player.number + 'FieldGoals'} style={playerStatText}>{this.props.player.FG}</span>,
            <span className={this.props.team + this.props.player.number + 'FreeThrows'} style={playerStatText}>{this.props.player.FT}</span>,
            <span className={this.props.team + this.props.player.number + 'ThreePointers'} style={playerStatText}>{this.props.player.three}</span>,
            <span className={this.props.team + this.props.player.number + 'Turnovers'} style={playerStatText}>{this.props.player.TO}</span>,
            <span className={this.props.team + this.props.player.number + 'plusMinus'} style={playerStatText}>{this.props.player.plusMinus}</span>
        ])
    }
}

class DivBoxScore extends React.Component {
    // console.log(this.props.gameBox)
    render() {
        console.log(this.props.gameBox)
        if(!this.props.gameBox.homeBox){
            return(
                <div className={'Div' + this.props.gameBox.homeTeam + this.props.gameBox.awayTeam} style = {gameBoxScore}>
                    <div className="TEAMS SCORE AND TIME" style={gameTeamScoreHeader}>
                        <span className="homeTeamName">{this.props.gameBox.homeTeam}</span>
                        <span className="homeTeamRecord">{this.props.gameBox.homeRecord}</span>
                        <span className="gameTime">{this.props.gameBox.startTime}</span>
                        <span className="awayTeamName">{this.props.gameBox.awayTeam}</span>
                        <span className="awayTeamRecord">{this.props.gameBox.awayRecord}</span>
                        <span className="vegasOdds">-3.5</span>
                    </div>
                </div>
            );
        } else{
            return(
                <div className={'Div' + this.props.gameBox.homeTeam + this.props.gameBox.awayTeam} style ={gameBoxScore}>
                    <div className="TeamHeader" style={gameTeamScoreHeader}>
                        <span className="homeTeamName" style={startedTeamName}>{this.props.gameBox.homeTeam}</span>
                        <span className="homeTeamPoints" style={headerTeamPoints}> {this.props.gameBox.homeTotals.pts}</span>
                        <span className="gameTime" style={headerGameTime}>{this.props.gameBox.gameTime}</span>
                        <span className="awayTeamName" style={startedTeamName}>{this.props.gameBox.awayTeam}</span>
                        <span className="awayTeamPoints" style={headerTeamPoints}> {this.props.gameBox.awayTotals.pts}</span>
                        {
                            console.log(document.getElementsByClassName('Div' + this.props.gameBox.homeTeam + this.props.gameBox.awayTeam))
                        }
                    </div>
                    <div className="PlayerHeader" style={gamePlayerStats}>
                        <span className='playerName' style={statsText}>Name</span>
                        <span className='minutes' style={statsText}>Min</span>
                        <span className='points' style={statsText}>Pts</span>
                        <span className='rebounds' style={statsText}>Reb</span>
                        <span className='assits' style={statsText}>Assist</span>
                        <span className='steals' style={statsText}>Stls</span>
                        <span className='blocks' style={statsText}>Blks</span>
                        <span className='fieldGoals' style={statsText}>FG</span>
                        <span className='freeThrows' style={statsText}>FT</span>
                        <span className='threePointers' style={statsText}>3PT</span>
                        <span className='turnovers' style={statsText}>TOs</span>
                        <span className='plusMinus' style={statsText}>+/-</span>
                        {
                            Object.keys(this.props.gameBox.homeBox).map((player, index) => {
                                if(index < 3){
                                return(
                                    <PlayerBoxScore 
                                        player={this.props.gameBox.homeBox[player]}
                                        team={this.props.gameBox.awayTeam}
                                    />
                                )
                                }
                            }) 
                        }
                        {
                            Object.keys(this.props.gameBox.awayBox).map((player, index) => {
                                if(index < 3){
                                return(
                                    <PlayerBoxScore 
                                        player={this.props.gameBox.awayBox[player]}
                                        team={this.props.gameBox.awayTeam}
                                    />
                                )
                                }
                            })
                        }
                    </div>
                </div>
            );
        }
    }
}

export default class BoxScoreContainer extends React.Component {
    constructor() {
      super();
      this.state = {
          gameInd: 0
      }
    }

    render() {
        if(this.props.league === "NBA"){
            this.state.gameInd = 0
        } else if(this.props.league === "PL"){
            this.state.gameInd = 1
        } else if(this.props.league === "UCL"){
            this.state.gameInd = 2
        }
        console.log(this.props.games)
        console.log("www")
        return(
            <div className={this.props.league} style={boxScoreDiv}>
                {
                    // console.log(this.props.games[this.state.gameInd])
                    Object.keys(this.props.games[this.state.gameInd]).map((game => {
                        return(<DivBoxScore
                            gameBox = {this.props.games[this.state.gameInd][game]}
                        />)
                    }))
                }
            </div>  
        );
    }
}
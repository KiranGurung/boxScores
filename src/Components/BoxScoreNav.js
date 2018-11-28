import React from "react";
import NBAL from '../Images/NBALOGO.jpg'
import PLL from '../Images/PL2.png'
import UCLL from '../Images/UCLLOGO.jpg'

const miniDivStyle = {
    width: '80%',
    padding: '0%',
    height: '3em',
    // background: '#f3a633',
    margin: 'auto',
    // display: 'flex'
    display: 'block',
    overflow: 'hidden',
}

const miniSectionStyle = {
    width: '23%',
    minWidth: '300px',
    height: '3em', 
    minHeight: '0em',
    marginLeft: '8%',
    // marginTop: '1%',
    // marginRight: '8%',
    background: 'rgb(255, 248, 220)',
    float: 'left',
    display: 'grid', 
    gridTemplateColumns: '10% 30% 30% 30%',   
    // overflow: 'hidden',
}

const leagueNameNav = {
    fontFamily: 'monospace',
    color: '#222',
    textTransform: 'uppercase',
    fontSize: '16px',
    alignSelf: 'center',
    // display: '',
    // verticalAlign: 'middle',
    // display: 'inline-block',
    // lineHeight: '50px',
    // top: '50%',
}

const navGameSection = {
    fontFamily: 'Arial Narrow',
    fontSize: '10px',
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    gridTemplateRows: '33% 33% 33%',
    gridTemplateAreas:
    "'time time time' 'homeTeam homeTeam homeScore' 'awayTeam awayTeam awayScore'",
}

const navGameTime = {
    gridArea: 'time',
}

const navHomeTeam = {
    gridArea: 'homeTeam',
}

const navAwayTeam = {
    gridArea: 'awayTeam',
}

const navHomeScore = {
    gridArea: 'homeScore',
}

const navAwayScore = {
    gridArea: 'awayScore',
}

// Creates Box Score for the under header nav
class NavBoxScore extends React.Component{
    render(){
        return (
            <section className={this.props.sectionName} style = {navGameSection}>
                <span className="gameTime" style = {navGameTime}>{this.props.time}</span>
                <span className="homeTeamName" style = {navHomeTeam}>{this.props.homeTeam}</span>
                <span className="homeTeamRecord" style = {navHomeScore}>{this.props.homeScore}</span>
                <span className="awayTeamName" style = {navAwayTeam}>{this.props.awayTeam}</span>
                <span className="awayTeamRecord" style = {navAwayScore}>{this.props.awayScore}</span>
            </section>
        );
    }
}



export default class MiniBoxScores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        // this.props.games[0] = this.props.NBAGames
        const keys = Object.keys(this.props.games[0])
        var hold = []
        console.log(keys)
        var maxLength = keys.length
        if(keys.length >= 3){
            maxLength = 3
        }
        for(var i = 0; i < maxLength; i++){
            hold[i] = this.props.games[0][keys[i]]
        }
        const NBAGamesNav = hold//this.props.games[0].slice(0, (this.props.games[0].length >= 3 ? this.props.games[0].length : 3))
        // console.log(this.props.NBAGames)
        console.log(hold)
        return(
            <div className="miniBoxDiv" style = {miniDivStyle}>
                <nav className="NBABoxScoreNav" style = {miniSectionStyle}>
                    <span className="NBASPAN" style = {leagueNameNav}>NBA</span>
                    {
                        NBAGamesNav.map((game => {
                            return(<NavBoxScore
                                sectionName = {game.homeTeam + game.awayTeam}
                                time = {game.gameTime ? game.gameTime : game.startTime}
                                homeTeam = {game.homeTeam}
                                awayTeam = {game.awayTeam}
                                homeScore = {game.homeTotals ? game.homeTotals.pts : game.homeRecord}
                                awayScore = {game.awayTotals ? game.awayTotals.pts : game.awayRecord}
                            />)
                        }))
                    }
                </nav>
                <nav className="PLBoxScoreNav" style = {miniSectionStyle}>
                    <span style = {leagueNameNav}>PL</span>
                    <NavBoxScore
                        sectionName = 'PLNavGame1'
                        time = '45:54'
                        homeTeam = 'Arsenal'
                        awayTeam = 'Spurs'
                        homeScore = '1'
                        awayScore = '0'
                    />
                </nav>
                <nav className="UCLBoxScoreNav" style = {miniSectionStyle}>
                    <span style = {leagueNameNav}>UCL</span>
                    <NavBoxScore
                        sectionName = 'PLNavGame1'
                        time = {'90\' 2'}
                        homeTeam = 'Arsenal'
                        awayTeam = 'RM'
                        homeScore = '2'
                        awayScore = '1'
                    />
                </nav>
            </div>
        )
    }
}
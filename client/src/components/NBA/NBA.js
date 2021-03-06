import React, { Component } from 'react';
import axios from 'axios';
import './NBA.css';
import Table from 'react-bootstrap/Table'
import TeamLogo from './TeamLogo';
import Spinner from 'react-bootstrap/Spinner';


class NBA extends Component {
    state = {month:'', day:'', week:'',  timeTeamsArena: [{}], loading: ''}
    render() 
    {
        return (
            <div className='div-pic'>
                <TeamLogo/>
                {this.state.loading}
                <h1 className='nba-title'>NBA schedule</h1>
                <Table striped bordered hover className='schedule-table'>
                    <thead>
                        <tr className='main-th'>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Teams</th>
                        <th>Arena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.timeTeamsArena.map((g, i) => {
                            return(
                        <tr key={i}>
                            <td className='date'>
                                {this.state.month} {this.state.day} <br></br>
                                <div className='week'>WEEK {g.week}</div>
                                <div className='week'>{this.state.timeTeamsArena.length} GAMES</div>
                            </td>
                            <td className='time-td'>{g.time}</td>
                            <td className='teams'>
                                <p>{g.team1} {g.team1Nick}</p> 
                                <p>{g.team2} {g.team2Nick}</p>
                               
                            </td>
                            <td className='arena-td'>
                                {g.arena} <br></br>
                                {g.place1}, {g.place2}
                            </td>
                        </tr>
                            )})}
                    </tbody>
                </Table>
            </div>
        );
    }
    
    componentDidMount() 
    {
        this.setState({loading: <Spinner animation="border" role="status">
        
        </Spinner>});
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
      .then((res)=> {
        if(res.status === 200)
        {
            let index = new Date().getMonth()+4;
            let todayDay = new Date().getDate(); 
            if (todayDay.toString().length < 2) {
                todayDay = '0'+todayDay.toString()
            }
            let monthGames = res.data.lscd[index].mscd.g;
            let correntMonth = res.data.lscd[index].mscd.mon;
            console.log(todayDay);

            let currentMonthGames = [];
            for(let i=0; i < monthGames.length; i++)
            {
                if(todayDay <= Number(monthGames[i].gdte.split("-")[2]))
                {
                    currentMonthGames.push(monthGames[i]);
                }
            }            

            let todayGames = currentMonthGames.filter((g, i) => g.gdte.split("-")[2] === todayDay.toString());

            let timeTeamsArena = []; 
            for(let i=0; i<todayGames.length; i++)
            {
                let ttaObj = 
                {
                    week: todayGames[i].gweek,
                    time: todayGames[i].stt,
                    team1: todayGames[i].h.tc,
                    team1Nick: todayGames[i].h.tn,
                    team2: todayGames[i].v.tc,
                    team2Nick: todayGames[i].v.tn,
                    arena: todayGames[i].an,
                    place1: todayGames[i].ac,
                    place2: todayGames[i].as
                }
                timeTeamsArena.push(ttaObj);

            }
            
            this.setState({timeTeamsArena: timeTeamsArena,month: correntMonth, day: todayDay})
        }
        this.setState({loading: ''})
        })
        .catch((error)=> {
            console.log(error);
        });

    }
}

export default NBA;

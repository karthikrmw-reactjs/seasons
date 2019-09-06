import React from 'react';
import './SeasonDisplay.css';

const getSeason = function(lat, month){
    if( month > 2 && month < 8 ){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat < 0 ? 'summer' : 'winter';
    }
}

const seasonConfig = {
    'winter' : {
        'text'      : 'Its chilly',
        'iconName'  : 'snowflake'
    },
    'summer' : {
        'text'      : 'Lets hit beach',
        'iconName'  : 'sun'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text , iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} massive icon icon-left`}></i>
            <h1> Season - {text} </h1>
            <i className={`${iconName} massive icon icon-right`}></i>
        </div>
    );
}

export default SeasonDisplay;

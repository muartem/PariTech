import React from 'react';
import styles from './Card.module.css';

export default class Card extends React.Component{
   render(){
       return(
            <div className={styles.card}>
                <h2>{this.props.date}</h2>
                <div className={styles.icon} style={{
                    backgroundImage: `url(./icons/${this.props.img}.svg)`
                }}/>
                <p>&#9730; {this.props.pred}%</p>
                <p>&#9872; {this.props.speed} km/h</p>
                <h2> {this.props.max}° / <span> {this.props.min}°</span></h2>
            </div>
        )
    }
}
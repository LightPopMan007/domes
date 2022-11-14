import React from "react";
import style from '../styles/landingpage.module.css'

const List = (props) => {
    return (
        <div className={style.list1}>
            <img src={props.img}alt="house 1" />
            <h3>{props.title}</h3>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
            </ul>
            <div className={style.price}>
                <p>{props.price}</p>
                <a href={props.url}><button className={style.booknow}>Buy Now</button></a>
            </div>
        </div>
    )
}

export default List;
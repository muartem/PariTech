import styles from './Cards.module.css';
import Card from "../Card/Card";
import {WHETHER} from "../Whether";



const cards = WHETHER.map((w) =>
    <Card date={w.date} img={w.img} pred={w.pred} speed={w.speed} max={w.max} min={w.min} />
)
function Cards() {
  return (
    <div className={styles.cards}>
        {cards}
    </div>
  )
}

export default Cards

import styles from "./SlideCard.module.css"

function SlideCard({data:{ image, title}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default SlideCard
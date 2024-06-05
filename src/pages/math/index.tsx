import styles from './styles/grid.module.css';

export const MathPage = () => {
  return (
    <>
      <h1>Решите математические примеры</h1>
      <div className={styles.main}>
        { Array.from({ length: 90 }).map((_, idx) => (
          <div>
            <span className="w-[70px] inline-block">10 + {idx} = </span>
            <input type="number" className="border rounded w-[50px]" autoFocus={idx === 0} />
          </div>
        )) }
      </div>
    </>
  )
}
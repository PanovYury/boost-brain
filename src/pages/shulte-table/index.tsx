import { useCallback, useEffect, useState } from "react"

import styles from './shulte-table.module.css';

const getRandomArray = (size: number = 25): number[] => {
  const array = Array.from({ length: size }).map((_, idx) => idx + 1);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 1000 / 60);
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

let timer: number | null = null;

export const ShulteTablePage = () => {
  const [array, setArray] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [play, setPlay] = useState(false);

  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const handleClickItem = (itemIndex: number) => {
    if (current + 1 === itemIndex) {
      setCurrent(prev => prev + 1);
    }
  }

  const reset = () => {
    setCurrent(0);
    setStartTime(0);
    setArray(getRandomArray())
  }

  const updateTimer = useCallback((timestamp: number) => {
    if (!startTime) {
      setStartTime(timestamp);
    }
    const elapsedTime = timestamp - startTime;
    setTime(elapsedTime);
    timer = requestAnimationFrame(updateTimer);
  }, [startTime]);

  const restart = () => {
    setPlay(true);
    reset();
    timer = requestAnimationFrame(updateTimer);
  }

  useEffect(() => {
    reset();
  }, [])

  const stop = () => {
    if (timer) {
      cancelAnimationFrame(timer);
    }
  }

  // useEffect(() => {
  //   if (play) {

  //   }
  //   timer = requestAnimationFrame(updateTimer);
  //   return stop;
  // }, [updateTimer]);

  useEffect(() => {
    if (current === 25) {
      setPlay(false);
      stop();
    }
  }, [current])

  return (
    <>
      <h1>Найдите все числа по порядку</h1>
      <p>{formatTime(time)}</p>
      <div className="relative">
        <section className="grid grid-cols-5">
          {array.map((item) =>
            <div
              onClick={() => handleClickItem(item)}
              className={`${styles.item} ${current + 1 === item ? styles.current : ''}`}
              key={item}>{item}</div>
          )}
        </section>
        <button className={styles.repeat} disabled={play} onClick={restart}>Начать</button>
      </div>
    </>
  )
}
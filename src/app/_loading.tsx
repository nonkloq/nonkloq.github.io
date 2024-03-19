import styles from '@/styles/loading.module.css';

export default function Loading() {
 const n = 3;
  return (
    <div className={styles.center}>
      {[...Array(n)].map((_, index) => (
        <div key={index} 
        style={{
          animationDelay: `-${index/n *.6}s`
        }}
        className={styles.wave}></div>
      ))}
    </div>
  );
}
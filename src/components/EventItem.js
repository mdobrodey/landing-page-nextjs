import Image from 'next/image';
import Button from '@/components/Button';
import styles from './EventItem.module.css';

export default function EventItem({ image, title, gridArea }) {
  return (
    <div className={styles.event} style={{ gridArea }}>
      <Image
        src={image}
        alt="Background"
        fill
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <div className={styles.eventTitle}>{title}</div>
      <Button variant="event">More</Button>
    </div>
  );
}

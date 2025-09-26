import styles from './page.module.css';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import AnimatedCounter from '../components/AnimatedCounter';
import ProductItem from '@/components/ProductItem';
import EventItem from '@/components/EventItem';
import Benefits from '@/components/Benefits';

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                New Cafe
                <br />
                by <span className="textGradient">StarBucks</span>
              </h1>
              <p className={styles.description}>
                Have time to buy the most harmonious drinks in the
                new&nbsp;Starbucks coffee and don&apos;t forget about the
                discount!
              </p>
              <div className={styles.buttons}>
                <Button variant="primary" href="#">
                  Select a coffee
                </Button>
                <Button variant="secondary" href="#">
                  More
                </Button>
              </div>
              <div className={styles.statsContainer}>
                <div className={styles.stats}>
                  <div className={styles.statsItem}>
                    <p className={styles.statsTitle}>
                      <AnimatedCounter
                        target={9000}
                        duration={2500}
                        suffix=""
                      />
                    </p>
                    <p className={styles.statsDesc}>Premium Users</p>
                  </div>
                  <div className={styles.statsItem}>
                    <p className={styles.statsTitle}>
                      <AnimatedCounter
                        target={2500}
                        duration={2600}
                        suffix=""
                      />
                    </p>
                    <p className={styles.statsDesc}>Happy Customer</p>
                  </div>
                  <div className={styles.statsItem}>
                    <p className={styles.statsTitle}>
                      <AnimatedCounter target={28} duration={2700} />
                    </p>
                    <p className={styles.statsDesc}>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <Image
                src="/cups/green-big.png"
                alt="Starbucks coffee cup"
                className={styles.heroImage}
                width={468}
                height={628}
              />
            </div>
          </section>

          <Benefits />

          <section className={styles.infoText} id="wemake">
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.wrapperText}>
                  <h1 className={styles.infoTitle}>
                    We make <span className="textGradient">delicious</span>
                  </h1>
                  <p className={styles.description}>
                    Only in 2021 we have made more than 100,000 orders for you,
                    your loved ones, all of you, and in 2022 we are ready to
                    destroy the market
                  </p>
                  <div className={styles.infoImage}>
                    <Image
                      src="/kitchen.jpg"
                      width={447}
                      height={275}
                      alt="kitchen"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.imgWrapper}>
                <Image src="/room.jpg" width={465} height={684} alt="room" />
              </div>
            </div>
          </section>

          <section className={styles.products} id="products">
            <div className={styles.container}>
              <div className={styles.productsInfo}>
                <h1 className={styles.productsTitle}>
                  New Our <span className="textGradient">Products</span>
                </h1>
                <p className={styles.productsDesc}>
                  Have time to buy the most harmonious drinks in the new
                  Starbucks coffee and don&apos;t forget about the discount!
                  Starbucks coffee and don&apos;t forget about the discount!
                </p>
              </div>
              <div className={styles.productsWrapper}>
                <ProductItem
                  title="Fast"
                  description="Our cafe will serve you quickly"
                  image="/cups/green.png"
                  price="7,45$"
                  ml="330 ml"
                />
                <ProductItem
                  title="Fast"
                  description="Our cafe will serve you quickly"
                  image="/cups/brown.png"
                  price="7,45$"
                  ml="330 ml"
                />
                <ProductItem
                  title="Fast"
                  description="Our cafe will serve you quickly"
                  image="/cups/yellow.png"
                  price="7,45$"
                  ml="330 ml"
                />
                <ProductItem
                  title="Fast"
                  description="Our cafe will serve you quickly"
                  image="/cups/brown.png"
                  price="7,45$"
                  ml="330 ml"
                />
              </div>
            </div>
          </section>

          <section className={styles.events} id="events">
            <div className={styles.container}>
              <div
                className={styles.productsInfo}
                style={{ margin: '6rem 0 4rem 0' }}
              >
                <h1 className={styles.productsTitle}>
                  Our New <span className="textGradient">Events</span>
                </h1>
                <p className={styles.productsDesc}>
                  Only in 2021 we have made more than 100,000 orders for you,
                  your loved ones, all of you, and in 2022 we are ready to
                  destroy the market
                </p>
              </div>

              <div className={styles.eventsWrapper}>
                <EventItem
                  image="/events/1.png"
                  title={
                    <>
                      TWO COFFEE <br />
                      FOR 1 PRICE
                    </>
                  }
                  gridArea="price"
                />
                <EventItem
                  image="/events/2.png"
                  title={
                    <>
                      KITCHEN <br />
                      TOUR
                    </>
                  }
                  gridArea="kitchen"
                />
                <EventItem
                  image="/events/3.png"
                  title={
                    <>
                      FREE COFFEE <br />
                      FOR 3 COFFEE
                    </>
                  }
                  gridArea="free"
                />
                <EventItem
                  image="/events/4.png"
                  title={
                    <>
                      OUR <br />
                      SOCIALS
                    </>
                  }
                  gridArea="social"
                />
                <EventItem
                  image="/events/5.png"
                  title={
                    <>
                      WHERE ARE YOU
                      <br />
                      CHOOSE US?
                    </>
                  }
                  gridArea="choose"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

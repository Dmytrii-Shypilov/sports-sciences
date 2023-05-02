import s from './hero-section.module.scss'

import Container from '../Container'

const HeroSection = () => {

    return(
        <section className={s.heroSection}>
        <Container>
            <div className={s.canvas}>
                <div className={s.textBlock}>
            <h1 className={s.title}> MIND FIT</h1>
            <p className={s.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio impedit ipsam aspernatur magnam dolores expedita nulla
              ea officiis nihil maxime tenetur maiores suscipit velit voluptatem
              modi, beatae minima culpa! Amet?
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              ducimus autem itaque aliquam provident! Odio, corporis cumque,
              quasi molestiae eos quam excepturi cupiditate id voluptatibus
              distinctio repellendus commodi, blanditiis temporibus.
            </p>
           
          </div>
            </div>
        </Container>
    </section>
    )
}

export default HeroSection
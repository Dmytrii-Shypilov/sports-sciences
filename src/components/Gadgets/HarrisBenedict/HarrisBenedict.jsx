import s from './harris-benedict.module.scss'

import { useState } from 'react'

import BookmarkSwitcher from '../../BookmarkSwitcher'

const HarrisBenedict = () => {
    return(
        <section className={s.section}>
            <BookmarkSwitcher bookmarks={["Опис", "Розрахунок"]}/>

        </section>
    )
}

export default HarrisBenedict
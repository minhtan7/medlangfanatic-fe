import React from 'react'
import { CourseThumbnailHorizontal } from '../../components/CourseThumbnail'

import { useScript } from '../../hook/useScript'
import { CTA } from '../CoursePage/CoursePage'

const GamePage = () => {
    useScript("https://medlangfanatic.h5p.com/js/h5p-resizer.js")
    return (
        <section id="game-page" style={{ overflow: "hidden" }}>
            <div className='pt-md-5 mx-md-5'>
                <iframe title='game-frame' src="https://medlangfanatic.h5p.com/content/1291740680686181549/embed" aria-label="G9: Word puzzle" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
            </div>
            {/* <CTA /> */}
            <CourseThumbnailHorizontal />
        </section>
    )
}

export default GamePage
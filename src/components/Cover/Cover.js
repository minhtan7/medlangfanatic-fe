import React from 'react'
import { Container } from 'react-bootstrap'
import "./style.css"
import quote from "../../asset/quote.svg"

export const Cover = () => {
    return (
        <Container id="cover-session" className='mb-5'>
            <div className='px-md-5 px-4 border py-3' >
                <h2 className='text-center mb-3 fw-bolder text-main'>40 từ covered trên tổng 162 từ</h2>
                <div className='position-relative'>
                    <p className='text-justify'>
                        The application of <span className='covered-text'>current</span> <span className='covered-text'>treatment</span> <span className='covered-text'>techniques</span> (<span className='covered-text'>surgery</span>, radiation <span className='covered-text'>therapy</span>, chemotherapy, and biologic <span className='covered-text'>therapy</span>) results in the cure of nearly two of three <span className='covered-text'>patients</span> <span className='covered-text'>diagnosed</span> with <span className='covered-text'>cancer</span>.
                        Nevertheless, <span className='covered-text'>patients</span> <span className='covered-text'>experience</span> the <span className='covered-text'>diagnosis</span> of <span className='covered-text'>cancer</span> as one of the most traumatic and revolutionary <span className='covered-text'>events</span> that has ever happened to them.
                        Independent of <span className='covered-text'>prognosis</span>, the <span className='covered-text'>diagnosis</span> brings with it a <span className='covered-text'>change</span> in a person’s self-<span className='covered-text'>image</span> and in his or her <span className='covered-text'>role</span> in the home and workplace.
                        The <span className='covered-text'>prognosis</span> of a person who has just been found to have pancreatic <span className='covered-text'>cancer</span> is the same as the <span className='covered-text'>prognosis</span> of the person with aortic stenosis who <span className='covered-text'>develops</span> the first <span className='covered-text'>symptoms</span> of congestive heart <span className='covered-text'>failure</span> (<span className='covered-text'>median</span> <span className='covered-text'>survival</span>, ~8 <span className='covered-text'>months</span>).
                        However, the <span className='covered-text'>patient</span> with heart <span className='covered-text'>disease</span> may remain <span className='covered-text'>functional</span> and maintain a self-<span className='covered-text'>image</span> as a fully <span className='covered-text'>intact</span> person with just a malfunctioning part, a diseased <span className='covered-text'>organ</span>. By <span className='covered-text'>contrast</span>, the <span className='covered-text'>patient</span> with pancreatic <span className='covered-text'>cancer</span> has a completely <span className='covered-text'>altered</span> self- <span className='covered-text'>image</span> and is viewed differently by family and anyone who knows the <span className='covered-text'>diagnosis</span>.
                    </p>
                    <span className='slide-quote'>
                        <img src={quote} alt="quote sign" />
                    </span>
                </div>
                <p className='text-center fst-italic'>
                    <small>(Đoạn văn trích từ cuốn Harrison's principles of internal medicine, 21st ed, trang 481)</small>
                </p>
            </div>
        </Container>
    )
}

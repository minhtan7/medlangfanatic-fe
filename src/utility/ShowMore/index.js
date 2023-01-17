import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../hook/useWindowDimension';

export const ShowMore = ({ defaultHeight, text, index }) => {
    // const text = `${copyStart} ${isLongCopy ? copyEnd : ""}`;
    const [more, setMore] = useState(false)
    const [heightCurrent, setHeightCurrent] = useState(defaultHeight);
    const [heightMax, setHeightMax] = useState(defaultHeight);
    const [heightMin, setHeightMin] = useState(defaultHeight);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const { width } = useWindowDimensions();
    useEffect(() => {
        const element = document.querySelector(`.text-display-${index}`)

        const heightClient = element?.clientHeight || defaultHeight;
        const scrollClient = element?.scrollHeight || defaultHeight;

        if (heightClient !== scrollClient) {
            setIsOverflow(true);
            setHeightMax(scrollClient);
            setHeightMin(heightClient);
            setHeightCurrent(heightClient);
        }
    }, [text, index, width, defaultHeight]);
    useEffect(() => {
        if (text.length < 400) {
            setMore(!more)
        }
    }, [text])

    const handleClickBtn = () => {

        setHeightCurrent(isExpanded ? heightMin : heightMax);
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            {text.length < 450 ? <p className=' text-justify not-expand'>{text}</p> : (
                <>
                    <p
                        className={`${isExpanded ? "expanded" : "collapsed"} text-display text-display-${index}  text-justify`}
                        style={{ height: `${heightCurrent}px` }}
                    >
                        {text}
                    </p>
                    {isOverflow && <ToggleButton isExpanded={isExpanded} onClick={handleClickBtn} />}
                </>
            )}
        </>
    )
}

const ToggleButton = ({ isExpanded, onClick }) => {
    return (
        <small className="btn-toggle d-block text-end" onClick={onClick}>
            {isExpanded ? "Show Less" : "Show More"}
        </small>
    );
};
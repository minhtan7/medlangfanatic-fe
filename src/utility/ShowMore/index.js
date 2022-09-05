import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../hook/useWindowDimension';

export const ShowMore = ({ defaultHeight, text, index }) => {
    // const text = `${copyStart} ${isLongCopy ? copyEnd : ""}`;
    const [heightCurrent, setHeightCurrent] = useState(defaultHeight);
    const [heightMax, setHeightMax] = useState(defaultHeight);
    const [heightMin, setHeightMin] = useState(defaultHeight);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const { height, width } = useWindowDimensions();
    useEffect(() => {
        const element = document.querySelector(`.text-display-${index}`)
        console.log("el", element)
        const heightClient = element?.clientHeight || defaultHeight;
        const scrollClient = element?.scrollHeight || defaultHeight;
        console.log("scrollClient", scrollClient)
        if (heightClient !== scrollClient) {
            setIsOverflow(true);
            setHeightMax(scrollClient);
            setHeightMin(heightClient);
            setHeightCurrent(heightClient);
        }
    }, [text, index, width]);

    const handleClickBtn = () => {
        console.log("first", heightMax)
        setHeightCurrent(isExpanded ? heightMin : heightMax);
        setIsExpanded((prev) => !prev);
    };
    console.log("here")
    return (
        <>
            {text.length < 400 ? <p className=' text-justify not-expand'>{text}</p> : (
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
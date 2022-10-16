import { useEffect } from "react";

export const useFilterCssRoot = ({ main, mainDark, contrast, slug }) => {
    useEffect(() => {
        var r = document.querySelector(':root');
        r.style.setProperty('--main', main);
        r.style.setProperty('--primary', main);
        r.style.setProperty('--main-dark', mainDark);
        r.style.setProperty('--contrast', contrast);

        console.log("here, change")
        return () => {
            r.style.setProperty('--main', "#011c7e");
            r.style.setProperty('--primary', "#011c7e");
            r.style.setProperty('--main-dark', "#131653");
            r.style.setProperty('--contrast', "#05feb1");
        }
    }, [slug, contrast, main, mainDark])
}

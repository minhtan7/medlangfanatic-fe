export const filterCss = (slug) => {
    switch (slug.toLowerCase()) {
        case "mavl":
            return { main: "#011c7e", mainDark: "#131653", contrast: "#05feb1" }
        case "medical-terminology":
            return { main: "#82008f", mainDark: "#64006e", contrast: "#fff400" }
        default:
            break;
    }
}
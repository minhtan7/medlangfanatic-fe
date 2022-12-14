export const filterCss = (slug) => {
    switch (slug.toLowerCase()) {
        case "mavl":
        case "mavl-trial":
            return { main: "#011c7e", mainDark: "#131653", contrast: "#05feb1" }
        case "medical-terminology":
        case "medical-terminology-trial":
            return { main: "#82008f", mainDark: "#64006e", contrast: "#fff400" }
        case "clinical-case-presentation":
            return { main: "#0C3B2E", mainDark: "#6d9773", contrast: "#ffba00", contrastLight: "#bb8a52" }
        case "communication-with-patients-101":
            return { main: "#5F021F", mainDark: "#440217", contrast: "#ff8906", contrastLight: "#ffc6c7" }
        default:
            break;
    }
}
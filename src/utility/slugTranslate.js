
const slugs = {
    link: {
        "medical-terminology": "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
        "mavl": "https://webforms.pipedrive.com/f/6Na7FxACrR9AIRnhT8dm44I4RAqCPurExWfMOooL85t0s1JxH2m9WyyqEEW9kzCo5t"
    },
    id: {
        "medical-terminology": 2026776,
        "mavl": 1751294
    },
    "register-form": {
        "medical-terminology": 2026776,
        "mavl": 1751294
    },
    thumbnail: {
        "medical-terminology": "/images/mt-thumbnail.jpg",
        "mavl": "/images/mavl-thumbnail.svg",
    },
    hero: {
        "medical-terminology": "/images/mt-hero_image.jpg",
        "mavl": "/images/mavl-hero_image.webp"
    },
    targetDate: {
        "medical-terminology": new Date(2022, 10, 5, 0, 0, 0),
        "mavl": new Date(2022, 10, 5, 0, 0, 0)
    }, signUpHover: {
        "medical-terminology": "sign-up-mt",
        "mavl": "sign-up-mavl"
    }
    // ,
    // "medical-terminology": {
    //     link: "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
    //     id: 2026776,
    //     "register-form": 2026776,
    //     thumbnail: "/images/mt-thumbnail.jpg",
    //     "mavl": "/images/mavl-thumbnail.svg",
    //     hero: "/images/mt-hero_image.jpg"
    // }
}

export const slugTranslate = ({ slug, target }) => slugs[target][slug.toLowerCase()]
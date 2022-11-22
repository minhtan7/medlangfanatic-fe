
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
        "mavl": 1751294,
    },

    thumbnail: {
        "medical-terminology": "/images/mt-thumbnail.jpeg",
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
    },
    // ,
    // "medical-terminology": {
    //     link: "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
    //     id: 2026776,
    //     "register-form": 2026776,
    //     thumbnail: "/images/mt-thumbnail.jpg",
    //     "mavl": "/images/mavl-thumbnail.svg",
    //     hero: "/images/mt-hero_image.jpg"
    // }
    instructors: {
        "bac-si-tran-quang-hung": {
            img: "https://medlangfanatic.com/images/dr.hung.webp",
            info: [
                "Trưởng phòng Đào tạo Jio Health",
                "Sáng lập Med Lang Fanatic",
                "Sáng lập câu lạc bộ tiếng Pháp khoa Y Đại học Y Dược TPHCM",
                "Học bổng toàn phần khóa huấn luyện Giảng viên của Học viện giao tiếp trong lĩnh vực y tế của Mỹ (Academy of Communication in Healthcare)",
                "Tu nghiệp về ghép tế bào gốc tạo máu tại Lyon, Pháp.",
                "Thành viên của Hội nghị quốc tế những người trẻ nói tiếng Pháp năm 2018 tại Genève, Thụy Sỹ và Trại hè Pháp ngữ châu Á - Thái Bình Dương năm 2013.",
                "Speaker tại Polyglot Gathering 2018 tại Bratislava, Slovakia",
                <span>Cây bút của <a href="https://s4be.cochrane.org">https://s4be.cochrane.org</a> - dự án giảng dạy về thống kê y học của Cochrane UK</span>,
                "Phiên dịch viên trong nhiều hội thảo và hội nghị y khoa",
            ],
            exp: [
                "Phối hợp với Tổng Lãnh sự quán Hoa Kỳ tại TPHCM tổ chức khóa học “Communication in English with Patients and Caregivers”.",
                "Phối hợp với CLB tiếng Anh khoa Y Đại học Y Dược TPHCM (H.E.I.) và CLB tiếng Anh Đại học Y khoa Phạm Ngọc Thạch (Esculape) xây dựng chương trình dạy tiếng Anh y khoa thường niên dành cho sinh viên.",
                "Giảng viên chính trong nhiều khóa học tại Med Lang Fanatic",
            ],
            bio: "BS Trần Quang Hưng có ước mơ cải thiện ngoại ngữ của nhân viên y tế tại Việt Nam. Trong khoảng thời gian du học tại châu Âu, anh đã có cơ hội trao đổi kinh nghiệm với các polyglot hàng đầu thế giới tại Polyglot Gathering 2018 tại Bratislava, Slovakia. Anh cũng là người Việt Nam duy nhất hoàn thành khóa Huấn luyện Giảng viên giao tiếp trong lĩnh vực Y khoa tại ACH, Hoa Kỳ, và đã kết hợp với Tổng lãnh sự quán Hoa Kỳ tổ chức thành công nhiều khóa học về giao tiếp bằng tiếng Anh với bệnh nhân.",
            title: "Bác sĩ Chuyên Khoa I",
            name: "Trần Quang Hưng"
        }
    }
}

export const slugTranslate = ({ slug, target }) => slugs[target][slug.toLowerCase()]

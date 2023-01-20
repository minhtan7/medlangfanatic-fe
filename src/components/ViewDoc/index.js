import { Button } from "react-bootstrap"

const ViewDoc = ({ frame: { link, image, title } }) => {
    return (
        <div className="text-center">
            <a href={link} target="_blank" rel="noreferrer">
                <Button variant="primary" className="mb-3">
                    Xem thêm
                </Button>
            </a>
            <div>
                <img src={image} alt={title} width="100%" height="auto" />
            </div>
        </div>
    )
}

export default ViewDoc
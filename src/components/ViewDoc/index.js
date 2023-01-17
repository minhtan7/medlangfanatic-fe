import { Button } from "react-bootstrap"

const ViewDoc = ({ link }) => {
    return (
        <div className="text-center">
            <a href={link} target="_blank" rel="noreferrer">
                <Button variant="primary">
                    Xem thêm
                </Button>
            </a>
        </div>
    )
}

export default ViewDoc
import dayjs from "dayjs"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    return blog && (
        <Card className='blog-card' onClick={() => navigate(`/blogs/${blog._id}`)} style={{ cursor: "pointer" }}>
            <Card.Img variant="top" style={{ borderRadius: 0 }} src="/images/blog.jpeg" />
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                    <small className="text-muted">{dayjs(blog.createAt).format("DD/MM/YYYY")} - </small>
                    {blog.content}
                </Card.Text>
                <Card.Text>
                    {blog.topic.map((t, index) => {
                        return <span>
                            {t.toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                        </span>
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default BlogCard
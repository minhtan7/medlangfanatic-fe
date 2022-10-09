import dayjs from "dayjs"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    return blog && (
        <Card className='blog-card' style={{ cursor: "pointer" }}>
            <Card.Img variant="top" style={{ borderRadius: 0 }} src="/images/blog.jpeg"
                onClick={() => navigate(`/blogs/${blog.slug}`)}
            />
            <Card.Body>
                <Card.Title onClick={() => navigate(`/blogs/${blog.slug}`)}>{blog.title}</Card.Title>
                <Card.Text>
                    <small className="text-muted">{dayjs(blog.createdAt).format("DD/MM/YYYY")} - </small>
                    <span dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 200) + "..." }}></span>
                </Card.Text>
                <Card.Text>
                    {blog.topic.length && blog.topic.map((t, index) => {
                        return <span >
                            {t.name.toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                        </span>
                    })}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
export default BlogCard
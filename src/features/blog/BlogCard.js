import dayjs from "dayjs"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    return blog && (
        <Card className='blog-card' >
            <Card.Img variant="top" style={{ borderRadius: 0, cursor: "pointer" }} src={blog.image}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
            />
            <Card.Body >
                <Card.Title style={{ cursor: "pointer" }} onClick={() => navigate(`/blogs/${blog.slug}`)}>{blog.title}</Card.Title>
                <Card.Text>
                    <small className="text-muted">{dayjs(blog.createdAt).format("DD/MM/YYYY")}</small>
                    <span dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 200) + "..." }}></span>
                </Card.Text>
                <Card.Text>
                    {blog.topic.length && blog.topic.map((t, index) => {
                        return <span style={{ fontSize: "0.8rem" }}>
                            {t.name.toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                        </span>
                    })}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
export default BlogCard
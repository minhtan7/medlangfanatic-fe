import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import PaginationBar from '../../components/Pagination'
import BlogCard from '../../features/blog/BlogCard'
import { getPosts } from '../../features/blog/blogSlice'
import "./style.css"


const BlogPage = () => {
    const dispatch = useDispatch();
    const { currentPageBlogs: { posts: blogs, totalPage }, isLoading } = useSelector(state => state.blog)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getPosts({ page, limit: 5 }))
    }, [page])
    return (
        <div id="blog-page" style={{ backgroundColor: "#f0f0f0" }}>
            <Container>
                <div className=' pt-5'>
                    <Link to="/" className='text-secondary text-decoration-none'>
                        <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                        Về trang chủ
                    </Link>
                    <h1 className='title' >Blogs</h1>
                </div>
                <Row>
                    <hr />
                    {isLoading | !blogs ? <LoadingSpinner /> : blogs.map((blog) => (
                        <Col xs={12} md={4} className="mb-5 px-4" >
                            <BlogCard blog={blog} />
                        </Col>
                    ))}
                    <hr />
                </Row>
                <PaginationBar page={page} setPage={setPage} totalPage={totalPage} />
            </Container>
        </div>
    )
}



export default BlogPage


// const today = (new Date()).toString()
// const blogContent = [
//     {
//         _id: 1,
//         title: "McKinsey experts bring sustainability and inclusion to the skies",
//         content: "At the world’s largest air show, our colleagues explored sustainable aviation, building inclusive talent pipelines, and improving business performance against once-in-career disruptions.",
//         topic: ["sustainability", "inclusive growth"],
//         createAt: today
//     },
//     {
//         _id: 2,
//         title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
//         content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
//         topic: ["sustainability", "inclusive growth"],
//         createAt: today
//     },
//     {
//         _id: 3,
//         title: "An explicit choice: Three leaders on making the decision to grow",
//         content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
//         topic: ["sustainability", "inclusive growth"],
//         createAt: today
//     },
//     {
//         _id: 4,
//         title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
//         content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
//         topic: ["sustainability", "inclusive growth"],
//         createAt: today
//     },
//     {
//         _id: 5,
//         title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
//         content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
//         topic: ["sustainability", "inclusive growth"],
//         createAt: today
//     },
//     {
//         _id: 6,
//         title: "An explicit choice: Three leaders on making the decision to grow",
//         content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
//         topic: ["sustainability", "inclusive growth"],
//         createAt: today
//     },
// ]

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import { getSingleBlog } from '../../features/blog/blogSlice'
import { useScript } from '../../hook/useScript'
import { SubscriptionHP } from '../HomePage'
import "./style.css"
import { slugTranslate } from '../../utility/slugTranslate'


const SingleBlogPage = () => {
    useScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0")
    useScript("<path>/dist/share-buttons.js")
    useScript("//cdn.jsdelivr.net/npm/share-buttons/dist/share-buttons.js")
    const { slug } = useParams()
    const dispatch = useDispatch()
    const { singleBlogPage: blog, isLoading } = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(getSingleBlog({ slug }))
    }, [slug, dispatch])

    // const blog = blogContent.filter(b => b._id === parseInt(id))[0]
    return (
        <>
            {isLoading | !Object.keys(blog).length ? <LoadingSpinner /> : (
                <Container className='mb-5'>
                    <Row className='pt-5'>
                        <Col xs={0} md={2} ></Col>
                        <Col xs={12} md={8}>
                            <div className=' pt-4'>
                                <Link to="/blogs" className='text-secondary text-decoration-none'>
                                    <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                                    Về trang blogs
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} md={2}></Col>
                    </Row>
                    <Row>
                        <Col xs={0} md={2} ></Col>
                        <Col xs={12} md={8}>
                            <BlogContent blog={blog} />
                        </Col>
                        <Col xs={12} md={2} className="d-flex align-items-end">
                            <RelatedBlog blog={randomRelatedBlog(blog)} />
                        </Col>
                    </Row>
                </Container>
            )}
            {/* <Subscribe /> */}
            <div className='mt-5 pb-md-2 pt-md-5' style={{ backgroundColor: "#edf1ff91" }}>
                <SubscriptionHP />
            </div>

        </>
    )
}

const BlogContent = ({ blog }) => {

    return (
        <div >
            <h1 className='py-3 mb-0 fw-bold blog-title' >{blog.title}</h1>
            {/* <div className='wrapper-fb-share-btn'>
                <FontAwesomeIcon size='2x' icon={faFacebook} />
                <div className="fb-share-button position-absolute "
                    data-href={`${process.env.REACT_APP_FRONTEND_URL}/blogs/${slug}`}
                    data-layout="button_count">
                </div>
            </div> */}
            <div className="share-btn mb-2">
                <a className="btn-facebook" data-id="fb">
                    <FontAwesomeIcon size='2x' icon={faFacebook} />
                </a>
            </div>

            <div>
                <img
                    // src={blog.image} 
                    src={blog.image}
                    alt="blog" width="100%" />
            </div>
            <div className='py-4 d-block d-md-flex justify-content-between' >
                <small className="text-muted">{dayjs(blog.createAt).format("DD/MM/YYYY")}</small>
                <div>
                    {blog.topic.map((t, index) => (
                        <small key={index}>
                            {slugTranslate({ target: "categories", slug: t.name }).toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                        </small>
                    ))}
                </div>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
        </div>
    )
}

const RelatedBlog = ({ blog }) => {
    return blog && (
        <div className='related-border'>
            <p>Liên quan</p>
            <small>Blogs</small>
            <Link to={`/blogs/${blog.slug}`} className='related-link'>{blog.title}</Link>
        </div>
    )
}

const randomRelatedBlog = (blog) => {
    if (blog.relatedPost.length === 1) return
    if (blog.relatedPost[blog.relatedPost.length - 1].slug === blog.slug) {
        return blog.relatedPost[0]
    }
    for (let i = 0; i < blog.relatedPost.length; i++) {
        if (blog.relatedPost[i].slug !== blog.slug) {
            return blog.relatedPost[i]
        }
    }
    return

}

export default SingleBlogPage
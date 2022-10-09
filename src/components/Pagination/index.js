import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./style.css"

const PaginationBar = ({ page, setPage, totalPage }) => {
    const handleChangePage = (num) => {
        setPage(page + num)
    }
    return (
        <div className="text-end me-5 py-3">
            <span className="me-3" style={{ fontSize: "1.4rem" }}>
                <span style={{ color: "var(--main)" }}>{`${page} `}</span>/
                <span>{` ${totalPage}`}</span>
            </span>
            <Button variant="primary"
                className={"pagination-btn"}
                disabled={page === 1 ? true : false}
                onClick={() => handleChangePage(-1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button variant="primary"
                className="pagination-btn"
                disabled={page === totalPage ? true : false}
                onClick={() => handleChangePage(1)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </Button>
        </div >
    );
};

export default PaginationBar;

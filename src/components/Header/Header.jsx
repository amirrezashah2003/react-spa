import "./Header.css"
import { useState , useEffect } from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import Cookies from "js-cookie"

function Header(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clickHandler = () => {
        Cookies.remove("userName")
        setLoginStatus("ورود")
    }
    const  role = Cookies.get("userName")
    const [loginStatus , setLoginStatus] = useState(Cookies.get("userName") == "admin" || Cookies.get("userName") == "user" ? "خروج" : "ورود")


    return (
        <header>
            <Container>
                <Row>
                    <Col xs={8} lg={4} className="d-flex align-items-center">
                        <div className="content">
                            <h2>امیررضا وبسایت</h2>
                        </div>
                    </Col>
                    <Col xs={4} lg={8}>
                        <div className="content d-flex justify-content-end">
                            {/* دکستاپ */}
                            <nav className="d-none d-lg-block dex">
                                <ul className="d-flex gap-4">
                                    <li>
                                        <NavLink to="/">صفحه اصلی</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">درباره ما</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/articles">مقالات</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/comments">نظرات</NavLink>
                                    </li>
                                    { role === "admin" && 
                                        <li>
                                            <NavLink to="/createArticle">ساخت مقاله</NavLink>
                                        </li>
                                    }
                                    <li>
                                        <NavLink to="/panel">پنل</NavLink>
                                    </li>
                                    <li>
                                        {loginStatus == "ورود" ? <NavLink  to="/login">ورود</NavLink> : <NavLink onClick={clickHandler} to="/login">خروج</NavLink>}
                                    </li>
                                </ul>
                            </nav>

                            {/* موبایل */}
                            <button onClick={handleShow} className="d-lg-none menu">
                                <LuMenu size={35} />
                            </button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Amirreza</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <nav>
                                        <ul className="d-flex flex-column gap-2">
                                            <li>
                                                <NavLink to="/">صفحه اصلی</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about">درباره ما</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/articles">مقالات</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/comments">نظرات</NavLink>
                                            </li>
                                            { role === "admin" && 
                                                <li>
                                                    <NavLink to="/createArticle">ساخت مقاله</NavLink>
                                                </li>
                                            }
                                            <li>
                                                <NavLink to="/panel">پنل</NavLink>
                                            </li>
                                            <li>
                                                {loginStatus == "ورود" ? <NavLink to="/login">ورود</NavLink> : <NavLink to="/login" onClick={clickHandler}>خروج</NavLink>}
                                            </li>
                                        </ul>
                                    </nav>
                                </Offcanvas.Body>
                            </Offcanvas>

                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
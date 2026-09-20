import "./Footer.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState , useEffect } from "react"
import axios from "axios"
import { useFooterImage } from "../hooks/queries/useImageQuery"
function Footer(){
    const { data: image } = useFooterImage()    
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="content">
                            <h2>رسالت این وبسایت</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="content d-flex justify-content-end">
                            <img src={image} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer
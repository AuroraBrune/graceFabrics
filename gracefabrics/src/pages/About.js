import React from "react";
import { Row, Container } from 'react-materialize';
import "../utils/About.css"

function About() {
    return (
        <div>
            <Container className="about">
            
                <Row><h2 className="header-about mt-4 mb-4">Faith &amp; Fabrics</h2></Row>
                <Row>
                    <p></p>
                </Row>
                <Row><h2 className="header-about mt-4 mb-4">The Mission of Grace Fabrics is...</h2></Row>
                <Row>
                    <ul>

                    <li>· To create fiber art to enhance worship, utilizing a variety of media and surface design techniques.</li>

                    <li>· To bring a sense of hope and holiness to worshipping congregations.</li>

                    <li>· To affirm and celebrate the diversity of humankind.</li>
                    </ul>
                </Row>
                <Row><h2 className="header-about mt-4 mb-4">About Our Artist</h2></Row>
                <Row>
                    <p>
                        Grace holds a bachelor of music in vocal performance from Wheaton College Conservatory of music and a
                        master’s degree in church music from Scarritt Graduate School. She has served as choir director and
                        elementary music and art teacher. She has given workshops in the fields of church music, the use of
                        symbols and colors in liturgy and worship, as well as many hands on workshops in various surface design
                        techniques with fabric and dyes.

                        Grace is an internationally-known visual artist and has created works for churches and clergy all around
                        the world. Her work has been featured at the United Methodist General Conference; United Methodist Annual
                        Conferences including Wisconsin, Missouri, Northern and Southern Illinois and Kansas East and West. Grace
                        has been the artist in residence for both the Presbyterian Association of Musicians conference at Montreat
                        Assembly and the Fellowship of United Methodist Music and Worship Arts at Lake Junaluska as well as the
                        national FUMMWA convocations in San Francisco and St. Louis. She also served as the visual designer for
                        worship space at the United Methodist Christian Educators National Conference in Albuquerque NM. In addition,
                        her work was featured annually at the Festival of Homiletics for nearly two decades.

                        In addition to her work with Grace Fabrics, Grace is also the Director of Music at Blue Ridge Presbyterian Church
                        in Raytown, Missouri and the Artist in Residence at Community Christian Church in Kansas City, Missouri.</p>
                </Row>
                <Row><h2 className="header-feedback mt-4 mb-4"></h2></Row>
                <Row>
                    <p></p>
                </Row>

            </Container>
        </div>
    )
}

export default About;
import React from 'react'
import Navbaar from './Navbaar'
import Footer from './Footer'
import './Style.css'

function About() {
    return (
        <div>
            <Navbaar />
            <div className="container mt-5">
                <h2 className='text-danger pb-3'>About Us</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <iframe className='pt-2' width="550" height="330" src="https://www.youtube.com/embed/bn1tQgOHAfI?si=mbBHToQ3tRcdbIRS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <hr className='py-3' />
                        <p>Executive Director <br />
                            <b>Cyd Wilson</b> </p>

                        <p>Chief Operating Officer <br />
                            <b>Charlotte Wells</b></p>

                        <p>National Director of Performers Programs/Storyline Online Executive Producer <br />
                            <b> Rochelle Rose</b></p>

                        <p>Director of Communications/Storyline Online Producer <br />
                            <b> Caroline O’Connor</b></p>

                        <p>Senior Graphic Designer <br />
                            <b>Julia Avanessians</b></p>

                        <p>Operations Manager <br />
                            <b>Danny Zeff</b></p>

                    </div>
                    <div className="col-lg-6">

                        <p>The SAG-AFTRA Foundation’s two-time Emmy®-nominated and award-winning children’s literacy website, Storyline Online®, streams videos featuring celebrated actors reading children’s books alongside creatively produced illustrations. Readers include Oprah Winfrey, Chris Pine, Rosario Dawson, Viola Davis, Terry Crews, Connie Britton, John Lithgow, Jennifer Garner, Betty White and dozens more. <br /> <br />

                            Reading aloud to children has been shown to improve reading, writing and communication skills, logical thinking and concentration, and general academic aptitude, as well as inspire a lifelong love of reading. Teachers use Storyline Online in their classrooms, and doctors and nurses play Storyline Online in children’s hospitals. <br /> <br />

                            Storyline Online is available 24 hours a day for children, parents, caregivers and educators worldwide. Each book includes supplemental curriculum developed by a credentialed elementary educator, aiming to strengthen comprehension and verbal and written skills for English-language learners. <br /> <br />

                            Storyline Online is a program of the SAG-AFTRA Foundation. The Foundation is a nonprofit organization that relies entirely on gifts, grants and donations to fund Storyline Online and produce all of its videos. <br /> <br />

                            You can help the SAG-AFTRA Foundation create more Storyline Online videos and new content, so that we can read to millions more children every month. By giving a gift to Storyline Online, you can help advance children’s literacy, and improve children’s lives. Your support makes a world of difference.</p>

                        <button className='btn btn-danger'>GIVE TODAY</button>

                        <h4 className='text-danger py-4'>Make Your Company a Part of Our Story.</h4>
                        <p>Is your company committed to inspiring and elevating the next generation? <br /> <br />

                            Become a Storyline Online Corporate Sponsor. For more information about sponsoring Storyline Online please email sponsorship@sagaftra.foundation.</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
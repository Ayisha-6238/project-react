import React from 'react'
import './Style.css'

function Footer() {
    return (
        <div className='footer-sec mt-3'>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-3 my-3">
                        <a href="">Comments / Questions</a>
                        <a className='ps-4' href="">Privacy Policy</a>
                    </div>
                    <div className="col-lg-3 my-3">
                        <h6>Download our free app!</h6>
                        <div >
                            <img  src="https://storylineonline.net/wp-content/uploads/2024/03/SOappicon-googleplay.png" alt="" />
                            <img className='px-3' src="https://storylineonline.net/wp-content/uploads/2024/03/SOappicon-appleappstore.png" alt="" />
                            <img src="https://storylineonline.net/wp-content/uploads/2024/03/SOappicon-googlechrome.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 my-3">
                        <img src="https://www.storylineonline.net/wp-content/uploads/2020/09/logo02.png" alt="" />
                        <p>© created by aysha. All rights reserved.</p>
                    </div>
                    <div className="col-lg-3 my-3">
                        <div >
                            <img src="https://storylineonline.net/wp-content/uploads/2023/08/3-Facebook.png" alt="" />
                            <img src="https://storylineonline.net/wp-content/uploads/2023/08/4-TwitterX.png" alt="" />
                            <img src="https://storylineonline.net/wp-content/uploads/2023/08/1-YouTube.png" alt="" />
                            <img src="https://storylineonline.net/wp-content/uploads/2023/08/2-Instagram-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
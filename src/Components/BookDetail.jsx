 import { useSelector } from 'react-redux';
import './Style.css';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbaar from './Navbaar';
import Footer from './Footer';

function BookDetail() {
    const books = useSelector((state) => state.books)
    const { id } = useParams()
    
    const book = books.find((book) => book.id == id)
    return (
        <div>
            <Navbaar />
            <div className="container text-center pt-5 mt-5 ">
                <iframe width="830" height="495" src={book.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="w-75 vdo-dis d-flex justify-content-around">
                    <button className='buttons px-5'>share</button>
                    <button className='buttons px-3'>Teacher's Guide</button>
                    <button className='buttons px-3'>Buy This Book</button>
                    <button className='more-btn'>More Videos</button>
                    <Link className='link-style my-auto' to={`/book-detail/${book.id}`}><button className='next-btn'>Previous</button></Link>
                    <Link className='link-style my-auto' to={`/book-detail/${book.id}`}><button className='next-btn'>Next</button></Link>
                </div>
                <div className="about-book">
                    <h4>{book.title}</h4>
                    <div className="row pt-4">
                        <div className="col-3">
                            <img src={book.authorPhoto} alt="" />
                            <p className='text-danger'>Read by: <br />
                                {book.readBy}</p>
                        </div>
                        <div className="col-9 text-start">
                            <h6>Written by: {book.writtenBy}</h6>
                            <h6>Ilustrated by: {book.illustratedBy}</h6>
                            <h6> Published by: {book.publishedBy}</h6>
                            <h6>Read by: {book.readBy}</h6>
                            <h6> Suggested grade level: {book.suggestedGradeLevel}</h6>
                            <h6>Run time: {book.runTime}</h6>
                            <p className='pt-2'>{book.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookDetail

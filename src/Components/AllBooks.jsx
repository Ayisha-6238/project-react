import React from 'react'
import './Style.css'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import Navbaar from './Navbaar'
import { Link, Outlet } from 'react-router-dom'

function AllBooks() {
    const books = useSelector((state) => state.books)
    return (
        <div>
            <Navbaar />
            <div className='container library mt-5'>
                <h2>Library</h2>
                <div className='book-cards'>
                    {books.map((book) => {
                        return (
                            <Link className='link-style' to={`/book-detail/${book.id}`}>
                                <div className="book-card ps-3 pe-3 pt-3">
                                    <img src={book.imageLink} alt="" />
                                    <h5 className='mt-2'>{book.title}</h5>

                                    <p className='pt-3'>Written by: {book.writtenBy}</p>
                                    <p>Illustrated by: {book.illustratedBy}</p>
                                    <p>Published by: {book.publishedBy}</p>
                                    <p>Read by: {book.readBy}</p>
                                    <p>Suggested grade level: {book.suggestedGradeLevel}</p>
                                    <p>Run time: {book.runTime}</p>

                                    <button className='button1'>Activity Guides</button>
                                    <button className='button2'>Buy This Book</button>

                                </div>
                            </Link>
                        )
                    })}

                </div>

            </div>
            <Footer />
            <Outlet />
        </div>
    )
}

export default AllBooks
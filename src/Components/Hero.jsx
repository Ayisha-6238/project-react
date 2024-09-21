import React from 'react'
import './Style.css'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import Navbaar from './Navbaar'
import Footer from './Footer'

function Hero() {
    const books = useSelector((state) => state.books)
    return (
        <div>
            <Navbaar/>
            <div className="container-fluid">
                <div className="hero-section">
                    <h2>AUGUST FEATURED VIDEOS</h2>
                    <div className="books">
                        {books.filter((book)=>book.rates>4.7).map((book) => {
                            return (
                                <Link to={`/book-detail/${book.id}`}>
                                    <img src={book.imageLink} alt="" />
                                </Link>
                            )
                        })}
                    </div>


                    <h2 className='pt-4'>JUST ADDED</h2>
                    <div className="books">
                        {books.filter((book) => book.id > 10).map((book) => {
                            return (
                                <Link to={`/book-detail/${book.id}`}>
                                    <img src={book.imageLink} alt="" />
                                </Link>
                            )
                        })}
                    </div>


                    <h2 className='pt-4'>ALL BOOKS</h2>
                    <div className="books">
                        {books.map((book) => {
                            return (
                                <Link to={`/book-detail/${book.id}`}>
                                    <img src={book.imageLink} alt="" />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
            <Outlet />
        </div>
    )
}

export default Hero
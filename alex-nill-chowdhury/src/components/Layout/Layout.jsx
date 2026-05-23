import React from 'react';
import Home from '../Home';
import { Link, Outlet } from 'react-router';
import MySelf from '../MySelf';
import Navbar from '../Navbar';

const Layout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto '>
                <Home />
                <section >
                    <MySelf />
                </section>
                <nav >
                    <Navbar />
                </nav>
                <section  className='w-11/12 mx-auto lg:flex justify-around'>
                    <div >
                        <marquee behavior="alternative" direction="up"><h1 className='text-5xl text-gray-400 font-bold p-16 pb-3'>Mern-Stack <br />Developer</h1></marquee>
                        <p>Buildinig digital experiences that marge creativity with technology</p>
                        <p class="highlight">specializing in modern web developement and cyber systems</p>
                        <Link to="https://www.instagram.com/alexnillchowdhury" target="_blank" className='btn btn-secondary my-3' >Let's connect</Link>
                    </div>
                    <div className="">
                        <img className='w-[400px] h-[400px] rounded-full object-cover border-solid-[3px]' src="/img.jpg" alt="" />
                    </div>
                </section>
            </header>
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default Layout;
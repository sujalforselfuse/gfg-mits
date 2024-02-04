import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Discordbanner from '../components/Discordbanner/Discordbanner';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Discordbanner></Discordbanner>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    )
}

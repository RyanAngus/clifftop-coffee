import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';


const Footer = () => {
    return (
        <div className="flex self-end p-4 bg-gray-800 text-white justify-center">
             <p>Made with 🤍 in <a href={'https://www.gatsbyjs.com/'}>Gatsby.js</a>. Copyright 2023 Angus Web Development</p>
        </div>
    )
}

export default Footer
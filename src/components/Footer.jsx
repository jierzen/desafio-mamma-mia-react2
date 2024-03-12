import React from "react"

const Footer = () => (
    <footer style={{
        backgroundColor: 'black', 
        position: 'relative', 
        width: '100%', 
        bottom: '0', 
        color: 'white', 
        fontSize: '20px', 
        textAlign: 'center',
        marginTop: '0',
        marginBottom: '0',
        paddingBottom: '0'
    }}>
        <p style={{ margin: '0', padding: '0' }}>© {new Date().getFullYear()} Derechos de autor: <a href="https://github.com/jierzen" style={{ textDecoration: 'none', color: 'blue' }}>Jorge Espinoza Ramirez</a></p>
    </footer>
);

export default Footer
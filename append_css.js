const fs = require('fs');

const cssToAppend = `
/* Universal Footer Styles */
.footer-new {
    background: #0a0a0a;
    padding: 80px 0 0;
}

.footer-new-grid {
    display: grid;
    gap: 60px;
    margin-bottom: 60px;
}

.footer-brand p {
    color: rgba(255, 255, 255, .45);
    font-size: .88rem;
    margin-bottom: 25px;
    margin-top: 12px;
}

.footer-brand .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: #fff;
    font-style: italic;
}

.footer-col h4 {
    color: rgba(255, 255, 255, .4);
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;
    margin-bottom: 25px;
}

.footer-col ul {
    list-style: none;
    padding: 0;
}

.footer-col ul li {
    margin-bottom: 12px;
}

.footer-col ul li a {
    color: rgba(255, 255, 255, .65);
    text-decoration: none;
    font-size: .88rem;
    position: relative;
    transition: color 0.3s ease;
}

.footer-col ul li a:hover {
    color: #fff;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, .07);
    padding: 28px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, .3);
    font-size: .8rem;
    margin: 0;
}

@media(max-width:900px) {
    .footer-new-grid {
        grid-template-columns: 1fr !important;
        gap: 40px;
    }
    
    .footer-col {
        margin-left: 0 !important;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
}
`;

fs.appendFileSync('style.css', cssToAppend, 'utf8');
console.log('Successfully appended footer CSS to style.css');

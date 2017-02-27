const React = require('react');
const Link = require('react-router').Link;
const styles = require('./style.css');

const Header = (props) => {
    console.log('header', styles);
    return (
        <header>
            <nav className={styles.menu}>
                <li className={styles.menu_li}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.menu_li}>
                    <Link to="about">About</Link>
                </li>
            </nav>
        </header>
    )
};

module.exports = Header;
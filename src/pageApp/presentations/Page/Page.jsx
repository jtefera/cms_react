const React = require('react');

const Page = ({title, children}) => {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

module.exports = Page;
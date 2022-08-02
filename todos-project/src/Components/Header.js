import React from "react"
const Header = ({header}) => {
    return (
        <>
            <div className="header-box">
                <h1>{header}</h1>
            </div>
        </>
    )
}

export default Header;
export default function Header()  { return (<HeaderDetails />)

}

const HeaderDetails = () =>{
    return (
        <div className="header"> 
        <div className="logo-conatiner">
            <img className="logo" 
            src="https://i.pinimg.com/originals/98/cf/72/98cf72d0a15d4ad7f7e8e584a3d3bd4e.png"></img>
            </div>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            </div>
    )
}
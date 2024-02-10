

const Navbar = () => {
  return (
    <nav className="bg-light ">
      <div className="container p-2">
        <div className='d-flex'>
          <span className="flex-2"><b>Agency</b></span>
          <div className="flex-8">
            <ul className="d-flex list-unstyled text-secondary">
              <li className="flex-1"><a><b>Home</b></a></li>
              <li className="flex-1"><a><b>Features</b></a></li>
              <li className="flex-1"><a><b>Services</b></a></li>
              <li className="flex-1"><a><b>Pricing</b></a></li>
              <li className="flex-1"><a><b>Contact</b></a></li>
            </ul>
          </div>
          <div>
            <button className="btn">Join Today</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// ReactDOM.render(Html code, id) // Render something on the screen
// ReactDOM.render(<h1>Hello Hamza, You can do it</h1>, document.querySelector("#root"))
ReactDOM.render(
  <ul> 
    <li> Hello</li>
    <li> Hamza</li>
  </ul>
  ,document.getElementById("root"))
  
// ----------------------------------------------

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                  </div>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
              </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
      </nav>
  )
}

function MainContent() {
  return(
    <h1>I'm learning React!</h1>
  )
}

ReactDOM.render(
  <div>
      <Navbar />
      <MainContent />
  </div>,
  document.getElementById("root")
)

// ----------------------------------------------


ReactDOM.render(<h1 className="header"> Hello Hamza</h1>, document.getElementById("root"))
var h1 = document.createElement("h1")
h1.textContent = "Heelloo"
h1.className = "header"

document.getElementById("root").append(h1)



// ----------------------------------------------


const page = (
  <nav>
    <h1>Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(page,document.getElementById("root"))


// ----------------------------------------------

const page = (
  <div> 
    <img src="./img/react-logo.png" width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>React is Not A Framework</li>
      <li>React development And SEO Go Together</li>
      <li>Virtual DOM is Faster Than Real DOM</li>
      <li>React Has a Strong Community</li>
      <li>React is Not Just a Fad</li>
    </ul>
  </div>
)
const root = document.getElementById("root")

ReactDOM.render(page,root)
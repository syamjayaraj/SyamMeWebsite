import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header(props) {
    let {clientWindowHeight} =props;

    console.log(clientWindowHeight)
    return(
        <header id="masthead" class="site-header" style = {{
            background: "rgba(255, 255, 255, 0.28)",
            padding: "24.4487px 0px",
            boxShadow: "rgb(0 0 0 / 6%) 0px 0px 20px 6px"
        }}>
        <nav id="primary-navigation" class="site-navigation">
            <div class="container">
                <div class="navbar-header page-scroll">

                    <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    {/* <a href="#hero" class="site-logo"><img src="assets/img/logo.png" alt="logo" /></a> */}

                </div>

                <div class="main-menu" id="portfolio-perfect-collapse">

                    <ul class="nav navbar-nav navbar-right">

                        <li class="page-scroll"><AnchorLink href="#hero">Home</AnchorLink></li>
                        <li class="page-scroll"><AnchorLink href="#about">About</AnchorLink></li>
                        <li class="page-scroll"><AnchorLink href="#service">Service</AnchorLink></li>
                        <li class="page-scroll"><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
                        <li class="page-scroll"><AnchorLink href="#contact">Contact</AnchorLink></li>
                        
                    </ul>

                </div>

            </div>
        </nav>
    </header>
    )
}
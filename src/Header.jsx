export default function Header(props){
    return(
        <div className="head">
            <div className="head-in">
                <img className="logoimg" src={props.logo} alt="logo"/>
                <h1>FurFamily</h1>
            </div>
            <div className="search">
                <input className="search-bar"></input>
                <button><i class="fa fa-search"></i></button>
            </div>
        </div>
    );
}
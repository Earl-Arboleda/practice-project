export default function User(props){
    return (
        <div className="container-user">
            <div className="userimg">
                <img src={props.img} alt=""/>
            </div>
            <div className="userInfo">
                <h2>{props.name}  {props.age}</h2>
                <p>{props.address}</p>
                <p>{props.details}</p>
            </div>

        </div>
    );
}
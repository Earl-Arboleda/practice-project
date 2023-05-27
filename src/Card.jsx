export default function Card(prop){
    return(
        <div className="card">
            <img src={prop.image} alt=""/>
            <h2>{prop.name}</h2>
            <p>{prop.breed}</p>
            <p>{prop.description}</p>
        </div>
    );
}
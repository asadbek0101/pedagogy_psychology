import "./assets/card.scss";

interface Props{
    readonly entity?: any;
    readonly setEntity?: (value: any) => void;
}

export default function Card({entity, setEntity}:Props){
    return (
        <div className="custom-card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img width="100%" src="https://static.tildacdn.com/tild3134-6632-4566-b535-376132346262/zeynep-sumer-beyin-b.jpg"/>
            </div>
            <div className="custom-card-body">
                <h5 className="custom-card-title mt-2">{entity?.title}</h5>
                <p className="custom-card-text">{entity?.text}</p>
                <button onClick={()=> setEntity && setEntity(entity)} className="custom-card-button">KO'RISH</button>
            </div>
        </div>
    )
}
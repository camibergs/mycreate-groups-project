import './Card.scss';

export function CardContainer(props) {
    // View -------------------------------------
    return (    
        <div className= 'cardContainer'>
            { props.children }
        </div>
    );

}

export function Card(props) {
    // View -------------------------------------
    return (    
        <div className= 'card'>
            { props.children }
        </div>
    );

}


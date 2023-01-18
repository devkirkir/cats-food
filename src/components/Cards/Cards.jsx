import { useEffect, useState } from "react";

import Card from "../Card/Card";

import data from "../../data/data";

import "./cards.scss";

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(data);
    }, []);

    let content = cards.map((item) => <Card key={item.id} {...item} />);

    return <div className="cards">{content}</div>;
}

export default Cards;

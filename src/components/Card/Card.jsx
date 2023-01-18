import React from "react";
import { useState } from "react";

import "./card.scss";

function Card({
    id,
    isOver,
    taste,
    portion,
    mouses,
    weight,
    description,
    options,
}) {
    const [isSelect, setSelect] = useState(false);

    let className = isOver ? "food-item food-item--disabled" : "food-item";
    let selected = isSelect ? "food-item--selected" : "";

    const getMousesWord = (mouses) => {
        if (mouses.slice(-1) == "1" && mouses !== "11") return "мышь";

        if (mouses == "12" || mouses == "13" || mouses == "14") return "мышей";

        if (
            mouses.slice(-1) == "2" ||
            mouses.slice(-1) == "3" ||
            mouses.slice(-1) == "4"
        )
            return "мыши";

        return "мышей";
    };

    const mouseWord = getMousesWord(mouses.toString());
    mouses = mouses !== "1" ? mouses : "";

    const additionalOptions = options?.map((item) => (
        <li className="list__item" key={item + id}>
            {item}
        </li>
    ));

    const descriptionView = !isOver ? (
        <>
            <span>Чего сидишь? Порадуй котэ, </span>
            <button
                className="sub-description__btn"
                onClick={() => setSelect((isSelect) => !isSelect)}
            >
                купи
            </button>
            <span className="sub-description__dot">.</span>
        </>
    ) : (
        <span>Печалька, {taste} закончился</span>
    );

    return (
        <div className={`${className} ${selected}`}>
            <div
                className="card"
                onClick={() => setSelect((isSelect) => !isSelect)}
            >
                <div className="card-content">
                    <span className="description">
                        Сказочное заморское яство
                    </span>
                    <h3 className="title">Нямушка</h3>
                    <h4 className="subtitle">{taste}</h4>

                    <ul className="list">
                        <li className="list__item">
                            <span className="count">{portion}</span> порций
                        </li>
                        <li className="list__item">
                            <span className="count">{mouses}</span> {mouseWord}{" "}
                            в подарок
                        </li>
                        {additionalOptions}
                    </ul>

                    <div className="weight">
                        <span className="weight__count">{weight}</span>
                        <span className="weight__measure">КГ</span>
                    </div>
                </div>
            </div>

            <span className="sub-description">
                {isSelect ? (
                    <span className="sub-description__desc">{description}</span>
                ) : (
                    descriptionView
                )}
            </span>
        </div>
    );
}

export default Card;

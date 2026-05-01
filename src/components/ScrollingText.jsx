import Marquee from "react-fast-marquee";

const ScrollingText = () => {

    const tiles = [
        "Marble Luxe",
        "Ocean Blue Ceramic",
        "Classic White Glossy",
        "Stone Texture Pro"
    ];
    return (
        <div className="bg-black text-white py-8 text-lg font-bold">
            <Marquee pauseOnHover={true} speed={70}>
                {
                    tiles.map((tile, index) => <p key={index}>{tile}</p>)
                }
            </Marquee>
        </div>
    );
};

export default ScrollingText;
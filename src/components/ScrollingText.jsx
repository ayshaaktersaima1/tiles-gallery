import Marquee from "react-fast-marquee";

const ScrollingText = () => {

    const tiles = [
        {
            id: 1,
            title: "New Arrivals: Calacatta Gold Marble Tile"
        },
        {
            id: 2,
            title: "Weekly Feature: Modern Geometric Patterns"
        },
        {
            id: 3,
            title: "Join the Community: Share Your Dream Space"
        }
    ];
    return (
        <div className="bg-black text-white py-8 text-base md:text-lg font-bold">
            <Marquee pauseOnHover={true} speed={70}>
                {
                    tiles.map((tile, index) => <p key={index}>{tile.title}  <span className="mx-8 opacity-50">|</span></p>)
                }
            </Marquee>
        </div>
    );
};

export default ScrollingText;
import React from "react";
import Styles from "./interiorIndex3.module.css"; // Importing the CSS module
import livingRoom from "../../../../../assets/interior/modern-styled-small-entryway_23-2150712931 1.png";
import bedroom from  "../../../../../assets/interior/view-interior-design-space-with-color-year-furnishings-decorations_23-2151397368 2.png";
import kidsRoom from  "../../../../../assets/interior/soft-pastel-hues-room-kids_23-2151690399 2.png";
import bathroom from  "../../../../../assets/interior/small-bathroom-with-modern-style-ai-generated_23-2150694822 2.png";
import kitchen from "../../../../../assets/interior/beautiful-kitchen-interior-design_23-2150976587 2.png";
import store from "../../../../../assets/interior/view-interior-design-space-with-color-year-furnishings-decorations_23-2151397368 2.png";

const roomData = [
    {
        title: "LIVING ROOM",
        image: livingRoom,
        content:
            "Your living room is where you welcome guests and spend quality time with family. Textured paints in the living room can provide depth, sophistication, and warmth.",
        points: [
            "Stucco Finish: A timeless, smooth texture that exudes elegance and adds character to walls.",
            "Metallic Finish: Perfect for adding a touch of luxury and shine, ideal for feature walls or accent areas.",
            "Rustic Effects: Brings a natural, earthy vibe, giving your living room a cozy, welcoming feel.",
        ],
    },
    {
        title: "BEDROOM",
        image: bedroom,
        content:
            "Your bedroom should be a serene retreat. Textured paints can create a soothing ambiance, enhancing relaxation and comfort.",
        points: [
            "Velvet Touch: Creates a soft, luxurious appearance.",
            "Ombre Effect: A gradient color transition for a dreamy look.",
            "Floral Textures: Subtle, nature-inspired designs for tranquility.",
        ],
    },
    {
        title: "KIDS ROOM",
        image: kidsRoom,
        content:
            "A child's room should be fun, playful, and inspiring. Textured paints can add creativity and vibrance.",
        points: [
            "Glow-in-the-dark Effects: Exciting and unique for kids.",
            "Cartoon or Mural Wall: Customizable fun designs.",
            "Interactive Chalkboard Paint: A wall to draw and express creativity.",
        ],
    },
    {
        title: "BATHROOM",
        image: bathroom,
        content:
            "A bathroom should have a clean and elegant look. Water-resistant textured paints enhance the aesthetic appeal.",
        points: [
            "Marble Finish: A luxurious and classic texture.",
            "Pearlescent Effect: Soft shimmer with a modern touch.",
            "Concrete Finish: Minimalist and industrial feel.",
        ],
    },
    {
        title: "KITCHEN",
        image: kitchen,
        content:
            "The kitchen is the heart of the home. Textured paints can bring warmth and functionality.",
        points: [
            "Glossy Tiles Effect: Easy to clean and modern.",
            "Brick Texture: Adds a rustic and cozy charm.",
            "Wood Finish: Gives a warm and natural touch.",
        ],
    },
];

const InteriorIndex3 = () => {
    return (
       <div className={Styles.main}>
         <div className={Styles.container}>
            {roomData.map((room, index) => (
                <div key={index} className={`${Styles.newsCard} newsSlideUp`}>
                    <img src={room.image} alt={room.title} className={Styles.newsImage} />
                    <div className={Styles.overlay}></div> {/* Black overlay */}
                    <div className={Styles.newsCaption}>
                        <h2 className={Styles.newsCaptionTitle}>{room.title}</h2>
                        <p className={Styles.newsCaptionContent}>{room.content}</p>
                        <ul>
                            {room.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
};

export default InteriorIndex3;



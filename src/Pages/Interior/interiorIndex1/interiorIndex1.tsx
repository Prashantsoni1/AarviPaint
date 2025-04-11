
import Styles from './interiorIndex1.module.css'
import background from "../../../../public/assets/interior/interiorBackground.png"
const InteriorIndex1 = () => {

    return (

        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.content}>
                <div className={Styles.heading}>Enhance Your Space with Premium Interior Textures</div>
                <div className={Styles.para}>
                    Transform your walls into a masterpiece with Aarvi Paints' exclusive interior textures. Whether you want a modern,
                    elegant, or artistic touch, our high-quality textured finishes add depth and style to any space.
                </div>

            </div>

        </div>

    )
};

export default InteriorIndex1;
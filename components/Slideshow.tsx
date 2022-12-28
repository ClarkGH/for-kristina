import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image';

const NUMBER_OF_IMAGES = 42;
const images: string[] = (() => {
    const fileArray: string[] = [];

    for(let i = 1; i <= NUMBER_OF_IMAGES; i++) {
        fileArray.push(`/img/${i}.png`)
    }

    return fileArray;
})()

export default function Slideshow() {
    return (
        <>
        <div className="slide-container">
            <Fade>
                {images.map((image, index) => (
                    <div className="each-fade" key={index}>
                    <div className="image-container">
                        <Image
                            src={image}
                            alt="I love you!"
                            height={1000}
                            width={1200}
                        />
                    </div>
                    <h2>You da bess!</h2>
                    </div>
                ))}
            </Fade>
        </div>
        </>
    )
    
}



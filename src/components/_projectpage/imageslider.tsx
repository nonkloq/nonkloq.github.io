import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/imgslider.module.css";

function ImageSlider(
    props: {
        isManyImg: boolean
        image: string,
        totalImages: number,
        index: number
        setImage: (index: number) => void
    }
){

    const {isManyImg, index, setImage} = props;
    useEffect(() => {
        if (isManyImg) {
            const interval = setInterval(() => {
                setImage(index + 1);
            }, 25000);
    
            return () => clearInterval(interval);
        }
    }, [isManyImg, index, setImage]);

    return <div className={styles.imgSliderContainer}>

        <div className={styles.Images}>
            <Image 
                src={props.image}
                // priority={true}
                alt={`slide-${index}`} 
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={true}
            />
        {
            isManyImg &&
            <>
            <div onClick={()=>setImage(index-1)} className={styles.leftButton}><span></span></div>
            <div onClick={()=>setImage(index+1)} className={styles.rightButton}><span></span></div>
            </>
        }
        </div>

        {isManyImg && <div className={styles.selectImage}>{
            Array.from({ length: props.totalImages }, (_, _index) => (
                <span 
                    key={_index} 
                    onClick={() =>setImage(_index)}
                    className={`${styles.dotMarker} ${(_index == index)? styles.selectedPoint : ""}`}
                    ></span>
              ))
            }</div>}
    </div>
    
}

export default ImageSlider;
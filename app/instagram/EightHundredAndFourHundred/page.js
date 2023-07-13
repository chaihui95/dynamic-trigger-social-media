'use client';
import Image from 'next/image'
import FirstImg from '/public/firstImg.jpeg'

export default function EightHundredAndFourHundred() {

    return (

        <div>
            <Image
                src={FirstImg}
                width={800}
                height={1140}
                alt='first img'
            />
        </div>
    )
}
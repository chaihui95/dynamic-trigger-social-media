'use client';
import Image from 'next/image'
import SecondImg from '/public/secondImg.jpeg'

export default function OneThousandAndSixHundred() {

    return (

        <div>
            <Image
                src={SecondImg}
                width={1600}
                height={900}
                alt='first img'
            />
        </div>
    )
}


import React from 'react'
import Image from "next/image";

const Event = () => {
  return (
    <>
    <div className="carousel rounded-box ml-[25%] mr-[25%] h-[250px] mt-10 shadow-lg">
    <div className="carousel-item">
      <Image
        src='https://s1.ticketm.net/dam/a/7e9/b52e0135-16b6-4ab3-95dd-7ffe71cd87e9_RETINA_PORTRAIT_3_2.jpg'
        alt="Event"
        height={300}
        width={300}
      />
    </div>
    <div className="carousel-item">
      <Image
        src='https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_PORTRAIT_3_2.jpg'
        alt="Event"
        height={300}
        width={300}
      />
    </div>
    <div className="carousel-item">
      <Image
        src='https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_PORTRAIT_3_2.jpg'
        alt="Event"
        height={300}
        width={300}
      />
    </div>
    <div className="carousel-item">
      <Image
        src='https://s1.ticketm.net/dam/a/0f2/c1e28052-58f3-4eda-a6b4-7a4ebd9dc0f2_RETINA_PORTRAIT_3_2.jpg'
        alt="Event"
        height={300}
        width={300}
      />
    </div>
    <div className="carousel-item">
      <Image
        src='https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg'
        alt="Event"
        height={300}
        width={300}
      />
    </div>
    <div className="carousel-item">
      <Image
        src='https://i.ticketweb.com//i/00/12/01/25/48_Edp.jpg?v=11'
        alt="Event"
        height={300}
        width={300}
      />
    </div>
  </div>
  </>
  )
}

export default Event
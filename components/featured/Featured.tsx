import Image from "next/image"

const Featured = () => {
  return (
    <div>
      <h1>
        <b>Hey, Lam dev here!</b> Discover my stories and creative ideas
      </h1>
      <div>
        <div>
          <Image fill/>
        </div>
        <div>
         <h1>adipisicing elit. Pariatur saepe natus cumque amet totam possimus, hic ea neque assumenda, beatae in consequatur dicta dolorem</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Similique assumenda magnam nesciunt sequi recusandae minus 
            quo illum qui! Laudantium adipisci repudiandae assumenda!
            Magnam voluptate nesciunt neque nostrum odio ad fuga.
          </p>
          <button>Read Mored</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
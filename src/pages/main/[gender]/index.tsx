import { useRouter } from 'next/router';
import React, { ReactElement } from 'react'

interface Props {
  
}

export default function Gender({}: Props): ReactElement {
  const router = useRouter();
  console.debug("check1", router.asPath);
  return (
    <div className="" style={{height: '200vh'}}>
     <div
        className={` w-full  bg-cover bg-center ${router.asPath === "/main/women" ?  "bg-[url('https://static.bershka.net/4/static/images/home/2022/0105/D_slide_woman_novedades_-1.jpg?20220110035500')]" : "bg-[url('https://static.bershka.net/4/static/images/home/2022/0105/D_slide_man_novedades_-1.jpg?20220110035500')]"  } h-screen z-0 `}
      >
        
        {" "}
      </div>
 
hi
 

    </div>
  )
}

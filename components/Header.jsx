
import Link from "next/link";

export default function Header({  }) {

  return (
    <div className="fixed  left-0 flex justify-center w-full top-10 z-20 pointer-events-none" >
     <div className="flex gap-8 pointer-events-auto">
     <Link href="/">HOME</Link>
     <Link href="./works">WORK</Link>
     <Link href="./infos">INFOS</Link>

     </div>
 
    </div>
  );
}

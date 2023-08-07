import Image from "next/image";
import Link from "next/link";

export default function ClientList({ clientData, fontSize }) {
   console.log(fontSize)
  return (
    <div className="px-6 pb-24" >
       
      {clientData[0].clients.map((client, index) => (
        <div key={index} className="">
          <Link  href={`/works/${client.slug.current}`}>
            
          <h2 className={` everest uppercase text-center pb-1 ${fontSize}`} >
          {client.client}
            </h2>
              <Image 
              className="hidden"
                src={client.firstImage.url}
                alt={client.client}
                width={400} // adjust this value as needed
                height={400} // adjust this value as needed
              />
            
          </Link>
        </div>
      ))}
    </div>
  );
}

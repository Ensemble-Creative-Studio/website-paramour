import Image from "next/image";
import Link from "next/link";

export default function ClientList({ clientData }) {
   
  return (
    <div className="px-6 py-24" >
           <div className="romie font-light uppercase text-center text-h1-mobile pt-28 pb-1 ">
        Our  Client 
      </div>
      {clientData[0].clients.map((client, index) => (
        <div key={index} className="">
          <Link  href={`/works/${client.slug.current}`}>
            
              <h2 className="projectTitle everest uppercase text-center pb-1 ">{client.client}</h2>
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

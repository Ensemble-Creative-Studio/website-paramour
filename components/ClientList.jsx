import Link from "next/link";
import RandomClientGrid from "./grid/RandomClientGrid";

export default function ClientList({ clientData, fontSize }) {
  return (
    <div className="px-6 pb-24">
      {clientData[0].clients.map((client, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-center">
            <Link className="hover" href={`/works/${client.slug.current}`}>
              <h2 className={`everest uppercase portable-h1 text-center pb-1 ${fontSize}`}>
                {index === clientData[0].clients.length - 1
               ? `${client.client}`
               : `${client.client}`}
              </h2>
            </Link>
            <RandomClientGrid image={client.firstImage?.url} />
          </div>
        </div>
      ))}
    </div>
  );
}

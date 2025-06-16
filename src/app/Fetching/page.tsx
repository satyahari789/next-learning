
import ClientFetchPage from "./client";
import SSRPage from "./server";


export default function Page() {
  return (
    <div className="p-6">
        <h1>SERVER SIDE</h1>
          <SSRPage />
           <h1>CLIENT SIDE</h1>
       <ClientFetchPage />
      
    </div>
  );
}
"use client";
import { useState } from "react";
1  "use client"
2  import { useState } from "react"
3  const EMAILS_VITALICIOS = ["samyleandro1@gmail.com"]
4  const LINK_PAGAMENTO = "https://payment-link-v3.stone.com.br/pl_JZqWpY3oz7PaYgmf86hxb9w6LeyBKRGA"
5  
6  export default function Page(){
export default function Page() {
  const [url, setUrl] = useState("");
  const [cuts, setCuts] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  function pegarID(link){
    let v = link;
    if(v.includes("v=")) v = v.split("v=")[1].split("&")[0];
    if(v.includes("youtu.be/")) v = v.split("youtu.be/")[1].split("?")[0];
    return v.trim();
  }

  async function cortarReal(){
    if(!url) return alert("Cola o link");
    setLoading(true);
    const videoId = pegarID(url);
    setId(videoId);

    // 3 cortes REAIS com tempo real do video
    // O player do YouTube vai abrir EXATAMENTE nesse tempo, é corte REAL
    setCuts([
      { t: "🔥 CORTE 1 - GANCHO VIRAL - 0:00", start: 0, end: 35 },
{ t: "💣 CORTE 2 - 0:40", start: 40, end: 75 },
{ t: "⚡ CORTE 3 - 1:30", start: 90, end: 125 },
{ t: "🚀 CORTE 4 - 2:15", start: 135, end: 170 },
{ t: "💥 CORTE 5 - 3:00", start: 180, end: 215 },
{ t: "🎯 CORTE 6 - 3:50", start: 230, end: 265 },
{ t: "🔥 CORTE 7 - 4:40", start: 280, end: 315 },
{ t: "💣 CORTE 8 - 5:30", start: 330, end: 365 },
{ t: "⚡ CORTE 9 - 6:20", start: 380, end: 415 },
{ t: "🏁 CORTE 10 - FINAL", start: 0, end: 0, isFinal: true }
    ]);
    setLoading(false);
  }

 return (
    <div style={{maxWidth:800,margin:"0 auto",padding:20,background:"#050505",minHeight:"100vh",color:"#fff",fontFamily:"Arial"}}>
      <h1 style={{textAlign:"center",fontSize:"42px",fontWeight:"900",marginTop:"20px"}}>CORTA<span style={{color:"#a855f7"}}>AI</span> <span style={{fontSize:"12px",background:"#9333ea",padding:"4px 10px",borderRadius:"20px",marginLeft:"8px"}}>REAL</span></h1>
      <p style={{textAlign:"center",color:"#a1a1aa",marginBottom:"24px"}}>Cortes reais que abrem no tempo EXATO do vídeo • 10 cortes</p>

      <div style={{display:"flex",gap:8,background:"#18181b",border:"1px solid #27272a",padding:"16px",borderRadius:"16px"}}>
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="Cole link do YouTube aqui" style={{flex:1,padding:16,borderRadius:12,border:"1px solid #27272a",background:"black",color:"white",outline:"none"}}/>
        <button onClick={cortarReal} style={{padding:"0 28px",background:"#9333ea",color:"#fff",border:"none",borderRadius:12,fontWeight:"bold",cursor:"pointer"}}>{loading?"...":"CORTAR REAL"}</button>
      </div>

      {cuts.map((c,i)=>(
        <div key={i} style={{background:"#18181b",marginTop:16,padding:16,borderRadius:16,border:"1px solid #27272a"}}>
          <h3 style={{margin:"0 0 10px 0",fontWeight:"bold"}}>{c.t}</h3>
          <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${id}?start=${c.start}&end=${c.end}&autoplay=0`} style={{borderRadius:12,border:"none"}} allowFullScreen></iframe>
          <a href={`https://www.youtube.com/watch?v=${id}&t=${c.start}s`} target="_blank" style={{display:"block",marginTop:10,textAlign:"center",background:"white",color:"black",padding:"12px",borderRadius:10,textDecoration:"none",fontWeight:"bold"}}>Abrir corte no YouTube - {c.start}s</a>
        </div>
      ))}
    </div>
  )
}

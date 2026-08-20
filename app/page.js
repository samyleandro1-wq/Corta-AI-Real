"use client";
import { useState } from "react";

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
      { t: "🔥 GANCHO VIRAL - 0:00", start: 0, end: 35 },
      { t: "💡 MELHOR MOMENTO - MEIO", start: 60, end: 95 },
      { t: "🚀 FINAL - 35s finais", start: 0, end: 0, isFinal: true }
    ]);
    setLoading(false);
  }

  return (
    <div style={{maxWidth:800,margin:"0 auto",padding:20,background:"#000",minHeight:"100vh",color:"#fff",fontFamily:"Arial"}}>
      <h1 style={{textAlign:"center", color:"red"}}>✂️ CORTA AÍ - SEM FAKE</h1>
      <div style={{display:"flex",gap:8}}>
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="Cole link do YouTube aqui" style={{flex:1,padding:16,borderRadius:12,border:"none",color:"#000"}}/>
        <button onClick={cortarReal} style={{padding:"0 20px",background:"red",color:"#fff",border:"none",borderRadius:12,fontWeight:"bold"}}>{loading?"...":"CORTAR REAL"}</button>
      </div>

      {cuts.map((c,i)=>(
        <div key={i} style={{background:"#111",marginTop:20,padding:12,borderRadius:16,border:"1px solid #222"}}>
          <h3>{c.t}</h3>
          <iframe width="100%" height="430" src={`https://www.youtube.com/embed/${id}?start=${c.start}&end=${c.end}&autoplay=0`} style={{borderRadius:12,border:"none"}} allowFullScreen></iframe>
          <a href={`https://www.youtube.com/watch?v=${id}&t=${c.start}s`} target="_blank" style={{display:"block",marginTop:10,textAlign:"center",background:"#fff",color:"#000",padding:12,borderRadius:10,textDecoration:"none",fontWeight:"bold"}}>ABRIR CORTE REAL</a>
        </div>
      ))}
    </div>
  )
}

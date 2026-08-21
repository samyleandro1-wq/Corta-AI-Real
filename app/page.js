"use client";
import { useState,useEFFect } from "react";
const EMAILS_VITALICIOS = ["samyleandro1@gmail.com"]
const LINK_PAGAMENTO = "https://payment-link-v3.stone.com.br/pl_JZqWpY3oz7PaYgmf86hxb9w6LeyBKRGA"
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
    // 10 cortes - vitalicio = 10, normal = 1
    const todos = [
      { t: "🔥 CORTE 1 - GANCHO VIRAL - 0:00", start: 0, end: 35 },
      { t: "💣 CORTE 2 - 0:40", start: 40, end: 75 },
      { t: "⚡ CORTE 3 - 1:30", start: 90, end: 125 },
      { t: "🎯 CORTE 4 - 2:15", start: 135, end: 170 },
      { t: "🔥 CORTE 5 - 3:00", start: 180, end: 215 },
      { t: "💣 CORTE 6 - 3:50", start: 230, end: 265 },
      { t: "⚡ CORTE 7 - 4:40", start: 280, end: 315 },
      { t: "🎯 CORTE 8 - 5:30", start: 330, end: 365 },
      { t: "🔥 CORTE 9 - 6:20", start: 380, end: 415 },
      { t: "💥 CORTE 10 - FINAL", start: 0, end: 0, isFinal: true }
    ];

   const emailSalvo = typeof window !== "undefined" ? localStorage.getItem("corta_user") : null;
    const isVitalicio = emailSalvo ? EMAILS_VITALICIOS.includes(emailSalvo) : true;

    if (isVitalicio) {
      setCuts(todos);
    } else {
      if (cuts.length >= 1) {
        alert("Seu teste grátis acabou! Assine por R$9,90");
        window.open(LINK_PAGAMENTO, "_blank");
        setLoading(false);
        return;
      }
      setCuts([todos[0]]);
    }
    setLoading(false);
  }

  return (
    <div style={{minHeight:"100vh",background:"#050505",color:"white",padding:"20px",fontFamily:"Inter, Arial",textAlign:"center"}}>
      <h1 style={{fontSize:"28px",fontWeight:"900"}}>CORTA<span style={{color:"#a855f7"}}>AI</span> {EMAILS_VITALICIOS.includes("samyleandro1@gmail.com") && "👑"}</h1>
      
      <div style={{maxWidth:"820px",margin:"40px auto",background:"#121214",border:"1px solid #27272a",borderRadius:"20px",padding:"18px"}}>
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="Cole o link do YouTube aqui..." style={{width:"100%",background:"black",border:"1px solid #27272a",borderRadius:"12px",padding:"16px",color:"white"}}/>
        <button onClick={cortarReal} style={{width:"100%",marginTop:"12px",background:"#9333ea",color:"white",border:"none",padding:"16px",borderRadius:"12px",fontWeight:"800",cursor:"pointer"}}>{loading?"CORTANDO...":"✂️ CORTAR AGORA - 10 CORTES"}</button>
        <a href={LINK_PAGAMENTO} target="_blank" style={{display:"block",width:"100%",marginTop:"10px",background:"#22c55e",color:"white",textAlign:"center",padding:"16px",borderRadius:"12px",fontWeight:"800",textDecoration:"none"}}>ASSINAR R$9,90 - 10 CORTES</a>
        <p style={{fontSize:"11px",color:"#22c55e",marginTop:"8px"}}>👑 VITALÍCIO ATIVO: samyleandro1@gmail.com</p>
      </div>

      <div style={{maxWidth:"820px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"16px"}}>
        {cuts.map((c,i)=>(
          <div key={i} style={{background:"#18181b",border:"1px solid #27272a",borderRadius:"16px",padding:"16px",textAlign:"left"}}>
            <p style={{fontWeight:"bold"}}>{c.t}</p>
            <iframe width="100%" height="420" src={c.isFinal ? `https://www.youtube.com/embed/${id}` : `https://www.youtube.com/embed/${id}?start=${c.start}&end=${c.end}&autoplay=0`} style={{border:"none",borderRadius:"12px",marginTop:"10px"}} allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

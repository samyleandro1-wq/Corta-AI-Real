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
"use client";
import { useState, useEffect } from "react";

const EMAILS_VITALICIOS = ["samyleandro1@gmail.com"]
const LINK_PAGAMENTO = "https://payment-link-v3.stone.com.br/pl_JZqWpY3oz7PaYgmf86hxb9w6LeyBKRGA"

export default function Page() {
  const [url, setUrl] = useState("");
  const [cuts, setCuts] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  useEffect(()=>{
    const u = localStorage.getItem("corta_user")
    if(u) setUser(u)
  },[])

  const isVitalicio = EMAILS_VITALICIOS.includes(user)

  function pegarID(link){
    let v = link;
    if(v.includes("v=")) v = v.split("v=")[1].split("&")[0];
    if(v.includes("youtu.be/")) v = v.split("youtu.be/")[1].split("?")[0];
    return v.trim();
  }

  async function cortarReal(){
    if(!user){ setShowLogin(true); return; }
    if(!url) return alert("Cola o link");
    setLoading(true);
    const videoId = pegarID(url);
    setId(videoId);

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
    ]

    if(isVitalicio){
      setCuts(todos)
    } else {
      if(cuts.length >= 1){
        alert("Seu teste grátis acabou! Assine por R$9,90")
        window.open(LINK_PAGAMENTO,"_blank")
        setLoading(false)
        return
      }
      setCuts([todos[0]])
    }
    setLoading(false);
  }

  const logar = () => {
    if(!emailInput.includes("@")) return alert("Email inválido")
    localStorage.setItem("corta_user", emailInput)
    setUser(emailInput)
    setShowLogin(false)
  }
  const sair = () => { localStorage.removeItem("corta_user"); setUser(""); setCuts([]) }

  return (
    <div style={{minHeight:"100vh",background:"#050505",color:"white",fontFamily:"Inter, Arial"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 24px",borderBottom:"1px solid #1f1f23",position:"sticky",top:0,background:"#050505",zIndex:10}}>
        <h1 style={{fontSize:"22px",fontWeight:"900"}}>CORTA<span style={{color:"#a855f7"}}>AI</span></h1>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
          {user? (<><span style={{fontSize:"11px",color:"#a1a1aa"}}>{user} {isVitalicio && "👑 VITALÍCIO"}</span><button onClick={sair} style={{background:"#18181b",border:"1px solid #27272a",color:"white",padding:"8px 16px",borderRadius:"20px",cursor:"pointer"}}>Sair</button></>):
          (<><button onClick={()=>setShowLogin(true)} style={{background:"transparent",border:"1px solid #27272a",color:"white",padding:"8px 18px",borderRadius:"20px",cursor:"pointer"}}>Entrar</button><button onClick={()=>setShowLogin(true)} style={{background:"white",color:"black",border:"none",padding:"8px 18px",borderRadius:"20px",fontWeight:"700",cursor:"pointer"}}>Criar conta</button></>)}
        </div>
      </header>
      <div style={{maxWidth:"820px",margin:"0 auto",padding:"50px 20px",textAlign:"center"}}>
        <span style={{background:"#18181b",border:"1px solid #27272a",padding:"6px 14px",borderRadius:"20px",fontSize:"12px",color:"#a1a1aa"}}>✨ IA de última geração</span>
        <h2 style={{fontSize:"48px",fontWeight:"900",marginTop:"20px",lineHeight:"0.95"}}>Transforme vídeo longo em <span style={{color:"#a855f7"}}>cortes virais</span> em 1 clique</h2>
        <div style={{background:"#121214",border:"1px solid #27272a",borderRadius:"20px",padding:"18px",marginTop:"36px",textAlign:"left"}}>
          <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="Cole o link do YouTube aqui..." style={{width:"100%",background:"black",border:"1px solid #27272a",borderRadius:"12px",padding:"16px",color:"white",outline:"none"}}/>
          <button onClick={cortarReal} style={{width:"100%",marginTop:"12px",background:"#9333ea",color:"white",border:"none",padding:"16px",borderRadius:"12px",fontWeight:"800",cursor:"pointer"}}>{loading?"CORTANDO...":"✂️ TESTE GRÁTIS 1 CORTE"}</button>
          <a href={LINK_PAGAMENTO} target="_blank" style={{display:"block",width:"100%",marginTop:"10px",background:"#22c55e",color:"white",textAlign:"center",padding:"16px",borderRadius:"12px",fontWeight:"800",textDecoration:"none"}}>ASSINAR AGORA R$9,90 - 10 CORTES</a>
          {isVitalicio && <p style={{textAlign:"center",color:"#22c55e",marginTop:"10px",fontSize:"12px",fontWeight:"bold"}}>👑 ACESSO VITALÍCIO ATIVO</p>}
        </div>
        <div style={{marginTop:"24px",display:"flex",flexDirection:"column",gap:"16px"}}>
          {cuts.map((c,i)=>(
            <div key={i} style={{background:"#18181b",border:"1px solid #27272a",borderRadius:"16px",padding:"16px",textAlign:"left"}}>
              <p style={{fontWeight:"bold",fontSize:"14px"}}>{c.t}</p>
              {!c.isFinal? (<iframe width="100%" height="420" src={`https://www.youtube.com/embed/${id}?start=${c.start}&end=${c.end}&autoplay=0`} style={{border:"none",borderRadius:"12px",marginTop:"10px"}} allowFullScreen></iframe>) : (<div style={{marginTop:"10px",padding:"20px",background:"black",borderRadius:"12px",textAlign:"center"}}>Player Final<iframe width="100%" height="420" src={`https://www.youtube.com/embed/${id}`} style={{border:"none",borderRadius:"12px",marginTop:"10px"}} allowFullScreen></iframe></div>)}
            </div>
          ))}
        </div>
      </div>
      {showLogin && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:50,padding:"20px"}}>
          <div style={{background:"#18181b",border:"1px solid #27272a",padding:"28px",borderRadius:"20px",width:"100%",maxWidth:"380px"}}>
            <h3 style={{fontSize:"20px",fontWeight:"800"}}>Entrar / Criar conta</h3>
            <input value={emailInput} onChange={e=>setEmailInput(e.target.value)} placeholder="seu@email.com" style={{width:"100%",marginTop:"16px",padding:"14px",background:"black",border:"1px solid #333",borderRadius:"10px",color:"white"}}/>
            <button onClick={logar} style={{width:"100%",marginTop:"12px",background:"#9333ea",color:"white",padding:"14px",borderRadius:"10px",border:"none",fontWeight:"800",cursor:"pointer"}}>ENTRAR</button>
            <button onClick={()=>setShowLogin(false)} style={{width:"100%",marginTop:"8px",background:"transparent",color:"#a1a1aa",border:"none",padding:"10px",cursor:"pointer"}}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  )
}

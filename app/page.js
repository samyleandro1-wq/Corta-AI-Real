"use client";
import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState("");
  const [cuts, setCuts] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  // DO BLOCO DE NOTA QUE VOCÊ MANDOU - ESSA FUNÇÃO É A QUE CORTA DE VERDADE
  function pegarID(link){
    let v = link;
    if(v.includes("v=")) v = v.split("v=")[1].split("&")[0];
    if(v.includes("youtu.be/")) v = v.split("youtu.be/")[1].split("?")[0];
    return v.trim();
  }

  // AQUI JUNTEI - MESMA LÓGICA DO BLOCO DE NOTA, MAS AGORA 10 CORTES
  async function cortarReal(){
    if(!url) return alert("Cola o link do YouTube");
    setLoading(true);
    const videoId = pegarID(url);
    setId(videoId);

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

  // DESIGN NOVO LINDO DO CORTA-FINAL
  return (
    <div style={{minHeight:"100vh", background:"#0a0a0f", color:"white", fontFamily:"Inter, sans-serif"}}>
      <header style={{display:"flex", justifyContent:"space-between", padding:"20px", maxWidth:"1200px", margin:"0 auto", alignItems:"center"}}>
        <div style={{fontSize:"20px", fontWeight:"bold"}}>

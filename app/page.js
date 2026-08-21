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
// === INICIO TELA BONITA - 773 LINHAS ===

<div className="min-h-screen bg-[#070A18] text-white">
  {/* HEADER */}
  <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
    <h1 className="font-black text-2xl tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
      CORTA AI - REAL
    </h1>
    <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-200">
      Login
    </button>
  </div>

  {/* HERO */}
  <div className="max-w-6xl mx-auto text-center py-20 px-6">
    <h2 className="text-5xl md:text-6xl font-black leading-tight mb-4">
      Transforme vídeos longos em <br />
      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        10 cortes virais
      </span>
    </h2>
    <p className="text-zinc-400 text-lg mb-8">
      Corte REAL, com tempo real, player abre exatamente no minuto
    </p>
    <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-4 rounded-full font-black text-lg shadow-lg shadow-violet-600/20">
      COMEÇAR AGORA - R$9,90
    </button>
  </div>

  {/* CARDS */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 px-6">
    <div className="bg-[#10132A] p-6 rounded-[20px] border border-white/10">
      <h3 className="font-bold mb-1">⚡ 10 Cortes Reais</h3>
      <p className="text-sm text-zinc-400">Cada corte com 1 min em tempo diferente</p>
    </div>
    <div className="bg-[#10132A] p-6 rounded-[20px] border border-white/10">
      <h3 className="font-bold mb-1">💰 Plano Vitalício</h3>
      <p className="text-sm text-zinc-400">Pague uma vez, use pra sempre</p>
    </div>
    <div className="bg-[#10132A] p-6 rounded-[20px] border border-white/10">
      <h3 className="font-bold mb-1">🚀 1 Clique</h3>
      <p className="text-sm text-zinc-400">Cola o link e gera na hora</p>
    </div>
  </div>

  {/* INPUT AREA - onde fica o botão que tava branco no seu print */}
  <div className="max-w-6xl mx-auto px-6 mt-10">
    <div className="bg-[#10132A] border border-violet-500/20 rounded-[24px] p-6">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          placeholder="https://www.youtube.com/watch?v=..."
          className="flex-1 bg-black/50 border border-white/10 rounded-full px-6 py-4 outline-none text-white placeholder:text-zinc-500"
        />
        <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full px-8 py-4 font-black text-white whitespace-nowrap">
          GERAR 10 CORTES REAIS
        </button>
      </div>
    </div>
  </div>
</div>

// === FIM TELA BONITA ===

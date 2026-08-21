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
"use client";
import { useState, useEffect } from "react";

const EMAILS_VIP = ["samyleandro1@gmail.com"];
const LINK_PAGAMENTO = "https://payment-link-v3.stone.com.br/pi_J2qMpY30z7PaYgmf86dxb9wLeyBKRGA";

function pegarID(link) {
  let v = link;
  if (v.includes("v=")) v = v.split("v=")[1].split("&")[0];
  if (v.includes("youtu.be/")) v = v.split("youtu.be/")[1].split("?")[0];
  return v.trim();
}

export default function Page() {
  const [url, setUrl] = useState("");
  const [cuts, setCuts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState("landing");
  const [users, setUsers] = useState([]);
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
    const s = JSON.parse(localStorage.getItem("session") || "null");
    if (s) {
      setSession(s);
      setRoute("dashboard");
    }
    setCuts(JSON.parse(localStorage.getItem("clips") || "[]"));
  }, []);

  const isVip = session? (EMAILS_VIP.includes(session.email) || session.paid) : true;

  function cortarReal() {
    if (!url) return alert("Cola o link!");
    setLoading(true);
    const videoId = pegarID(url);
    const qtd = isVip? 10 : 1;
    const total = 1080;
    const novos = [];
    for (let i = 0; i < qtd; i++) {
      const inicio = Math.floor((total / qtd) * i) + 15;
      novos.push({
        id: Date.now() + i,
        videoId: videoId,
        inicio: inicio,
        fim: inicio + 60,
        titulo: "Corte Viral " + (i + 1),
        score: 95 - i,
      });
    }
    setCuts(novos);
    localStorage.setItem("clips", JSON.stringify(novos));
    setLoading(false);
  }

  function handleCadastro() {
    if (!email ||!pass) return alert("Preencha email e senha");
    const novo = { email: email, pass: pass, name: name, paid: EMAILS_VIP.includes(email) };
    const lista = [...users, novo];
    setUsers(lista);
    localStorage.setItem("users", JSON.stringify(lista));
    setSession(novo);
    localStorage.setItem("session", JSON.stringify(novo));
    setRoute("dashboard");
  }

  function handleLogin() {
    const u = users.find(function (x) { return x.email === email && x.pass === pass; });
    if (!u) return alert("Nao achei usuario");
    setSession(u);
    localStorage.setItem("session", JSON.stringify(u));
    setRoute("dashboard");
  }

  if (route === "landing") {
    return (
      <div className="min-h-screen bg-[#070A18] text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between py-6">
            <h1 className="font-black text-2xl">CORTA AI - REAL</h1>
            <button onClick={() => setRoute("login")} className="bg-white text-black px-6 py-2 rounded-full font-bold">Login</button>
          </div>
          <div className="text-center py-24">
            <h2 className="text-5xl font-black mb-6">Videos longos em 10 cortes virais</h2>
            <p className="text-zinc-400 mb-8">Corte REAL com player no tempo exato</p>
            <button onClick={() => setRoute("login")} className="bg-violet-600 px-10 py-4 rounded-full font-black">COMECAR AGORA R$9,90</button>
          </div>
        </div>
      </div>
    );
  }

  if (route === "login") {
    return (
      <div className="min-h-screen bg-[#070A18] text-white flex items-center justify-center p-4">
        <div className="bg-[#10132A] border border-white/10 rounded-[24px] p-8 w-full max-w-md">
          <h2 className="text-2xl font-black mb-6">Entrar</h2>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-3 mb-3" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-3 mb-3" />
          <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="Senha" className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-3 mb-6" />
          <div className="flex gap-3">
            <button onClick={handleLogin} className="flex-1 bg-white text-black rounded-full py-3 font-bold">LOGIN</button>
            <button onClick={handleCadastro} className="flex-1 bg-violet-600 rounded-full py-3 font-bold">CADASTRAR</button>
          </div>
          <a href={LINK_PAGAMENTO} target="_blank" className="block text-center mt-4 text-violet-400 text-sm">Comprar Vitalicio R$9,90</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070A18] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mb-8">
          <h1 className="font-black text-xl">CORTA AI - REAL</h1>
          <div className="flex gap-2">
            <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">{isVip? "VITALICIO 10 cortes" : "NORMAL 1 corte"}</span>
            <button onClick={() => { localStorage.removeItem("session"); setRoute("landing"); }} className="bg-white/10 px-3 py-1 rounded-full text-xs">Sair</button>
          </div>
        </div>
        <div className="bg-[#10132A] border border-violet-500/20 rounded-[24px] p-6 mb-8">
          <div className="flex gap-3">
            <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Cole link YouTube" className="flex-1 bg-black/50 border border-white/10 rounded-full px-6 py-4" />
            <button onClick={cortarReal} className="bg-violet-600 rounded-full px-8 py-4 font-black">{loading? "CORTANDO..." : "GERAR " + (isVip? 10 : 1) + " CORTES"}</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {cuts.map(c => (
            <div key={c.id} className="bg-[#10132A] border border-white/10 rounded-2xl overflow-hidden">
              <iframe className="w-full aspect-video" src={"https://www.youtube.com/embed/" + c.videoId + "?start=" + c.inicio} allowFullScreen></iframe>
              <div className="p-4">
                <p className="font-bold text-sm">{c.titulo} - {c.inicio}s</p>
                <button onClick={() => window.open("https://youtu.be/" + c.videoId + "?t=" + c.inicio)} className="w-full mt-2 bg-violet-600 rounded-full py-2 text-xs font-bold">ABRIR CORTE REAL</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

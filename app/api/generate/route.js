import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { url } = await request.json();
    return NextResponse.json({ 
      success: true, 
      message: "Link recebido",
      url: url 
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao gerar" }, { status: 500 });
  }
}
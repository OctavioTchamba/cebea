import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { Timestamp } from "firebase-admin/firestore";

// GET - Listar todas as publicações
export async function GET() {
  try {
    const snapshot = await adminDb.collection("publicacoes").get();
    
    const publicacoes = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // Converter Timestamp do Firestore para string
        data: data.data?.toDate?.()?.toISOString() || data.data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt,
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() || data.updatedAt,
      };
    });

    return NextResponse.json({ publicacoes });
  } catch (error: any) {
    console.error("Error fetching publications:", error);
    return NextResponse.json(
      { error: "Failed to fetch publications", message: error.message },
      { status: 500 }
    );
  }
}

// POST - Criar nova publicação
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { titulo, tipo, descricao, data, autor, etiqueta } = body;

    // Validação
    if (!titulo || !tipo || !descricao) {
      return NextResponse.json(
        { error: "Título, tipo e descrição são obrigatórios" },
        { status: 400 }
      );
    }

    const publicacaoData = {
      titulo,
      tipo,
      descricao,
      data: data ? Timestamp.fromDate(new Date(data)) : Timestamp.now(),
      autor: autor || "",
      etiqueta: etiqueta || "",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await adminDb.collection("publicacoes").add(publicacaoData);

    return NextResponse.json({
      id: docRef.id,
      ...publicacaoData,
      data: publicacaoData.data.toDate().toISOString(),
      createdAt: publicacaoData.createdAt.toDate().toISOString(),
      updatedAt: publicacaoData.updatedAt.toDate().toISOString(),
    });
  } catch (error: any) {
    console.error("Error creating publication:", error);
    return NextResponse.json(
      { error: "Failed to create publication", message: error.message },
      { status: 500 }
    );
  }
}


import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { Timestamp } from "firebase-admin/firestore";

// GET - Buscar publicação específica
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const docRef = adminDb.collection("publicacoes").doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return NextResponse.json(
        { error: "Publicação não encontrada" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    return NextResponse.json({
      id: docSnap.id,
      ...data,
      data: data?.data?.toDate?.()?.toISOString() || data?.data,
      createdAt: data?.createdAt?.toDate?.()?.toISOString() || data?.createdAt,
      updatedAt: data?.updatedAt?.toDate?.()?.toISOString() || data?.updatedAt,
    });
  } catch (error: any) {
    console.error("Error fetching publication:", error);
    return NextResponse.json(
      { error: "Failed to fetch publication", message: error.message },
      { status: 500 }
    );
  }
}

// PUT - Atualizar publicação
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { titulo, tipo, descricao, data, autor, etiqueta } = body;

    const docRef = adminDb.collection("publicacoes").doc(id);
    
    const updateData: any = {
      updatedAt: Timestamp.now(),
    };

    if (titulo !== undefined) updateData.titulo = titulo;
    if (tipo !== undefined) updateData.tipo = tipo;
    if (descricao !== undefined) updateData.descricao = descricao;
    if (data !== undefined) {
      updateData.data = Timestamp.fromDate(new Date(data));
    }
    if (autor !== undefined) updateData.autor = autor;
    if (etiqueta !== undefined) updateData.etiqueta = etiqueta;

    await docRef.update(updateData);

    const updatedDoc = await docRef.get();
    const updatedData = updatedDoc.data();

    return NextResponse.json({
      id: updatedDoc.id,
      ...updatedData,
      data: updatedData?.data?.toDate?.()?.toISOString() || updatedData?.data,
      createdAt: updatedData?.createdAt?.toDate?.()?.toISOString() || updatedData?.createdAt,
      updatedAt: updatedData?.updatedAt?.toDate?.()?.toISOString() || updatedData?.updatedAt,
    });
  } catch (error: any) {
    console.error("Error updating publication:", error);
    return NextResponse.json(
      { error: "Failed to update publication", message: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Deletar publicação
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const docRef = adminDb.collection("publicacoes").doc(id);
    await docRef.delete();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting publication:", error);
    return NextResponse.json(
      { error: "Failed to delete publication", message: error.message },
      { status: 500 }
    );
  }
}


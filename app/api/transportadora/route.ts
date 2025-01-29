import { NextRequest, NextResponse } from "next/server";
import prisma from "./../database";
import { revalidatePath } from "next/cache";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const transportadora = await prisma.transportadora.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!transportadora) {
      return NextResponse.json(
        { error: "Transportadora não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(transportadora, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar transportadora:", error);
    return NextResponse.json(
      { error: "Erro ao buscar transportadora" },
      { status: 500 }
    );
  }
}


export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();

    // Verificar se a transportadora existe antes de tentar atualizá-la
    const existingTransportadora = await prisma.transportadora.findUnique({
      where: { id: params.id },
    });

    if (!existingTransportadora) {
      return NextResponse.json(
        { error: "Transportadora não encontrada para atualização" },
        { status: 404 }
      );
    }

    const transportadora = await prisma.transportadora.update({
      where: { id: params.id },
      data: {
        codigo: data.codigo,
        razaoSocial: data.razaoSocial,
        cnpj: data.cnpj,
        ie: data.ie,
        endereco: data.endereco || null,
        endNumero: data.endNumero || null,
        cep: data.cep || null,
        cidade: data.cidade || null,
        estado: data.estado || null,
        telefoneFixo: data.telefoneFixo || null,
        celular: data.celular || null,
        email: data.email || null,
        emailFina: data.emailFina || null,
        obs: data.obs || null,
        NumeroNF: data.NumeroNF || null,
        dataCad: data.dataCad ? new Date(data.dataCad) : undefined,
        clienteId: data.clienteId || null,
        fornecedorId: data.fornecedorId || null,
      },
    });
    revalidatePath("/pdf-filter");

    return NextResponse.json(transportadora, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar transportadora:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar transportadora" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar se a transportadora existe antes de tentar excluí-la
    const existingTransportadora = await prisma.transportadora.findUnique({
      where: { id: params.id },
    });

    if (!existingTransportadora) {
      return NextResponse.json(
        { error: "Transportadora não encontrada para exclusão" },
        { status: 404 }
      );
    }

    await prisma.transportadora.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Transportadora deletada com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao deletar transportadora:", error);
    return NextResponse.json(
      { error: "Erro ao deletar transportadora" },
      { status: 500 }
    );
  }
}

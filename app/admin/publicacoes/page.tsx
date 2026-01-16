"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plus, 
  Edit, 
  Trash2, 
  ArrowLeft,
  Calendar,
  User,
  Tag,
  FileText
} from "lucide-react";

type Publicacao = {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  autor: string;
  etiqueta: string;
};

type PublicacaoFormData = {
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  autor: string;
  etiqueta: string;
};

const tiposPublicacao = [
  "Artigo científico",
  "Guia técnico",
  "Relatório técnico",
  "Dissertação",
  "Livro",
  "Notícia",
  "Evento",
];

export default function PublicacoesPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<PublicacaoFormData>({
    titulo: "",
    tipo: "",
    descricao: "",
    data: new Date().toISOString().split("T")[0],
    autor: "",
    etiqueta: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPublicacoes();
  }, []);

  const fetchPublicacoes = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/publicacoes");
      if (!response.ok) throw new Error("Erro ao carregar publicações");
      const data = await response.json();
      setPublicacoes(data.publicacoes || []);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar publicações");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const url = editingId 
        ? `/api/publicacoes/${editingId}`
        : "/api/publicacoes";
      
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao salvar publicação");
      }

      await fetchPublicacoes();
      resetForm();
    } catch (err: any) {
      setError(err.message || "Erro ao salvar publicação");
    }
  };

  const handleEdit = (publicacao: Publicacao) => {
    setFormData({
      titulo: publicacao.titulo,
      tipo: publicacao.tipo,
      descricao: publicacao.descricao,
      data: publicacao.data ? publicacao.data.split("T")[0] : new Date().toISOString().split("T")[0],
      autor: publicacao.autor || "",
      etiqueta: publicacao.etiqueta || "",
    });
    setEditingId(publicacao.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta publicação?")) {
      return;
    }

    try {
      const response = await fetch(`/api/publicacoes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao excluir publicação");
      
      await fetchPublicacoes();
    } catch (err: any) {
      setError(err.message || "Erro ao excluir publicação");
    }
  };

  const resetForm = () => {
    setFormData({
      titulo: "",
      tipo: "",
      descricao: "",
      data: new Date().toISOString().split("T")[0],
      autor: "",
      etiqueta: "",
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => router.push("/admin")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Gerenciar Publicações
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Crie e gerencie as publicações do site
                  </p>
                </div>
              </div>
              {!showForm && (
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Publicação
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {error && (
            <div className="mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          {showForm ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>
                  {editingId ? "Editar Publicação" : "Nova Publicação"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Título *
                    </label>
                    <Input
                      value={formData.titulo}
                      onChange={(e) =>
                        setFormData({ ...formData, titulo: e.target.value })
                      }
                      required
                      placeholder="Digite o título da publicação"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tipo *
                      </label>
                      <Select
                        value={formData.tipo}
                        onChange={(e) =>
                          setFormData({ ...formData, tipo: e.target.value })
                        }
                        required
                      >
                        <option value="">Selecione o tipo</option>
                        {tiposPublicacao.map((tipo) => (
                          <option key={tipo} value={tipo}>
                            {tipo}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Data *
                      </label>
                      <Input
                        type="date"
                        value={formData.data}
                        onChange={(e) =>
                          setFormData({ ...formData, data: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Descrição *
                    </label>
                    <Textarea
                      value={formData.descricao}
                      onChange={(e) =>
                        setFormData({ ...formData, descricao: e.target.value })
                      }
                      required
                      rows={4}
                      placeholder="Digite a descrição da publicação"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Autor
                      </label>
                      <Input
                        value={formData.autor}
                        onChange={(e) =>
                          setFormData({ ...formData, autor: e.target.value })
                        }
                        placeholder="Nome do autor"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Etiqueta
                      </label>
                      <Input
                        value={formData.etiqueta}
                        onChange={(e) =>
                          setFormData({ ...formData, etiqueta: e.target.value })
                        }
                        placeholder="Ex: pesquisa, evento, notícia"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit">
                      {editingId ? "Atualizar" : "Criar"} Publicação
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : null}

          {/* Lista de Publicações */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Carregando publicações...
              </p>
            </div>
          ) : publicacoes.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Nenhuma publicação cadastrada ainda.
                </p>
                <Button
                  onClick={() => setShowForm(true)}
                  className="mt-4"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Primeira Publicação
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {publicacoes.map((publicacao) => (
                <Card key={publicacao.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {publicacao.titulo}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {publicacao.tipo}
                          </span>
                          {publicacao.data && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(publicacao.data).toLocaleDateString("pt-BR")}
                            </span>
                          )}
                          {publicacao.autor && (
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {publicacao.autor}
                            </span>
                          )}
                          {publicacao.etiqueta && (
                            <span className="flex items-center gap-1">
                              <Tag className="h-4 w-4" />
                              {publicacao.etiqueta}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(publicacao)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(publicacao.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      {publicacao.descricao}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}


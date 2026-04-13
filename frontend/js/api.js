const API_URL = "http://localhost:3000";

/* ================= TOKEN ================= */

function salvarToken(token) {
  localStorage.setItem("token", token);
}

function pegarToken() {
  return localStorage.getItem("token");
}

function removerToken() {
  localStorage.removeItem("token");
}

/* ================= USUÁRIO ================= */

function salvarUsuario(usuario) {
  localStorage.setItem("usuarioNome", usuario.nome);
  localStorage.setItem("usuarioEmail", usuario.email);
}

function pegarUsuarioNome() {
  return localStorage.getItem("usuarioNome");
}

function redirecionarSeNaoLogado() {
  const token = pegarToken();

  if (!token) {
    window.location.href = "index.html";
  }
}

/* ================= HEADERS ================= */

function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + pegarToken()
  };
}

/* ================= PERSONAL TRAINERS ================= */

// 🔹 LISTAR PERSONAIS
async function listarPersonaisAPI() {
  const response = await fetch(`${API_URL}/personal-trainers`, {
    method: "GET",
    headers: getAuthHeaders()
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar personais");
  }

  return await response.json();
}

// 🔹 CADASTRAR PERSONAL
async function cadastrarPersonalAPI(dados) {
  const response = await fetch(`${API_URL}/personal-trainers`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(dados)
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.mensagem || "Erro ao cadastrar personal");
  }

  return await response.json();
}

// 🔹 EXCLUIR PERSONAL
async function excluirPersonalAPI(id) {
  const response = await fetch(`${API_URL}/personal-trainers/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir personal");
  }

  return await response.json();
}
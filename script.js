// -----------------------------
// CARREGAR PRODUTOS
// -----------------------------
const storedProducts = JSON.parse(localStorage.getItem("menuItems")) || [];

// produtos fixos
const defaultProducts = [
  {
    id: 1,
    name: "Bifé à Milanesa",
    category: "caldos",
    price: 31.20,
    description: "Marmita de bifé à milanesa crocante, acompanhada de arroz soltinho, feijão caseiro e batatas fritas douradas. O prato combina sabor e tradição, com aquele tempero de casa que desperta lembranças de almoço em família.",
    image: "img/Milanesa.jpg"
  },
  {
    id: 2,
    name: "Dobradinha - 600g",
    category: "caldos",
    price: 45.00,
    description: "Dobradinha preparada com cuidado, cozida lentamente em caldo encorpado com feijão-branco, paio e temperos selecionados. Um prato tradicional e marcante, ideal para quem aprecia sabores intensos e reconfortantes.",
    image: "img/dobradinha.jpg"
  },
  {
    id: 3,
    name: "Omelete",
    category: "caldos",
    price: 25.50,
    description: "Omelete leve e saborosa, feita com ovos frescos, queijo derretido e tomates selecionados. Finalizada com cheiro-verde e um toque de orégano, é perfeita para uma refeição simples, nutritiva e cheia de sabor.",
    image: "img/omelete.jpg"
  },
  {
    id: 4,
    name: "Bifé à Parmegiana",
    category: "carnes",
    price: 35.50,
    description: "Nosso bifé à parmegiana é empanado com perfeição, coberto por um molho de tomate artesanal e queijo derretido no ponto certo. Servido com arroz e batatas fritas, é um dos pratos mais pedidos por quem ama comfort food.",
    image: "img/parmegiana_carne.jpg"
  },
  {
    id: 5,
    name: "Filé de Frango à Parmegiana",
    category: "carnes",
    price: 32.50,
    description: "Filé de frango empanado, suculento e dourado, coberto com nosso molho sugo feito com tomates frescos e finalizado com queijo mussarela gratinado. Um clássico saboroso, perfeito para o almoço do dia a dia.",
    image: "img/parmegiana_frango.jpg"
  },
  {
    id: 6,
    name: "Panqueca de Carne",
    category: "massas",
    price: 28.00,
    description: "Panquecas finas e macias recheadas com carne moída bem temperada, cobertas por nosso delicioso molho vermelho caseiro e um toque de parmesão ralado. Um prato simples, mas cheio de sabor e afeto.",
    image: "img/panqueca_carne.jpg"
  },
  {
    id: 7,
    name: "Lasanha Presunto e Queijo",
    category: "massas",
    price: 39.90,
    description: "Camadas de massa fresca com presunto, queijo e molho artesanal de tomate, finalizadas com gratinado dourado. Sabor tradicional e irresistível.",
    image: "img/Lasanha.jpg"
  },
  {
    id: 8,
    name: "Nhoque ao Sugo",
    category: "massas",
    price: 34.00,
    description: "Nhoque de batata artesanal, leve e macio, servido com molho sugo de tomates frescos e ervas finas. Um prato reconfortante e saboroso.",
    image: "img/nhoque.jpg"
  },
  {
    id: 9,
    name: "Rondelli 4 Queijos",
    category: "massas",
    price: 36.50,
    description: "Rondellis recheados com uma mistura cremosa de quatro queijos, cobertos com molho branco suave e gratinados até atingirem textura e aroma perfeitos.",
    image: "img/rondelli.jpg"
  },
  {
    id: 10,
    name: "Arroz Branco",
    category: "acompanhamentos",
    price: 8.50,
    description: "Arroz branco soltinho, preparado com alho e cebola dourados. Leve e saboroso, ideal para acompanhar qualquer prato principal.",
    image: "img/arroz.jpg"
  },
  {
    id: 11,
    name: "Feijão Carioca",
    category: "acompanhamentos",
    price: 7.50,
    description: "Feijão carioca cozido lentamente com alho e cebola, resultando em um caldo encorpado e sabor marcante. Essencial em toda refeição brasileira.",
    image: "img/feijao.jpg"
  },
  {
    id: 12,
    name: "Batata Frita",
    category: "acompanhamentos",
    price: 12.00,
    description: "Batatas fritas douradas e crocantes, preparadas na hora e servidas quentinhas, do jeito que todo mundo ama.",
    image: "img/batata.jpg"
  },
  {
    id: 13,
    name: "Pudim de Leite",
    category: "sobremesas",
    price: 9.00,
    description: "Pudim cremoso com calda de caramelo dourada, preparado artesanalmente com leite condensado. Uma sobremesa clássica e irresistível.",
    image: "img/pudim.jpg"
  },
  {
    id: 14,
    name: "Bombom de Morango",
    category: "sobremesas",
    price: 22.50,
    description: "Morango fresco envolto em brigadeiro branco e coberto por chocolate ao leite de alta qualidade. Doce, elegante e delicioso.",
    image: "img/bombomdemorango.jpg"
  },
  {
    id: 15,
    name: "Refrigerante 2L",
    category: "bebidas",
    price: 9.50,
    description: "Garrafa de 2 litros gelada. Escolha entre Coca-Cola, Guaraná ou Pepsi e refresque seu almoço.",
    image: "img/Refri2l.jpg"
  },
  {
    id: 16,
    name: "Suco Natural 500ml",
    category: "bebidas",
    price: 6.50,
    description: "Suco natural feito na hora, 100% fruta, sem conservantes. Refrescante e saudável.",
    image: "img/suco.jpg"
  },
  {
    id: 17,
    name: "Água Mineral 1.5L",
    category: "bebidas",
    price: 3.50,
    description: "Água mineral pura e gelada, essencial para acompanhar qualquer refeição.",
    image: "img/agua.jpg"
  },
  {
    id: 18,
    name: "Frango Grelhado",
    category: "carnes",
    price: 27.90,
    description: "Filé de peito de frango grelhado com temperos suaves, ideal para refeições leves e balanceadas.",
    image: "img/frango_grelhado.jpeg"
  },
  {
    id: 19,
    name: "Carne de Panela",
    category: "carnes",
    price: 33.50,
    description: "Carne cozida lentamente em molho espesso com batatas e cenouras, derretendo de tão macia.",
    image: "img/carne_panela.jpg"
  },
  {
    id: 20,
    name: "Bife Acebolado",
    category: "carnes",
    price: 29.00,
    description: "Bife bovino grelhado com cebolas caramelizadas, um clássico do dia a dia.",
    image: "img/bife-acebolado.jfif"
  },
  {
    id: 21,
    name: "Frango à Passarinho",
    category: "carnes",
    price: 26.90,
    description: "Cortes crocantes de frango temperados com alho, limão e ervas, perfeitos para compartilhar.",
    image: "img/Frango-a-Passarinho.webp"
  },
  {
    id: 22,
    name: "Espaguete à Bolonhesa",
    category: "massas",
    price: 31.90,
    description: "Espaguete com molho bolonhesa feito com carne moída, tomate fresco e toque de manjericão.",
    image: "img/espaguete_bolonhesa.jpeg"
  },
  {
    id: 23,
    name: "Macarrão Alho e Óleo",
    category: "massas",
    price: 22.50,
    description: "Macarrão simples e saboroso, salteado no alho dourado e azeite extra virgem.",
    image: "img/alho_oleo.png"
  },
  {
    id: 24,
    name: "Lasanha de Frango com Catupiry",
    category: "massas",
    price: 39.90,
    description: "Lasanha artesanal recheada com frango desfiado e catupiry cremoso, gratinada com parmesão.",
    image: "img/lasanha_frango_catupiry.jfif"
  },
  {
    id: 25,
    name: "Canelone de Presunto e Queijo",
    category: "massas",
    price: 34.50,
    description: "Canelones recheados com presunto e queijo, cobertos com molho branco e parmesão gratinado.",
    image: "img/canelone_presunto.jpg"
  },
  {
    id: 26,
    name: "Farofa Caseira",
    category: "acompanhamentos",
    price: 7.00,
    description: "Farofa crocante com bacon, cebola e ovos, feita com farinha de mandioca torrada na hora.",
    image: "img/farofa_caseira.jpg"
  },
  {
    id: 27,
    name: "Salada de Maionese",
    category: "acompanhamentos",
    price: 8.50,
    description: "Salada de batata com maionese leve, ervilhas e cenoura, perfeita para acompanhar qualquer prato.",
    image: "img/salada_maionese.jfif"
  },
  {
    id: 28,
    name: "Legumes Refogados",
    category: "acompanhamentos",
    price: 9.00,
    description: "Legumes frescos salteados no azeite com ervas finas, uma opção saudável e colorida.",
    image: "img/legumes_refogados.webp"
  },
  {
    id: 29,
    name: "Purê de Batata",
    category: "acompanhamentos",
    price: 7.50,
    description: "Purê cremoso de batatas frescas com manteiga e toque de noz-moscada.",
    image: "img/pure_batata.jpg"
  },
  {
    id: 30,
    name: "Mousse de Maracujá",
    category: "sobremesas",
    price: 10.00,
    description: "Mousse leve e cremosa com polpa natural de maracujá e cobertura de calda azedinha.",
    image: "img/mousse_maracuja.jfif"
  },
  {
    id: 31,
    name: "Torta de Limão",
    category: "sobremesas",
    price: 12.00,
    description: "Torta com base crocante, recheio cremoso de limão e cobertura de merengue dourado.",
    image: "img/torta_limao.jfif"
  },
  {
    id: 32,
    name: "Brigadeiro Tradicional",
    category: "sobremesas",
    price: 4.00,
    description: "Clássico brigadeiro de chocolate com granulado, feito com leite condensado de verdade.",
    image: "img/brigadeiro.jpg"
  },
  {
    id: 33,
    name: "Romeu e Julieta",
    category: "sobremesas",
    price: 8.00,
    description: "Doce tradicional de goiabada com queijo fresco, simples e irresistível.",
    image: "img/romeu_julieta.jpg"
  },
  {
    id: 34,
    name: "Suco de Laranja Natural",
    category: "bebidas",
    price: 6.00,
    description: "Suco natural de laranja, 100% puro, feito na hora e servido bem gelado.",
    image: "img/suco_laranja.webp"
  },
  {
    id: 35,
    name: "Coca-Cola Lata 350ml",
    category: "bebidas",
    price: 5.50,
    description: "Coca-Cola original gelada, perfeita para acompanhar sua refeição.",
    image: "img/coca-cola-lata.webp"
  },
  {
    id: 36,
    name: "Guaraná Antarctica Lata 350ml",
    category: "bebidas",
    price: 5.00,
    description: "Guaraná Antarctica tradicional, o sabor brasileiro que não pode faltar.",
    image: "img/guarana_lata.webp"
  },
  {
    id: 37,
    name: "Cerveja Heineken Long Neck",
    category: "bebidas",
    price: 10.00,
    description: "Cerveja Heineken long neck de 330ml, puro malte e refrescante.",
    image: "img/cerveja.jfif"
  }
];


// junta os produtos fixos + cadastrados no admin
const menuItems = [...defaultProducts, ...storedProducts.filter(p => !defaultProducts.some(d => d.id === p.id))];

// -----------------------------
// VARIÁVEIS DO DOM
// -----------------------------
let cart = [];
let currentCategory = "todos";
const menuGrid = document.getElementById("menu-grid");
const sectionTitle = document.getElementById("section-title");
const navButtons = document.querySelectorAll(".nav-btn");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const closeCart = document.getElementById("close-cart");
const finalizeBtn = document.getElementById("finalize-btn");

// -----------------------------
// RENDERIZAÇÃO DO MENU
// -----------------------------
function renderMenu(items) {
  const fallback = "https://source.unsplash.com/800x600/?food";
  if (items.length === 0) {
    menuGrid.innerHTML = `<div class="empty-state"><h3>Nenhum produto encontrado</h3></div>`;
    return;
  }

  menuGrid.innerHTML = items.map(item => `
    <div class="menu-card" onclick="openProductModal(${item.id})">
      <img src="${item.image || fallback}" alt="${item.name}" class="card-image" onerror="this.src='${fallback}'">
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-price">R$ ${item.price.toFixed(2)}</p>
      </div>
    </div>
  `).join("");
}

// -----------------------------
// FILTRO DE CATEGORIA
// -----------------------------
function filterCategory(cat) {
  currentCategory = cat;
  navButtons.forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-category="${cat}"]`).classList.add("active");

  if (cat === "todos") {
    sectionTitle.textContent = "Todos os Produtos";
    renderMenu(menuItems);
  } else {
    const filtered = menuItems.filter(i => i.category === cat);
    sectionTitle.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    renderMenu(filtered);
  }
}

// -----------------------------
// CARRINHO
// -----------------------------
function addToCart(id) {
  const product = menuItems.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.reduce((acc, i) => acc + i.qty, 0);
  cartItems.innerHTML = cart.map(i => `
    <div>${i.name} (x${i.qty}) - R$ ${(i.price * i.qty).toFixed(2)}
    <button onclick="removeItem(${i.id})">❌</button></div>
  `).join('');
  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

cartBtn.onclick = () => cartModal.style.display = "flex";
closeCart.onclick = () => cartModal.style.display = "none";

// Finalizar Pedido
// Finalizar Pedido
finalizeBtn.onclick = () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const userString = localStorage.getItem("usuario");
  if (!userString) {
    alert("Você precisa estar logado para finalizar um pedido.");
    window.location.href = "login.html";
    return;
  }

  const usuario = JSON.parse(userString);
  const userEmail = usuario.email;

  // Formata os dados do pedido para enviar ao backend
  const novoPedido = {
    id: `P-${Date.now()}`,
    data: new Date().toLocaleDateString('pt-BR'),
    itens: cart.map(item => ({
      nome: item.name,
      preco: parseFloat(item.price.toFixed(2)),
      qtd: item.qty
    }))
  };

  // Envia o pedido para o backend (API)
  fetch("/api/pedido/salvar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, pedido: novoPedido })
  })
    .then(response => response.json())
    .then(data => {
      if (data.sucesso) {
        alert("Pedido finalizado e salvo com sucesso! Acompanhe no seu perfil.");
      } else {
        alert(`Erro ao finalizar pedido: ${data.erro}`);
      }
    })
    .catch(error => {
      console.error("Erro ao salvar pedido:", error);
      alert("Erro de comunicação ao salvar o pedido.");
    })
    .finally(() => {
      // Limpar o carrinho após a tentativa de salvar
      cart = [];
      updateCart();
      cartModal.style.display = "none";
    });
};

// -----------------------------
// MODAL DE PRODUTO
// -----------------------------
const productModal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalDesc = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalAddBtn = document.getElementById("modal-add-btn");
const closeProduct = document.getElementById("close-product");
let currentProductId = null;

function openProductModal(id) {
  const product = menuItems.find(p => p.id === id);
  if (!product) return;
  modalImg.src = product.image;
  modalName.textContent = product.name;
  modalDesc.textContent = product.description;
  modalPrice.textContent = `R$ ${product.price.toFixed(2)}`;
  productModal.style.display = "flex";
  currentProductId = id;
}

closeProduct.onclick = () => productModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === productModal) productModal.style.display = "none";
};

modalAddBtn.onclick = () => {
  addToCart(currentProductId);
  productModal.style.display = "none";
};

// -----------------------------
// INICIALIZAÇÃO
// -----------------------------
navButtons.forEach(btn => btn.addEventListener("click", () => filterCategory(btn.dataset.category)));
renderMenu(menuItems);
updateCart();

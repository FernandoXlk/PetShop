import React from 'react';
import './App.css';

function App() {
  
  const navTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="/PetLogo.png" alt="Logo" />
        </div>

        
        <span className="navItem" onClick={() => navTo('s1')}>
          <img src="/PataIcon.png" alt="Início" />
          <p className="navWords">Inicio</p>
        </span>

        <span className="navItem" onClick={() => navTo('s2')}>
          <img src="/TesouraIcon.png" alt="Serviços" />
          <p className="navWords">Serviços</p>
        </span>

        <span className="navItem" onClick={() => navTo('s3')}>
          <img src="/SacolaIcon.jpg" alt="Produtos" />
          <p className="navWords">Produtos</p>
        </span>

        <span className="navItem" onClick={() => navTo('s4')}>
          <img src="/PhoneIcon.png" alt="contato" />
          <p className="navWords">contato</p>
        </span>
      </nav>

      <main>
        <section id="s1" className="s1">
          <h1>O Melhor Cuidado para Seu Melhor Amigo</h1>
          <h2>Banho, tosa, consultas e os melhores produtos para garantir a saúde e felicidade do seu pet.</h2>
        </section>

        <section id="s2" className="s2">
          <div className="servicos-titulo">
            <h2>Nossos Serviços</h2>
            <p>Cuidado completo e humanizado para o seu melhor amigo</p>
          </div>

          <div className="servicos-container">
            <div className="card">
              <div className="card-imagem">
                <img src="/ConsultaImage.jpg" alt="Consulta Veterinária" />
              </div>
              <div className="card-conteudo">
                <h3>Consultas</h3>
                <p>Atendimento especializado para garantir que a saúde do seu pet esteja sempre em dia.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-imagem">
                <img src="/banhoImage.webp" alt="Banho e Tosa" />
              </div>
              <div className="card-conteudo">
                <h3>Banho & Tosa</h3>
                <p>Higiene e estética com profissionais que tratam seu pet com todo o carinho que ele merece.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-imagem">
                <img src="/LojaImage.webp" alt="Lojinha Pet" />
              </div>
              <div className="card-conteudo">
                <h3>Lojinha Pet</h3>
                <p>Uma seleção dos melhores brinquedos, rações e acessórios para agradar quem você ama.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="s3">
          <div className="produtos-titulo">
            <h2>Destaques da Lojinha</h2>
            <p>Os produtos favoritos dos nossos clientes para o seu pet</p>
          </div>

          <div className="busca-container">
            <input type="text" placeholder="O que seu pet precisa hoje? Ex: Ração, brinquedo..." />
            <button>Buscar</button>
          </div>

          <div className="produtos-vitrine">
            <div className="produto-item">
              <div className="produto-img">
                <img src="/RaçãoProduto.jpg" alt="Ração Premium" />
              </div>
              <div className="produto-info">
                <span>Cachorros</span>
                <h3>Ração Premium Especial 15kg</h3>
                <p className="preco">R$ 95,90</p>
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>

            <div className="produto-item">
              <div className="produto-img">
                <img src="/BrinquedoProduto.webp" alt="Brinquedo Interativo" />
              </div>
              <div className="produto-info">
                <span>Gatos & Cães</span>
                <h3>Brinquedo Mordedor Interativo</h3>
                <p className="preco">R$ 45,00</p>
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>

            <div className="produto-item">
              <div className="produto-img">
                <img src="/CamaProduto.webp" alt="Caminha Nuvem" />
              </div>
              <div className="produto-info">
                <span>Conforto</span>
                <h3>Cama Nuvem Ultra Macia G</h3>
                <p className="preco">R$ 60,00</p>
                <button className="btn-comprar">Comprar</button>
              </div>
            </div>
          </div>
          <button className="btn-ver-mais">Ver Mais Produtos</button>
        </section>
      </main>

      <footer id="s4" className="footer">
        <div className="footer-container">
          <div className="footer-contato">
            <h3>Nosso Contato</h3>
            <p>Email: cantinhoPET@gmail.com</p>
            <p>Telefone: (41) 4002-8922</p>
          </div>

          <div className="footer-redes">
            <h3>Siga-nos nas Redes Vizinhas</h3>
            <div className="icones-redes">

              <a href="https://www.facebook.com" target="_blank">
                <img width="40px" src="/faceIcon.png" alt="facebook"/>
            </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img width="40px" src="/instaIcon.webp" alt="instagram"/>
            </a>
              
            </div>
          </div>
        </div>

        <div className="footer-copy">
          <p>&copy; CantinhoPet. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
3 - Crie um novo projeto utilizando npx create-react-app.

Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;
No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;

No arquivo App.js , importe o componente Header criado anteriormente;
Renderize o componente Header no App.js ;

4 - Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;

Dentro do arquivo Content.jsx, crie uma classe React chamada Content;

Ainda no arquivo Content.jsx , adicione o seguinte array:

----------------------------------------------------------------------

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

----------------------------------------------------------------------

A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:

----------------------------------------------------------------------

O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`

----------------------------------------------------------------------

lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.

Exporte o componente Content;

No arquivo App.js , importe o componente Content criado anteriormente;
Renderize o componente Content no App.js;

Crie um novo arquivo Footer.jsx;

No arquivo Footer.jsx , crie uma classe chamada Footer.

A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.

Importe o componente Footer no app.js.

Renderize o componente Footer no app.js.

4 - Bônus: 
Estilize a aplicação do exercicio 3. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card.

Para adicionar uma classe de estilização em um elemento HTML, utilize o atributo className:

----------------------------------------------------------------------

<footer className='footer'>
  ...
</footer>

----------------------------------------------------------------------

<h1> DESAFIO-1 / CRIAÇÃO DE UMA APIREST</h1>

<h3>TIME : Italo Adriano,Carla Bertuol,Luan Sales</h3>

<br>

<h2>Clonar Projeto</h2>
<pre>url: https://github.com/italo-rodrigues1/APIREST-GAMAXP.git</pre>
<br>

<h2>Instalar Dependências</h2>

<pre> npm install ou yarn install</pre>

<br>

<h2>Iniciar Projeto</h2>

<pre> npm start ou yarn start</pre>

<br>

<h2>Porta</h2>

<pre>//localhost:3333</pre>
<br>

<h2>Rotas de Teste</h2>
<h4>GET</h4>
<pre>/produtos</pre>
<br>
<pre>/produtos/:id</pre>
<br>
<pre>/departamento</pre>
<br>
<pre>/departamento/:id</pre>
<br>
<h4>POST</h4>
<pre>/produtos</pre>
<br>
<h4>PUT</h4>
<pre>/produtos/:id</pre>
<br>

<h3>Rotas Erros </h3>

<pre>GET 'error 404,se o id não existir = /produtos/id' </pre>
<pre>GET 'error 404,se o id não existir = /departamento/:id'</pre>

<pre>POST 'error 400,se tiver faltando algo na estrutura do produto = /produtos'</pre>
<pre>PUT 'error 400,está faltando ou o preço está zerado = /produtos'</pre>

<br>
<h2>V1.1</h2>
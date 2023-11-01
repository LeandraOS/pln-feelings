# Feelings- Aplicação de Análise de Sentimento em Letras de Músicas
## [Link para aplicação](https://pln-feelings-tsy3.vercel.app/)

- [Introdução](#introdução)
- [Funcionalidades da Aplicação](#funcionalidades-da-aplicação)
- [Configuração e Uso](#configuração-e-uso)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Utilização da Aplicação](#utilização-da-aplicação)
  - [Enviar letra](#enviar-letra)
  - [Enviar por título da música](#enviar-por-título-da-música)


Esta aplicação permite a análise de sentimentos em letras de músicas. O usuário pode inserir a letra da música ou o título da música e o artista, e a aplicação retornará uma representação visual da análise de sentimentos presentes na música, pintando palavras-chave com cores associadas a diferentes emoções. A seguir, explicaremos como essa aplicação foi construída e como usá-la.

## Funcionalidades da Aplicação

- **Análise de Sentimento**: A aplicação utiliza o modelo GPT (Generative Pre-trained Transformer) para analisar a letra da música ou o título da música e o artista e determinar as emoções presentes na música.
- Um LLM, como o GPT-3, é um modelo treinado em uma grande quantidade de texto para entender a linguagem natural e realizar tarefas relacionadas à linguagem, como análise de sentimentos, tradução, respostas a perguntas e geração de texto.

- O GPT-3 (e outras versões menores, como GPT-2) é um exemplo de um LLM.

- **Representação Visual**: As palavras-chave na letra da música são destacadas com cores associadas a diferentes sentimentos. Isso ajuda a visualizar as emoções presentes na música.

## Configuração e Uso

### Pré-requisitos

- Node.js: Certifique-se de que o Node.js está instalado na sua máquina.

### Instalação

1. Clone o repositório do projeto:

   ```shell
   git clone https://github.com/LeandraOS/pln-feelings.git

Navegue até o diretório do projeto:

```
cd pln-feelings
```

Instale as dependências do servidor:
```
npm install
```

Navegue até o diretório do cliente (front-end) e instale as dependências:


```
cd feelings
```

```
npm install
```
```
npm start
```
Abra seu navegador e acesse http://localhost:3000 para usar a aplicação localmente.

Ou acesse o deploy https://pln-feelings-tsy3.vercel.app/

## Utilização da Aplicação
Na página inicial, você pode selecionar entre duas opções:

### Enviar letra
Para analisar a letra de uma música, insira o texto no campo de entrada e clique em "Enviar".

### Enviar por título da música
Para analisar uma música com base no título e no artista, insira essas informações nos campos correspondentes e clique em "Enviar".
A aplicação realizará a análise de sentimentos e destacará as palavras-chave na letra da música com cores associadas a diferentes emoções.

As emoções destacadas na letra da música são exibidas na parte inferior da página.

Você pode alternar entre as diferentes opções de emoção (Raiva, Alegria, Medo, Nojo, Tristeza, Satisfação, Confiança, Amor, Esperança) para visualizar as palavras-chave associadas a cada emoção na letra da música.




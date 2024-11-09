<br>

<h3 align="center">HackOn</h3>

<p align="center">
Uma plataforma de gestão de desafios e hackathons da Bichinhos da TI.
</p>
<br><br>

<!-- ABOUT THE PROJECT -->
## 📌 Objetivo do projeto
A plataforma HackOn oferece um meio eficaz para gerir e criar desafios e hackathons para a comunidade da Bichinhos da TI.  
Dentro da plataforma, o líder de cada squad poderá criar desafios em diversos formatos, como: desafios sazonais, trilhas de desenvolvimento padrão, eventos, etc. Cada integrante/equipe poderá 
se inscrever nesses desafios e devolver suas soluções através de estruturas similares ao CodePen e/ou repositórios do GitHub.  
Conforme os integrantes das equipes entregam os desafios, eles receberão elementos gamificados que serão acumulados. Estes elementos podem ser representados através de: níveis, badges, etc., que serão utilizados tanto para avaliação quanto para liberar desafios mais complexos dentro da trilha de desenvolvimento.  
Os dados gerados pela plataforma permitem que os líderes realizem avaliações técnicas dos integrantes de seus grupos, fornecendo informações valiosas que podem ser utilizadas em diferentes contextos dentro da comunidade Bichinhos da TI.

<br>

<!-- GETTING STARTED -->
## 🚀 Instalação e execução

_Para instalar este projeto você deve:_

1. Possuir o NodeJs na versão 18 ou superior.

2. Clonar este repositório:
   ```sh
   git clone https://github.com/Bichinhos-da-TI/HackOn-frontend.git


3. Executar os comandos:
   ```sh
   cd HackOn-frontend/
   
   npm install
   ```

<br>

## 🧪 Testes Automatizados com Cypress

Este projeto utiliza o Cypress para realizar testes automatizados de ponta a ponta. Os testes são configurados para serem executados automaticamente através do GitHub Actions em cada `push` ou `pull request` para a branch `main`.

### Executando Testes Localmente

Para executar os testes localmente, certifique-se de que a aplicação está em execução. Você pode iniciar a aplicação com:

```sh
npm start
```

Depois, abra o Cypress Test Runner com:

```sh
npm run cypress:open
```

Ou, para executar os testes em modo headless (sem interface gráfica):

```sh
npm run cypress:run
```

### Testes no GitHub Actions

Os testes são executados automaticamente no GitHub Actions conforme configurado no workflow `.github/workflows/ci.yml`. Os resultados dos testes, incluindo capturas de tela e vídeos em caso de falha, são armazenados como artefatos na execução do workflow.

Para acessar os resultados dos testes, siga os passos:
1. Acesse a aba **Actions** do repositório no GitHub.
2. Selecione a execução desejada.
3. Baixe os artefatos disponíveis para visualizar capturas de tela e vídeos dos testes.

<br>

## 🤝 Contribuições

Sinta-se livre para contribuir com o projeto postando uma issue e/ou entrando em discussões.  
No entanto, para contribuir com o código do projeto, é necessário fazer parte da Squad 1 de desenvolvimento de produtos da Bichinhos da TI.

Apreciamos imensamente o suporte e qualquer ajuda possível! 😊

<br>

## Para contribuir

1. **Importante**: Atente-se ao nome da branch principal: `master`.

2. Acesse a branch `develop`, crie sua branch e a acesse:

   ```sh
   git branch -a

   git checkout develop
   
   git branch <nome-da-branch>

   git checkout <nome-da-branch>
   ```

3. Realize suas alterações e, ao final, faça o `push` da mesma:

   ```sh
   git add .

   git commit -m "o que fez"
   
   git push
   ```

4. Por fim, abra um Pull Request pelo GitHub.

<br>

## 📝 Licença

Você pode encontrar a licença deste projeto em [Licença](./LICENSE).

<br>

## Mais informações

Para mais informações, você pode nos encontrar em nossas redes sociais:

- [LinkedIn](https://www.linkedin.com/company/bichinhosdati)
- [Instagram](https://www.instagram.com/bichinhosdati/)
- [YouTube](https://www.youtube.com/@bichinhosdati)
```

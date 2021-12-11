## VacPet  🐶🐱
VacPet é uma carteirinha de vacinação online para Pet's, onde fica registrado quais vacinas o Pet tomou, clinica e veterinário que aplicou. 


## Como instalar o projeto? ⚙️

Nesse projeto estaremos utilizando o banco de dados **MySQL**. Certifique-se que o mesmo está instalado e crie um banco de dados com o nome *vacpet*.  Caso queira mudar configurações de acesso ao banco, deve-se modificar o arquivo *ormconfig.js*
Tenha instalado também o **Node.js**.

Faça clone desse repositório ou baixe o zip. Dentro da pasta do projeto execute o seguinte comando para baixar os pacotes utilizados no projeto.

    yarn OU npm install

Logo após, execute os comandos abaixo para criar as tabelas.
 
    yarn typeorm migration:run OU npm run typeorm migration:run
    
Para iniciar o projeto em desenvolvimento:
 
    yarn dev OU npm run dev

Para compilar o código Typescript para Javascript:
 
    yarn build OU npm run build
Para executar o código compilado: 
				  
	yarn start OU npm run start
     
## Tecnologias e libs utilizadas 🚀
- TypeScript (Backend)
- HTML, CSS, JavaScript (Frontend)
- [TypeORM](https://typeorm.io/#/)
- MySQL
- [Handlebars](https://handlebarsjs.com/)
- [Passport](http://www.passportjs.org/)
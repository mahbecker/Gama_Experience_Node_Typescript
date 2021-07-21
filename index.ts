//incluindo biblioteca
//import {createServer} as http from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import {writeFile} from 'fs';
import {createServer, IncomingMessage, ServerResponse } from 'http';
import { write } from 'fs';
//import { isRestTypeNode, resolveTypeReferenceDirective } from 'typescript';

//definicao porta
const port = 5000

//se import * as http
//const server = http.createServer();
const server = createServer((request: IncomingMessage,response:ServerResponse) => {
    //implementar codigo
    
    const urlparse= url.parse(request.url? request.url: '', true);
    var resposta;

    //receber informacoes do usuario
    const params=parse(urlparse.search? urlparse.search: '');

    //criar um usuario - atualizar usuario
    if(urlparse.pathname=='/criar-atualizar-usuario'){

        // salvar as informações 
        writeFile('users/'+params.id + '.txt', JSON.stringify(params), function(err: any){
            if (err) throw err;
            console.log('Saved!');
            resposta = 'Usuario criado / atualizado com sucesso';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);

        })

       // response.end("Hello Word and Sun")

    }

    //salvar as informacoes

});

//execução 
server.listen( port, ()=> {
    console.log(`Server running on port ${port}`)

    
})
//localhost:5000/criar-atualizar-usuario?id=123&nome=maria
import {Prioridade} from './Enumeradores'
import {Tarefa} from './Tipos'

export function criarTarefa(titulo: string, descricao: string, prioridade: Prioridade): Tarefa {
    const minhaTarefa: Tarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: false,
        prioridade: Prioridade.Alta
    }
    return minhaTarefa;
 }

export function exibirTarefa (tarefa : Tarefa) : void {
    let status = 'Não Concluída'
    if(tarefa.concluida){
        status = 'Concluída'
    }
    let resultado = `Titulo: ${tarefa.titulo}, 
        Prioridade: ${tarefa.prioridade}, 
        Status: ${status}.`;

    return console.log(resultado);
 }

 export function concluirTarefa (tarefa : Tarefa) {
    tarefa.concluida = true;
 }
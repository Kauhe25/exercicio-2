"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarTarefa = criarTarefa;
exports.exibirTarefa = exibirTarefa;
exports.concluirTarefa = concluirTarefa;
const Enumeradores_1 = require("./Enumeradores");
function criarTarefa(titulo, descricao, prioridade) {
    const minhaTarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: false,
        prioridade: Enumeradores_1.Prioridade.Alta
    };
    return minhaTarefa;
}
function exibirTarefa(tarefa) {
    let status = 'Não Concluída';
    if (tarefa.concluida) {
        status = 'Concluída';
    }
    let resultado = `Titulo: ${tarefa.titulo}, 
        Prioridade: ${tarefa.prioridade}, 
        Status: ${status}.`;
    return console.log(resultado);
}
function concluirTarefa(tarefa) {
    tarefa.concluida = true;
}

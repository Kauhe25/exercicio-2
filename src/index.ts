import { concluirTarefa, criarTarefa, exibirTarefa } from './GerenciadorTarefa'
import { Prioridade } from './Enumeradores'

let primeiraTarefa = criarTarefa ('Primeira tarefa', 
    'tarefa desafiadora', 
    Prioridade.Media);

exibirTarefa(primeiraTarefa);
concluirTarefa(primeiraTarefa);
exibirTarefa(primeiraTarefa);
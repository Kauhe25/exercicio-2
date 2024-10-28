import {Prioridade} from './Enumeradores'

export type Tarefa = {
    titulo: string,
    descricao: string,
    concluida: boolean,
    prioridade: Prioridade
}
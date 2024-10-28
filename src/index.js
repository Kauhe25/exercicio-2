"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GerenciadorTarefa_1 = require("./GerenciadorTarefa");
const Enumeradores_1 = require("./Enumeradores");
let primeiraTarefa = (0, GerenciadorTarefa_1.criarTarefa)('Primeira tarefa', 'tarefa desafiadora', Enumeradores_1.Prioridade.Media);
(0, GerenciadorTarefa_1.exibirTarefa)(primeiraTarefa);
(0, GerenciadorTarefa_1.concluirTarefa)(primeiraTarefa);
(0, GerenciadorTarefa_1.exibirTarefa)(primeiraTarefa);

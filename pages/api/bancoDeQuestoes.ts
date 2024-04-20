import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, "Qual bicho transmite a Doença de Chagas?", [
    RespostaModel.errada('Abelha'),
    RespostaModel.errada('Barata'),
    RespostaModel.errada('Pulga'),
    RespostaModel.certa('Barbeiro'),
  ]),

  new QuestaoModel(202, "Qual fruto é conhecido no Norte e Nordeste como 'jerimum'?", [
    RespostaModel.errada('Caju'),
    RespostaModel.errada('Côco'),
    RespostaModel.errada('Chuchu'),
    RespostaModel.certa('Abóbora'),
  ]),

  new QuestaoModel(203, "Qual é o coletivo de cães?", [
    RespostaModel.errada('Manada'),
    RespostaModel.errada('Alcateia'),
    RespostaModel.errada('Rebanho'),
    RespostaModel.certa('Matilha'),
  ]),
  
  new QuestaoModel(205, "Qual é o triângulo que tem todos os lados diferentes?", [
    RespostaModel.errada('Equilátero'),
    RespostaModel.errada('Isósceles'),
    RespostaModel.errada('Trapézio'),
    RespostaModel.certa('Escaleno'),
  ]),

  new QuestaoModel(206, "Quem compôs o Hino da Independência?", [
    RespostaModel.errada('Carlos Gomes'),
    RespostaModel.errada('Castro Alvez'),
    RespostaModel.errada('Manuel Bandeira'),
    RespostaModel.certa('Dom Pedro I.'),
  ]),

  new QuestaoModel(207, "Qual é o antônimo de 'malograr'?", [
    RespostaModel.errada('Fracassar'),
    RespostaModel.errada('Desprezar'),
    RespostaModel.errada('Perder'),
    RespostaModel.certa('Conseguir'),
  ]),

  new QuestaoModel(208, "Em que país nasceu Carmem Miranda?", [
    RespostaModel.errada('Espanha'),
    RespostaModel.errada('Brasil'),
    RespostaModel.errada('Argentina'),
    RespostaModel.certa('Portugal'),
  ]),

  new QuestaoModel(209, "Qual foi o último Presidente do período da ditadura militar no Brasil?", [
    RespostaModel.errada('Costa e Silva'),
    RespostaModel.errada('Emílio Médici'),
    RespostaModel.errada('Ernesto Geisel'),
    RespostaModel.certa('João Figueiredo'),
  ]),

  new QuestaoModel(210, "Seguindo a sequência do baralho, qual carta vem depois do dez?", [
    RespostaModel.errada('Às'),
    RespostaModel.errada('Nove'),
    RespostaModel.errada('Rei'),
    RespostaModel.certa('Valete'),
  ]),

  new QuestaoModel(211, "O adjetivo 'venoso' está relacionado a:", [
    RespostaModel.errada('Vênia'),
    RespostaModel.errada('Vela'),
    RespostaModel.errada('Vento'),
    RespostaModel.certa('Veia'),
  ]),

  new QuestaoModel(212, "Que nome se dá à purificação por meio da água?", [
    RespostaModel.errada('Abolição'),
    RespostaModel.errada('Abnegação'),
    RespostaModel.errada('Abrupção'),
    RespostaModel.certa('Ablução'),
  ]),

  new QuestaoModel(213, "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?", [
    RespostaModel.errada('Monte Fuji'),
    RespostaModel.errada('Monte Carlo'),
    RespostaModel.errada('Monte Branco'),
    RespostaModel.certa('Monte Everest'),
  ]),

  new QuestaoModel(214, "Em que parte do corpo se encontra a epiglote?", [
    RespostaModel.errada('Estômago'),
    RespostaModel.errada('Pâncreas'),
    RespostaModel.errada('Rim'),
    RespostaModel.certa('Boca'),
  ]),

  new QuestaoModel(215, "A compensação por perda é chamada de...", [
    RespostaModel.errada('Indexação'),
    RespostaModel.errada('Déficit'),
    RespostaModel.errada('Indébito'),
    RespostaModel.certa('Indenização'),
  ]),

  new QuestaoModel(216, "Em que dia nasceu e em que dia foi registrado o Presidente Lula?", [
    RespostaModel.errada('9 e 26 de outubro'),
    RespostaModel.errada('8 e 27 de outubro'),
    RespostaModel.errada('7 e 23 de outubro'),
    RespostaModel.certa('6 e 27 de outubro'),
  ]),
];

export default questoes;
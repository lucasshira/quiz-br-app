import RespostaModel from "./resposta";

export default class QuestaoModel {
  private _id: number
  private _enunciado: string
  private _respostas: RespostaModel[]
  private _acertou: boolean

  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
    this._id = id;
    this._enunciado = enunciado;
    this._respostas = respostas;
    this._acertou = acertou;
  }

  get id() {
    return this._id
  }

  get enunciado() {
    return this._enunciado
  }

  get respostas() {
    return this._respostas
  }

  get acertou() {
    return this._acertou
  }

  get respondida() {
    for (let resposta of this._respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  paraObjeto() {
    return {
      id: this._id,
      enunciado: this._enunciado,
      respostas: this._respostas.map(resposta => resposta.paraObjeto()),
      acertou: this._acertou
    }
  }
}
export class Compte {
  id!: number;
  solde: number;
  decouverte: number;
  agenceId!: number;
  clientId: number;

  constructor(
    solde: number,
    decouverte: number,
    agenceId: number,
    clientId: number
  ) {
    this.solde = solde;
    this.decouverte = decouverte;
    this.agenceId = agenceId;
    this.clientId = clientId;
  }
}

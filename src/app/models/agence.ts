export class Agence {
  id!: number;
  nom: string;
  adresse: string;
  telephone: string;

  constructor(
    nom: string,
    adresse: string,
    telephone: string
  ) {
    this.nom = nom;
    this.adresse = adresse;
    this.telephone = telephone;
  }
}

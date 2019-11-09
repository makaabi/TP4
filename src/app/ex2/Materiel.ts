
export class Materiel
{

  private nom:String ;
  private reference:String ;
  private image:String ;
  private prix:number ;
  private etat:String ;
constructor(nom:string,reference:string,image:string, prix: number,etat:string)
{
  this.nom =nom;
  this.reference =reference ;
  this.image = image;
  this.prix = prix;
  this.etat = etat;
}

public setetat(value: string) {
  this.etat = value;
  }
}

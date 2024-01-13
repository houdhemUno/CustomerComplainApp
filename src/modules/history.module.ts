export interface Historique_Rec {
  id: number,
  date: string,
  action: string,
  id_utilisateur?: number,
  id_reclamation: number,
  etat: string,
  id_client: number,
  id_produit: number,
  id_commande?: number,
  id_livraison?: number,
}
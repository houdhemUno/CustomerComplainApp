export class RechercheService {
  private reclamations: any[] = [
    { id: '1', reclamant: 'Utilisateur 1', objet: 'Réclamation 1', date: '2022-01-01' }
  ];

  rechercherParId(id: string): any[] {
    return this.reclamations.filter(reclamation => reclamation.id.toLowerCase().includes(id.toLowerCase()));
  }

  rechercherParReclamant(reclamant: string): any[] {
    return this.reclamations.filter(reclamation =>
      reclamation.reclamant.toLowerCase().includes(reclamant.toLowerCase())
    );
  }

  rechercherParDate(date: string): any[] {
    return this.reclamations.filter(reclamation => reclamation.date.includes(date));
  }
}
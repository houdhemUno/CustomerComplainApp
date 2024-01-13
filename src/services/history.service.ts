export class HistoryService {

  private claimHistory: any[] = [];

  // Méthode pour récupérer l'historique d'une réclamation spécifique
  getClaimHistory(claimId: number): any[] {
    return this.claimHistory.filter(entry => entry.claimId === claimId);
  }
}

export class FileService {

  // Méthode pour envoyer un fichier
  uploadFile(file: File): void {
  }

  // Méthode pour télécharger un fichier
  downloadFile(fileUrl: string): void {
    console.log('Downloading file from:', fileUrl);
  }

  // Méthode pour stocker le fichier localement
  storeFileLocally(file: File): void {
    console.log('Storing file locally:', file);
  }
}

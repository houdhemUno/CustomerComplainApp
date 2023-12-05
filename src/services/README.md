# Services Angular

Bienvenue dans le dossier des services de notre projet Angular. Les services jouent un rôle crucial dans l'organisation du code et la gestion de la logique métier. Ce répertoire contient tous les services utilisés dans l'application.

## Objectif

Les services sont utilisés pour encapsuler la logique métier, gérer les appels API, partager des données entre composants, et assurer une séparation propre des responsabilités. Ces services contribuent à rendre notre application plus modulaire, réutilisable et facile à entretenir.

## Organisation

Le dossier des services est organisé de manière à regrouper les services similaires ou liés. Voici une structure de base :

/services\
|-- authentication.service.ts\
|-- reclamation.service.ts\
|-- user.service.ts\

- **Auth :** Contient les services liés à l'authentification et à l'autorisation.
- **Reclamation :** Services de gestion des reclamations, leurs etats, l'emeteur, le recepteur etc.
- **User:** Services de gestion des utilisateurs.

## Utilisation

### Importation

Pour utiliser un service dans un composant, vous pouvez l'importer comme ceci :

```typescript
import { MonService } from 'chemin-vers-le-service';
```
### Injection de dépendance

```typescript
constructor(private monService: MonService) { };
```

### Exemple d'utilisation

```typescript
ngOnInit() {
  this.monService.method()
    .subscribe(data => {
      // Faire quelque chose avec les données
    });
}
```

## Contribution

1. Clonez ce dépôt sur votre machine locale.
2. Créez une branche pour vos modifications: `git checkout -b nom-de-votre-branche`
3. Faites vos modifications et commit avec des messages explicites: `git commit -m "Description des modifications"`
4. Poussez votre branche vers le dépôt: `git push origin nom-de-votre-branche`
5. Soumettez une Pull Request sur GitHub.
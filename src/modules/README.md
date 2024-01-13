## Modules Angular

### Authentification (`auth.module.ts`)

Le module `auth.module.ts` gère l'authentification des utilisateurs dans l'application. Ce code définit un module Angular appelé AuthModule pour gérer l'authentification. Il inclut le composant de connexion (LoginComponent), configure les modules Angular nécessaires (CommonModule, FormsModule, RouterModule), et fournit le service d'authentification (AuthenticationService). De plus, il définit une route pour le composant de connexion avec le chemin 'login'.

[![Aide Authentification](https://img.shields.io/badge/Aide-Authentification-blue)](#)

### Réclamations (`reclamation.module.ts`)

Le module `reclamation.module.ts` offre des fonctionnalités pour la gestion des réclamations. Ce code représente un module Angular appelé ReclamationModule dédié à la gestion des réclamations. Il inclut trois composants (ReclamationsComponent, ReclamationDetailsComponent, et ReclamationFormComponent), configure les modules essentiels d'Angular (CommonModule, FormsModule, RouterModule), et définit des routes pour afficher, créer, et modifier des réclamations. Le service ReclamationService est également fourni au niveau du module pour la gestion des opérations liées aux réclamations.

[![Aide Réclamations](https://img.shields.io/badge/Aide-R%C3%A9clamations-green)](#)

### Gestion des Utilisateurs (`user.module.ts`)

Le module `user.module.ts` est dédié à la gestion des utilisateurs. Il inclut les composants associés (UsersComponent, UserDetailsComponent, et UserFormComponent), configure les modules nécessaires d'Angular, définit des routes pour l'affichage, la création, et la modification des utilisateurs, et fournit le service UserService au niveau du module pour la gestion des opérations liées aux utilisateurs.

[![Aide Gestion des Utilisateurs](https://img.shields.io/badge/Aide-Gestion%20Utilisateurs-yellow)](#)

### Routes (`routing.module.ts`)

> **Important**: le module route est maintenant défini dans le dossier "/app" sous le nom "app.routes.ts"

Le module `routing.module.ts` définit les routes de l'application, permettant la navigation entre les différentes pages. Il utilise le routeur Angular pour gérer la navigation de manière efficace.

[![Aide Routes](https://img.shields.io/badge/Aide-Routes-red)](#)

## Comment Contribuer

1. Clonez ce dépôt sur votre machine locale.
2. Créez une branche pour vos modifications: `git checkout -b nom-de-votre-branche`
3. Faites vos modifications et commit avec des messages explicites: `git commit -m "Description des modifications"`
4. Poussez votre branche vers le dépôt: `git push origin nom-de-votre-branche`
5. Soumettez une Pull Request sur GitHub.

## Besoin d'Aide?

Si vous avez des questions ou besoin d'aide sur l'un des modules, n'hésitez pas à utiliser les boutons d'aide associés à chaque module.

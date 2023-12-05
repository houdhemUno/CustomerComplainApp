
## Assets Angular 

### [local-test-ptr.datas.json](Assets/local-test-ptr.datas.json)

Ce fichier JSON contient des données associées à des cartes de paiement, y compris des informations sur la carte, le compte, la date de livraison, l'enrôlement, la date d'expiration, le numéro de téléphone mobile, le nom de la carte, etc.

[![Aide Données Cartes](https://img.shields.io/badge/Aide-Donn%C3%A9es%20Cartes-blue)](#) 

### [local-test-ptr.habilitations.json](Assets/local-test-ptr.habilitations.json)

Ce fichier JSON contient des données d'habilitation associées aux utilisateurs
Il contient deux objets représentant des catégories associées à un utilisateur. Chaque objet comprend un identifiant unique (_id), l'identifiant de l'utilisateur (userId), un identifiant de catégorie (id), et le libellé de la catégorie (intitule). La date de création (created) est également incluse

[![Aide Habilitations Utilisateurs](https://img.shields.io/badge/Aide-Habilitations%20Utilisateurs-green)](#) 

### [local-test-ptr.motifreclamations.json](Assets/local-test-ptr.motifreclamations.json)

Ce fichier JSON contient des motifs de réclamations utilisés dans l'application
Il représente une liste de groupes de litiges associés à des codes spécifiques. Chaque groupe a des caractéristiques telles que la famille, le motif du litige, un code, un délai de résolution, et une indication de la présence de documents. La liste a été créée le 26 septembre 2023 et mise à jour pour la dernière fois le 2 novembre 2023.

[![Aide Motifs Réclamations](https://img.shields.io/badge/Aide-Motifs%20R%C3%A9clamations-yellow)](#) 

### [local-test-ptr.otps.json](Assets/local-test-ptr.otps.json)

Ce fichier JSON contient des données associées aux mots de passe à usage unique (OTPs)
Il contient des objets représentant des OTP (One-Time Passwords) générés. Chaque objet comprend un identifiant unique, la valeur de l'OTP, la date et l'heure d'expiration, ainsi que la date et l'heure de création. Deux OTP ont été générés, chacun avec une valeur unique et une expiration prévue le 10 novembre 2023.

[![Aide OTPs](https://img.shields.io/badge/Aide-OTPs-red)](#) 

### [local-test-ptr.reclamations.json](Assets/local-test-ptr.reclamations.json)

Ce fichier JSON contient des données sur les réclamations enregistrées dans l'application
Il représente une entrée de transaction liée à un utilisateur. Il contient des détails tels que l'identifiant de l'utilisateur, des informations sur une transaction, des changements associés, le statut de la transaction, et des métadonnées de création et de mise à jour. La transaction comprend des données telles que le montant, la date, le code d'autorisation, et des détails du commerçant. Un commentaire de changement et le statut initial "créé" sont également inclus. La transaction a été créée le 11 novembre 2023 et mise à jour pour la dernière fois le 12 novembre 2023

[![Aide Réclamations](https://img.shields.io/badge/Aide-R%C3%A9clamations-purple)](#) 

### [local-test-ptr.transactions.json](Assets/local-test-ptr.transactions.json)

Ce fichier JSON contient des données sur les transactions effectuées dans l'application.
Il contient des enregistrements de transactions commerciales, avec des informations telles que l'identifiant du commerçant, le numéro de lot, le montant de la transaction, la date, et d'autres détails. Les transactions semblent être liées à des opérations de débit, avec des codes d'opération et des raisons de rejet spécifiques. Les données sont structurées au format JSON et incluent des détails sur les commerçants, les cartes de crédit, et les codes d'autorisation.

[![Aide Transactions](https://img.shields.io/badge/Aide-Transactions-orange)](#) 

### [local-test-ptr.users.json](Assets/local-test-ptr.users.json)

Ce fichier JSON contient des données sur les utilisateurs de l'application.
Il représente les données d'un utilisateur avec des champs tels que l'email, le mot de passe (haché), et la confirmation de mot de passe. Les informations personnelles comprennent le prénom, le nom, et la civilité. Les attributs du compte indiquent le rôle de l'utilisateur (administrateur), son statut de connexion (déconnecté), et le statut de désactivation (non désactivé) avec la date correspondante. Les détails de session comprennent un jeton d'accès, ainsi que les dates de création et de mise à jour du compte, accompagnées des habilitations associées

[![Aide Utilisateurs](https://img.shields.io/badge/Aide-Utilisateurs-lightgrey)](#) 

## Comment Contribuer

1. Clonez ce dépôt sur votre machine locale.
2. Créez une branche pour vos modifications: `git checkout -b nom-de-votre-branche`
3. Faites vos modifications et commit avec des messages explicites: `git commit -m "Description des modifications"`
4. Poussez votre branche vers le dépôt: `git push origin nom-de-votre-branche`
5. Soumettez une Pull Request sur GitHub.

## Besoin d'Aide?

Si vous avez des questions ou besoin d'aide sur l'un des fichiers du dossier "Assets", n'hésitez pas à utiliser les boutons d'aide associés à chaque fichier. 

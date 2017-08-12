Test de webpack dans symfony
========================

j'ai utilisé [webpack encore][1], une surcouche de webpack pour symfony


Installer les projet
--------------

Installer symphony et les dépendances
```bash
composer Install
```

Installer les dépendances node
```bash
npm install
```

Build les assets
--------------

En dev (watch les changements sur le fichiers)
```bash
npm run dev
```

En prod (build les assets, minifie le js et css)
```bash
npm run prod
```

[1]:  http://symfony.com/doc/current/frontend.html
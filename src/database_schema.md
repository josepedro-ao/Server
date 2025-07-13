# Esquema da Base de Dados

> **Gerado automaticamente a partir dos models Sequelize**

---

## Tabela: album
- id_album: INTEGER, PK, autoIncrement, NOT NULL
- titulo: STRING(100), NOT NULL
- data_lancamento: DATE, NOT NULL
- capa: STRING(255), NOT NULL

---

## Tabela: artista
- id_artista: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL
- biografia: TEXT, NULL
- imagem: STRING(255), NULL
- id_editora: INTEGER, NOT NULL

---

## Tabela: compositores
- id_compositor: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL

---

## Tabela: criticas
- id_critica: INTEGER, PK, autoIncrement, NOT NULL
- descricao: TEXT, NOT NULL
- id_perfil_usuario: INTEGER, NOT NULL
- id_midia: INTEGER, NOT NULL

---

## Tabela: editora
- id_editora: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL

---

## Tabela: genero_media
- id_genero_media: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL

---

## Tabela: grupo_media
- id_grupo_media: INTEGER, PK, autoIncrement, NOT NULL
- id_grupo: INTEGER, NOT NULL (FK grupo)
- id_media: INTEGER, NOT NULL (FK midia)

---

## Tabela: grupo_usuario
- id_grupo_usuario: INTEGER, PK, autoIncrement, NOT NULL
- id_grupo: INTEGER, NOT NULL (FK grupo)
- id_perfil_usuario: INTEGER, NOT NULL (FK perfil_usuario)
- id_papel_usuario_grupo: INTEGER, NOT NULL (FK papel_usuario_grupo)
- data_entrada: DATE, NOT NULL, default NOW

---

## Tabela: legendas
- id_legendas: INTEGER, PK, autoIncrement, NOT NULL
- arquivo: STRING(255), NOT NULL
- estado: BOOLEAN, NOT NULL, default FALSE

---

## Tabela: midia_album
- id_midia_album: INTEGER, PK, autoIncrement, NOT NULL
- id_midia: INTEGER, NOT NULL (FK midia)
- id_album: INTEGER, NOT NULL (FK album)

---

## Tabela: midia_artista
- id_midia_artista: INTEGER, PK, autoIncrement, NOT NULL
- id_midia: INTEGER, NOT NULL (FK midia)
- id_artista: INTEGER, NOT NULL (FK artista)

---

## Tabela: midia_compositor
- id_midia_compositor: INTEGER, PK, autoIncrement, NOT NULL
- id_midia: INTEGER, NOT NULL (FK midia)
- id_compositor: INTEGER, NULL (FK compositores)
- id_artista: INTEGER, NULL (FK artista)

---

## Tabela: midia
- id_midia: INTEGER, PK, autoIncrement, NOT NULL
- titulo: STRING(100), NULL
- descricao: STRING(20), NULL
- id_legenda: INTEGER, NULL (FK legendas)
- id_genero_media: INTEGER, NULL (FK genero_media)
- id_tipo_media: INTEGER, NULL (FK tipo_media)
- duracao: STRING(50), NULL
- arquivo: STRING(50), NULL
- formato_media: STRING(50), NULL
- tamanho: STRING(50), NULL
- data: STRING(50), NULL
- id_perfil_usuario: INTEGER, NULL (FK perfil_usuario)
- estado: BOOLEAN, NULL, default TRUE
- imagem: BLOB, NULL
- visibilidade: STRING(20), NULL

---

## Tabela: notificacao_visualizacao
- id_notificacao_visualizacao: INTEGER, PK, autoIncrement, NOT NULL
- id_perfil_usuario: INTEGER, NOT NULL (FK perfil_usuario)
- data_visualizacao: DATE, NOT NULL, default NOW
- id_notificacao: INTEGER, NOT NULL (FK notificacoes)

---

## Tabela: notificacoes
- id_notificacao: INTEGER, PK, autoIncrement, NOT NULL
- id_perfil_usuario: INTEGER, NOT NULL (FK perfil_usuario)
- mensagem: STRING(255), NOT NULL
- data_envio: DATE, NOT NULL, default NOW
- destino: INTEGER, NOT NULL
- tipo: STRING(255), NOT NULL

---

## Tabela: partilha
- id_partilha: INTEGER, PK, autoIncrement, NOT NULL
- id_midia: INTEGER, NOT NULL (FK midia)
- id_receptor_usuario: INTEGER, NOT NULL
- id_perfil_usuario: INTEGER, NOT NULL (FK perfil_usuario)
- data: DATE, NOT NULL, default NOW

---

## Tabela: playlist_media
- id_playlist_media: INTEGER, PK, autoIncrement, NOT NULL
- id_midia: INTEGER, NOT NULL (FK midia)
- id_playlist: INTEGER, NOT NULL (FK playlist)

---

## Tabela: playlist
- id_playlist: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL
- data: DATE, NOT NULL, default NOW
- visibilidade: STRING(50), NOT NULL
- estado: BOOLEAN, NOT NULL

---

## Tabela: playlist_usuario
- id_playlist_usuario: INTEGER, PK, autoIncrement, NOT NULL
- id_perfil_usuario: INTEGER, NOT NULL (FK perfil_usuario)
- id_playlist: INTEGER, NOT NULL (FK playlist)

---

## Tabela: tipo_media
- id_tipo_media: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL

---

## Tabela: usuario
- id_usuario: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL
- sobrenome: STRING(100), NOT NULL
- email: STRING(100), NOT NULL, UNIQUE

---

## Tabela: perfil_usuario
- id_perfil_usuario: INTEGER, PK, autoIncrement, NOT NULL
- id_usuario: INTEGER, NOT NULL (FK usuario)
- username: STRING(50), NOT NULL, UNIQUE
- avatar: STRING(255), NULL
- bio: TEXT, NULL
- senha: STRING(255), NOT NULL

---

## Tabela: papel_usuario_grupo
- id_papel_usuario_grupo: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL

---

## Tabela: grupo
- id_grupo: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL
- estado: STRING(50), NOT NULL
- tipo: STRING(50), NOT NULL

---

## Tabela: formato_media
- id_formato_media: INTEGER, PK, autoIncrement, NOT NULL
- nome: STRING(100), NOT NULL 
#Objetivo:
Definir una API para gestionar nuestro equipo Pokémon

#Acciones:
- Identificarnos
- Añadir Pokémon de nuestro equipo
- Eliminar Pokémon de nuestro equipo
- Consultar información de nuestro equipo
- Intercarmbiar el orden de nuestros Pokémon

#REST Design:
- Añadir Pokémon: POST /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestros pokémon: PUT /team
- Sistema de credenciales
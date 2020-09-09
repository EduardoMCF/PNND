#  PNND - Penso Num Nome Depois

## Descrição do Projeto
Trata-se de um sistema colaborativo de descrição de elementos de imagens. Nele usuários poderão criar tags destacando atores ou objetos de uma imagem, assim como avaliar as submissões de outros usuários. As marcações feitas pelos usuários serão incorporadas, baseado-se na qualidade das avaliações, a um modelo que será utilizado para detectar objetos em imagens e gerar uma descrição textual da mesma.

## Telas

- ### Tela 1 - Listagem das marcações feitas pelos usuários.
	- É possível filtrar por 
		- Tags
		- Marcações do usuário
		- Marcações avaliadas pelo usuário
	
	- É possível ordernar por
		- Nota
		- Data de criação
		- Quantidade de marcações

	- Na listagem cada marcação tem
		- Um conjunto de tags associadas
		- Uma nota de 1 a 5
		- Uma opção de criar uma nova marcação com base nesta já existente.
	
- ### Tela 2 - Marcação de imagens.
	- A marcação será baseada em bounding boxes. As operações associadas à eles serão:
		- Criar
		- Remover
		- Editar
		- Associar à uma tag

	- Além disso também será possível adicionar uma descrição em linguagem natural da imagem.

- ### Tela 3 - Descrição textual automática
	- Nesta tela será possível enviar um imagem para o servidor. As formas de envio serão
		- Url
		- Upload de aquivo local

	- A resposta do servidor consistirá em uma imagem com os bounding boxes com os objetos detectados e uma descrição textual da mesma.








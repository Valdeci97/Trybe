const { getRepos } = require('./fetchGitHub');

describe('Verifica se há os repositórios passando api do github', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  it('Retorna uma lista com os repositórios', () => {
    return getRepos(url).then((response) => {
      expect(response).toContain('sd-01-week4-5-project-todo-list');
      expect(response).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

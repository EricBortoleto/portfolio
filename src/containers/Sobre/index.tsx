import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Meu nome é Eric Bortoleto, tenho 30 anos e moro em São Caetano do Sul/SP.
      Há mais de 1 ano, me aventuro pelo mundo da programação e atualmente estou
      aprimorando minhas habilidades através do curso de Engenheiro Front-End na
      EBAC e também na XPe Educação. Estou animado para compartilhar meus
      projetos e colaborar com outros desenvolvedores da comunidade. Obrigado
      por visitar o meu perfil! 👋
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=EricBortoleto&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=EricBortoleto&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

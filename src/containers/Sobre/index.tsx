import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam est,
      asperiores reprehenderit ex aut, non ducimus omnis eligendi commodi nisi
      delectus molestias, repudiandae at distinctio odio voluptatibus labore
      officia blanditiis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=EricBortoleto&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=EricBortoleto&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

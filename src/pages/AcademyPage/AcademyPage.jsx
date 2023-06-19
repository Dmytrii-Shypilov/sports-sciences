import s from './academy-page.module.scss'



import Container from '../../components/Container'
import SideMenu from '../../components/SideMenu'
import { academyMenu } from '../../helpers/academyMenu'

const AcademyPage = () => {
    return (
        <section>
            <Container>
                <SideMenu setView={()=> {}} menuBars={academyMenu}/>
            </Container>
        </section>
    )
}


export default AcademyPage
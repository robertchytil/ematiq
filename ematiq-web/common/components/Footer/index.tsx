
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './styles.module.css';
import {ItemType,IFooterData} from '../../data/FooterData'

export default function index({
    mode='light',
    subtitle='subtitle',
    email='email',
    whatWeDoTitle= 'whatWeDoTitle',
    whoWeAreTitle= 'whoWeAreTitle',
    whatWeDoMenu=[{item:'item',link:'link'}],
    whoWeAreMenu=[{item:'item',link:'link'}],
    footerMenu=[{item:'item',link:'link'}],
}:IFooterData ){
    const createMenu = (data:ItemType[],rowOrCol= 'Row'||'Col',footerMenu=false) => {
        const RowOrCol = rowOrCol==='Col' ? Col : Row
        return data.map((itm:ItemType,idx:Number) => 
        <RowOrCol key={idx.toString()}>
           {footerMenu ?<><Link href={itm.link}><a>{itm.item}</a></Link><span>|</span></>:<Link href={itm.link}><a>{itm.item}</a></Link>} 
        </RowOrCol>)
    }
    return(
        <footer className={`${styles.footer} ${mode==='light'?styles.footer__light:styles.footer__dark}`}>
            <Container fluid={true}>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Row className={styles.footer__subtitle}>{subtitle}</Row>
                            <Row><Link href={`mailto:${email}`}><a className={styles.footer__email}>{email}</a></Link></Row>
                        </Col>
                        <Col sm={3}>
                            <Row className={styles.footer__subtitle}><h3 className={styles.footer__whattitle}>{whatWeDoTitle}</h3></Row>
                            <Row className={styles.footer__submenu}>
                            {createMenu(whatWeDoMenu, 'Row')}
                            </Row>
                        </Col>
                        <Col sm={3}>
                        <Row className={styles.footer__subtitle}><h3 className={styles.footer__whattitle}>{whoWeAreTitle}</h3></Row>
                            {createMenu(whoWeAreMenu, 'Row')}
                        </Col>
                    </Row>
                    <Row><Col sm={6}><Row className={styles.footer_bottom_menu}>{createMenu(footerMenu, 'Col',true)}</Row></Col></Row>
                </Container>
            </Container>
        </footer>
        
    )
}

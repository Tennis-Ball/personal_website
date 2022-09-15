import Image from 'next/image'
import styles from './contacts.module.css'
export default function Contacts(props){
    return (
    <div className={styles.media}>
        <button><a href="https://github.com/Tennis-Ball" target="_blank" rel="noreferrer"><Image src="/home/images/GitHub-Mark-120px-plus.png" layout="responsive" width={120} height={120}/></a></button>
        <button><a href="mailto:choi.mason@gmail.com" target="_blank" rel="noreferrer"><Image src="/home/images/mail_FILL1_wght700_GRAD0_opsz48-2.png" layout="responsive" width={48} height={48}/></a></button>
        <button><a href="https://www.linkedin.com/in/masonchoi/" target="_blank" rel="noreferrer"><Image src="/home/images/LI-In-Bug.png" layout="responsive" width={540} height={540}/></a></button>
    </div>
    )
}
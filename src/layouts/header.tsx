import styleheader from './header.module.css';
import igniteLogo from '../images/ignite-logo.svg';
export function Header() {
    return (
        <header className={styleheader.header}>
            <img src={igniteLogo} alt="" />
        <strong>Alpha Tech Feed</strong>  
        </header>
         );
}
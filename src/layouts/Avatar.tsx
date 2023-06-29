import styles from './Avatar.module.css'
//aplicando o conceito de Destruturação em JS Caso o componente não tiver a propiedade Hasborder ela é true então o avatar tem borda caso ao contrario não tem borda
interface AvatarProps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}
export function Avatar({hasBorder = true , src , alt}:AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src} 
            alt={alt}
            />
    );
}

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: "M" | "S" | "XS";
    variant: "Primary" | "Secondary" | "Destructive";
    state: "Default";
    leading_icon?: boolean;
    trailing_icon?: boolean;
    badge?: boolean;
    badge_list?: string;
    icon: ReactNode;
    disabled?: boolean; 
}

export function Button({ children, size, variant, state, leading_icon, trailing_icon, badge, badge_list, icon, disabled, ...props}: ButtonProps) {
    const isIcon = !children || children === "";
    return (
        <button disabled={disabled} className={clsx(
            styles.button, 
            size && styles[size],
            variant && styles[variant],
            state && styles[state],
            isIcon && styles['isIcon']
        )}>
            { leading_icon && icon && (
                <span className={styles['leading-icon']}>{icon}</span>
            )}

            {
                !children !== null && children !== undefined &&
                    <span className={clsx(styles.text)}>{ children }</span>
            }
            

            { trailing_icon && icon && (
                <span className={styles['trailing-icon']}>{icon}</span>
            )}

            { badge && badge_list !==undefined && badge_list !== null && parseInt(badge_list, 10) && (
                <span className={styles['badge']}>{badge_list}</span>
            )}

            { !leading_icon && !trailing_icon && icon && (
                <span className={clsx(styles['icon'], !isIcon && styles['icon--aditional'])}>{icon}</span>
            )}
        </button>
    )
}
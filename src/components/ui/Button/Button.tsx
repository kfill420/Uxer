
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface NormalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "m" | "s" | "xs";
    variant: "primary" | "secondary" | "ghost" | "destructive";
    leading_icon?: boolean;
    trailing_icon?: boolean;
    children: ReactNode;
    badge?: boolean;
    badge_list?: string;
    icon?: ReactNode;
    disabled?: boolean; 
    aria_label?: never;
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: never;
    variant: "primary" | "secondary" | "alpha-dark" | "alpha-light";
    leading_icon?: never;
    trailing_icon?: never;
    children?: never;
    badge?: never;
    badge_list?: never;
    icon: ReactNode;
    disabled?: boolean;
    aria_label?: string;
}

// Union discriminante pour choisir entre le NormalButton et l'IconButton
type ButtonProps = NormalButtonProps | IconButtonProps;

export function Button({ children, size, variant, leading_icon, trailing_icon, badge, badge_list, icon, disabled, aria_label }: ButtonProps) {
    const isIconOnly = !children || children === "";

    return (
        <button disabled={disabled} aria-label={aria_label} className={clsx(
            styles.button, 
            size && styles[size],
            variant && styles[variant],
            isIconOnly && styles['isIconOnly']
        )}>
            { leading_icon && icon && 
                <span className={styles['leading-icon']}>{icon}</span>
            }

            { children &&
                <span>{ children }</span>
            }

            { trailing_icon && icon && 
                <span className={styles['trailing-icon']}>{icon}</span>
            }

            { badge && badge_list !==undefined && badge_list !== null && parseInt(badge_list, 10) && 
                <span className={styles['badge']}>{badge_list}</span>
            }

            { !leading_icon && !trailing_icon && icon && 
                <span className={clsx(styles['icon'], !isIconOnly && styles['icon--aditional'])}>{icon}</span>
            }
        </button>
    )
}

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface NormalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "M" | "S" | "XS";
    variant: "Primary" | "Secondary" | "Ghost" | "Destructive";
    leading_icon?: boolean;
    trailing_icon?: boolean;
    children: ReactNode;
    badge?: boolean;
    badge_list?: string;
    icon?: ReactNode;
    disabled?: boolean; 
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: never;
    variant: "Primary" | "Secondary" | "Alpha dark" | "Alpha light";
    leading_icon?: never;
    trailing_icon?: never;
    children?: never;
    badge?: never;
    badge_list?: never;
    icon: ReactNode;
    disabled?: boolean; 
}

type ButtonProps = NormalButtonProps | IconButtonProps;

export function Button({ children, size, variant, leading_icon, trailing_icon, badge, badge_list, icon, disabled }: ButtonProps) {
    const isIconOnly = !children || children === "";

    return (
        <button disabled={disabled} className={clsx(
            styles.button, 
            size && styles[size],
            variant && styles[variant],
            isIconOnly && styles['isIcon']
        )}>
            { leading_icon && icon && 
                <span className={styles['leading-icon']}>{icon}</span>
            }

            { children &&
                <span className={clsx(styles.text)}>{ children }</span>
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
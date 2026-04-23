
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface NormalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "m" | "s" | "xs";
    variant: "primary" | "secondary" | "ghost" | "destructive";
    leading_icon?: ReactNode;
    trailing_icon?: ReactNode;
    children: ReactNode;
    badge?: boolean;
    badge_list?: string;
    separate_icon?: never;
    icon?: never;
    aria_label?: never;
    data_mode?: string;
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: never;
    variant: "primary" | "secondary" | "alpha-dark" | "alpha-light";
    leading_icon?: never;
    trailing_icon?: never;
    children?: never;
    badge?: never;
    badge_list?: never;
    separate_icon?: never;
    icon: ReactNode;
    aria_label?: string;
    data_mode?: string;
}

interface ComplexButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "m" | "s" | "xs";
    variant: "primary" | "secondary" | "destructive";
    leading_icon?: ReactNode;
    trailing_icon?: ReactNode;
    children: ReactNode;
    badge?: boolean;
    badge_list?: string;
    icon?: never;
    separate_icon?: ReactNode;
    aria_label?: never;
    data_mode?: string;
}

// Union discriminante pour choisir entre le NormalButton et l'IconButton
type ButtonProps = NormalButtonProps | IconButtonProps | ComplexButtonProps;

export function Button({ children, size, variant, leading_icon, trailing_icon, badge, badge_list, separate_icon, icon, aria_label, ...props }: ButtonProps) {
    const isIconOnly = !children || children === "";

    return (
        <button aria-label={aria_label} className={clsx(
            styles.button, 
            size && styles[size],
            variant && styles[variant],
            isIconOnly && styles['isIconOnly']
        )}
        {...props}
        >
            { leading_icon && 
                <span className={styles['leading-icon']}>{leading_icon}</span>
            }

            { children &&
                <span>{ children }</span>
            }

            { trailing_icon &&
                <span className={styles['trailing-icon']}>{trailing_icon}</span>
            }

            { badge && badge_list !==undefined && badge_list !== null && parseInt(badge_list, 10) && 
                <span className={styles['badge']}>{badge_list}</span>
            }

            { separate_icon && 
                <span className={clsx(styles['icon'], !isIconOnly && styles['icon--aditional'])}>{separate_icon}</span>
            }

            { icon && 
                <span className={clsx(styles['icon'])}>{icon}</span> 
            }
        </button>
    )
}
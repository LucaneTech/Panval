import { Link } from "react-router-dom"

interface ButtonProps {
    label: string
    onClick?: () => void
    disabled?: boolean
    to: string
    variant?: 'primary' | 'secondary' | 'outline'
    icon?: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, variant, to, icon, className }) =>{
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 btn '
    const variantClasses = {
        primary: 'btn-accent  text-white hover:bg-primary/90',
        secondary: 'btn-primary text-white ',
        outline: 'btn btn-outline border-white/40 text-white hover:bg-white/10 '
    }

    return (
        <button  
            className={`${baseClasses} ${variantClasses[variant || 'primary']} ${className || ''}`} 
            onClick={onClick}
            disabled={disabled}
        > 
           <Link to={to} className="inline-flex gap-1"> 
            
             {label}
              {icon && <span className="mr-2">{icon}</span>}
           </Link>
        </button>
    )
}

export default Button
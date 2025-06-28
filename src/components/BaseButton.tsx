import IconComponent from "./IconComponent";

type ColorVariant = 'primary' | 'secondary' | 'grayscale' | 'transparent';
type ColorTone = '50' | '100' | '200' | '300' | '400';
type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
type BorderWidth = '0' | '1' | '2' | '4' | '8';

export interface BaseButtonProps {
  text: string;
  variant?: ColorVariant;
  tone?: ColorTone;
  href?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isOutlined?: boolean;
  bold?: boolean;
  icon?: string;
  smallIcon?: boolean;
  color?: string;
  borderWidth?: BorderWidth;
  borderRadius?: BorderRadius;
  customClasses?: string;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  text,
  variant = '',
  tone = '',
  href = '#',
  size = 'md',
  isOutlined = false,
  bold = true,
  icon = null,
  smallIcon = false,
  color = '',
  borderWidth = '0',
  borderRadius = 'full',
  customClasses = '',
}) => {
  const getVariantClasses = (): string => {
    let buttonClasses = bold ? 'font-bold ' : '';

    switch (variant) {
      case 'grayscale':
        buttonClasses += `bg-grayscale-${tone} text-neutro-900 border-${borderWidth} border-neutro-900 `;
        if (!icon) {
          buttonClasses += ` hover:bg-neutro-900 hover:text-neutro-50`;
        }
        break;
      case 'transparent':
        buttonClasses += `bg-transparent border-${borderWidth} border-${color ? color : 'neutro-50'} text-${color ? color : 'neutro-50'}`;
        if (!icon) {
          buttonClasses += ` hover:bg-${color ? color : 'neutro-50'} hover:text-${color ? color : 'neutro-700'}`;
        }
        break;
      case 'primary':
        buttonClasses += `bg-primary-500 text-neutro-50 hover:bg-primary-500/80 active:bg-primary-500 active:bg-primary-700 border-${borderWidth} border-primary-500`;
        break;
      case 'secondary':
        buttonClasses += `bg-secondary text-neutro-50 hover:bg-secondary/80 active:bg-secondary active:bg-secondary-700 border-${borderWidth} border-secondary`;
        break;
    }

    return buttonClasses;
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 ';
      case 'md':
        return 'px-4 py-1.5 ';
      case 'lg':
        return 'px-6 py-1.5 ';
      case 'xl':
        return 'px-8 py-2 ';
      default:
        return 'px-8 py-2 ';
    }
  };

  const getBorderRadiusClasses = (): string => {
    switch (borderRadius) {
      case 'none':
        return 'rounded-none';
      case 'sm':
        return 'rounded-sm';
      case 'md':
        return 'rounded-md';
      case 'lg':
        return 'rounded-lg';
      case 'xl':
        return 'rounded-xl';
      case 'full':
        return 'rounded-full';
      default:
        return 'rounded-full';
    }
  };

  const getIconClasses = (): string => {
    return `inline-block mr-2 ${smallIcon ? 'size-2' : 'size-3'} transform scale-100`;
  };

  const iconConditionalClasses =
    variant === 'grayscale' && icon
      ? ' transition duration-300 transform group-hover:translate-x-1'
      : '';

  return (
    <a
      href={href}
      className={`w-fit inline-block ${getBorderRadiusClasses()} transition-colors duration-200 
        text-sm lg:text-lg group ${getVariantClasses()} ${getSizeClasses()} ${customClasses}`}
    >
      {icon && (
        <IconComponent icon={icon} className={`${getIconClasses()}${iconConditionalClasses}`} />
      )}
      {text}
    </a>
  );
};

export default BaseButton;

import React from "react";

type StatusIconVariant = "correct" | "wrong";

type StatusIconSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

interface StatusIconProps {
  variant: StatusIconVariant;
  size?: StatusIconSize;
  className?: string;
}

const sizeMap: Record<Exclude<StatusIconSize, number>, { container: string; icon: string; iconPx: number }> = {
  xs: { container: "size-5",  icon: "size-3",  iconPx: 12 },
  sm: { container: "size-6",  icon: "size-4",  iconPx: 16 },
  md: { container: "size-7",  icon: "size-5",  iconPx: 20 },
  lg: { container: "size-9",  icon: "size-6",  iconPx: 24 },
  xl: { container: "size-12", icon: "size-8",  iconPx: 32 },
};

const CorrectIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.774 10.1333C16.1237 9.70582 16.0607 9.0758 15.6332 8.72607C15.2058 8.37635 14.5758 8.43935 14.226 8.86679L10.4258 13.5116L9.20711 12.2929C8.81658 11.9024 8.18342 11.9024 7.79289 12.2929C7.40237 12.6834 7.40237 13.3166 7.79289 13.7071L9.79289 15.7071C9.99267 15.9069 10.2676 16.0129 10.5498 15.9988C10.832 15.9847 11.095 15.8519 11.274 15.6333L15.774 10.1333Z"
      fill="currentColor"
    />
  </svg>
);

const WrongIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
      fill="currentColor"
    />
  </svg>
);

const variantStyles: Record<StatusIconVariant, { container: string; icon: string }> = {
  correct: {
    container: "bg-green-500/10",
    icon: "text-green-500",
  },
  wrong: {
    container: "bg-red-500/10",
    icon: "text-red-500",
  },
};

/**
 * StatusIcon
 *
 * @param variant  - "correct" | "wrong"
 * @param size     - "xs" | "sm" | "md" | "lg" | "xl" | number (px)
 * @param className - extra classes applied to the outer wrapper
 *
 * @example
 * <StatusIcon variant="correct" size="md" />
 * <StatusIcon variant="wrong"   size={40} />
 */
const StatusIcon: React.FC<StatusIconProps> = ({
  variant,
  size = "md",
  className = "",
}) => {
  const styles = variantStyles[variant];

  // Numeric size — use inline styles for full flexibility
  if (typeof size === "number") {
    const iconPx = Math.round(size * 0.7);
    return (
      <div
        className={`flex items-center justify-center rounded-full ${styles.container} ${className}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label={variant === "correct" ? "Correct" : "Wrong"}
      >
        <span className={styles.icon}>
          {variant === "correct" ? (
            <CorrectIcon size={iconPx} />
          ) : (
            <WrongIcon size={iconPx} />
          )}
        </span>
      </div>
    );
  }

  // Named size — use Tailwind classes
  const { container, icon, iconPx } = sizeMap[size];
  return (
    <div
      className={`flex items-center justify-center rounded-full ${container} ${styles.container} ${className}`}
      role="img"
      aria-label={variant === "correct" ? "Correct" : "Wrong"}
    >
      <span className={`${icon} ${styles.icon}`}>
        {variant === "correct" ? (
          <CorrectIcon size={iconPx} />
        ) : (
          <WrongIcon size={iconPx} />
        )}
      </span>
    </div>
  );
};

export default StatusIcon;

/**
 * ─── Usage examples ───────────────────────────────────────────
 *
 * import StatusIcon from "@/components/StatusIcon";
 *
 * // Named sizes
 * <StatusIcon variant="correct" size="xs" />
 * <StatusIcon variant="correct" size="sm" />
 * <StatusIcon variant="correct" size="md" />   ← default
 * <StatusIcon variant="correct" size="lg" />
 * <StatusIcon variant="correct" size="xl" />
 *
 * // Wrong variant
 * <StatusIcon variant="wrong" size="lg" />
 *
 * // Arbitrary pixel size
 * <StatusIcon variant="correct" size={48} />
 * <StatusIcon variant="wrong"   size={64} />
 *
 * // With extra Tailwind classes
 * <StatusIcon variant="correct" size="md" className="mt-2" />
 */
import {
  Ban,
  Building2,
  Check,
  ChevronDown,
  CircleOff,
  Droplet,
  FlaskConical,
  HeartPulse,
  Leaf,
  Lock,
  RotateCcw,
  RotateCw,
  ShieldCheck,
  ShoppingCart,
  Smile,
  Sparkles,
  Sprout,
  Star,
  Truck,
  Users,
  WheatOff,
  Wind,
  X,
  Zap,
  Heart,
  Handshake,
  Microscope,
  TriangleAlert,
  BadgeCheck,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  users: Users,
  "rotate-ccw": RotateCcw,
  "rotate-cw": RotateCw,
  leaf: Leaf,
  "flask-conical": FlaskConical,
  microscope: Microscope,
  sparkles: Sparkles,
  "building-2": Building2,
  handshake: Handshake,
  sprout: Sprout,
  ban: Ban,
  droplet: Droplet,
  "wheat-off": WheatOff,
  "shield-check": ShieldCheck,
  shield: ShieldCheck,
  "circle-off": CircleOff,
  wind: Wind,
  lungs: Wind,
  zap: Zap,
  "heart-pulse": HeartPulse,
  check: Check,
  x: X,
  "chevron-down": ChevronDown,
  cart: ShoppingCart,
  star: Star,
  heart: Heart,
  smile: Smile,
  lock: Lock,
  "alert-triangle": TriangleAlert,
  "badge-check": BadgeCheck,
  "arrow-up": ArrowUp,
};

export interface IconWrapperProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}

export function IconWrapper({
  name,
  size = 20,
  className,
  strokeWidth = 2,
  filled = false,
}: IconWrapperProps) {
  const Icon = iconMap[name] ?? Leaf;
  return (
    <Icon
      size={size}
      className={className}
      strokeWidth={filled ? 0 : strokeWidth}
      fill={filled ? "currentColor" : "none"}
      aria-hidden
    />
  );
}

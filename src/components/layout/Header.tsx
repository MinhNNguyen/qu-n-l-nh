import { Home, User } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  showMenu?: boolean;
  ownerName?: string;
  onLogout?: () => void;
}

const Header = ({ ownerName }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 max-w-[430px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Home className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground">Lyfe</span>
        </Link>

        {/* Owner Name Badge */}
        {ownerName && (
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium truncate max-w-[120px]">
              {ownerName}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

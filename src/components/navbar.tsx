interface NavbarProps {
  user: any;
  onSignIn: () => void;
  onSignOut: () => void;
}

export const Navbar = ({ user, onSignIn, onSignOut }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h2>My project</h2>
        {user ? (
          <div>
            <span>{user.displayName}</span>
            <button onClick={onSignOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={onSignIn}>Sign In</button>
        )}
      </div>
    </nav>
  );
};

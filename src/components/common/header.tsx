import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

type HeaderProps = {
  variant?: 'light' | 'dark';
};

export default function Header({ variant = 'light' }: HeaderProps) {
  return (
    <header className="py-4 px-6 md:px-8 bg-transparent absolute top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className={cn(
                'h-7 w-7 md:h-8 md:w-8',
                variant === 'light' ? 'text-primary-foreground' : 'text-primary'
              )}
            >
              <path d="M12 22s-8-4.5-8-12.5A8 8 0 0 1 12 2a8 8 0 0 1 8 10.5c0 8-8 12.5-8 12.5Z"/>
              <path d="M12 10a4 4 0 1 0 0-4 4 4 0 0 0 0 4Z"/>
              <path d="M12 14c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5Z"/>
            </svg>
            <span className={cn(
                'text-2xl md:text-3xl font-headline font-bold',
                variant === 'light' ? 'text-primary-foreground' : 'text-primary'
              )}
            >
            Giving Tree
            </span>
        </Link>
      </div>
    </header>
  );
}